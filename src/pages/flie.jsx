<div key="{item.id}" className="cart-item">
<div className="cart-container">
  <img src={item.image} alt={item.title} className="cartImg" />
  <div>
    <div className="title-delete">
      <h2>{item.title}</h2>
      <FontAwesomeIcon icon={faTrash} />{" "}
    </div>
    <p>{item.desc}</p>
  </div>
</div>
<div>
  <h3>N{item.price}</h3>
</div>
<div className="quantity">
  <button onClick={() => decreaseQuantity(item.id)}>
    <FontAwesomeIcon icon={faMinus} />{" "}
  </button>
  <span>{item.quantity}</span>
  <button onClick={() => increaseQuantity(item.id)}>
    <FontAwesomeIcon icon={faPlus} />{" "}
  </button>
</div>

<button onClick={() => removeFromCart(item.id)}>
  <FontAwesomeIcon icon={faTrash} />{" "}
</button>
</div>