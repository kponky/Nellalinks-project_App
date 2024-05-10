import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  // load the cart dat from localstorage on component mount
  const initialCartData =
    JSON.parse(localStorage.getItem("nellalinks_cart")) || [];
  const [cart, setCart] = useState(initialCartData);
  // item amount state
  const [itemCount, setItemCount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  // save cart data to localstorage on each cart change
  useEffect(() => {
    localStorage.setItem("nellalinks_cart", JSON.stringify(cart));
  }, [cart]);

  // calculate the total price of an item per quantity
  useEffect(() => {
    const totalPrice = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    setTotal(totalPrice);
  },[cart]); // include cart as a dependency

  // update the item count
  useEffect(() => {
    if (cart) {
      const quantity = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0);
      setItemCount(quantity);
    }
  }, [cart]);

  // add to cart
  const addToCart = (item, id) => {
    const newItem = { ...item, quantity: 1 };
    // check if the item is already in tthe cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // if item not in cart, add the new item to cart
      setCart([...cart, newItem]);
    }
  };
  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  // increase quantity
  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease quantity
  const decreaseQuantity = (id) => {
    // check if the item is in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    // remove the item from cart when < 1
    if (cartItem.quantity < 2) {
      removeFromCart(id);
    }
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        itemCount,
        total,
        clearCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
