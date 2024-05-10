import React from 'react'

const ItemCard = (props) => {
  const item = props;


  // const [item, setItem] = useState(null)
  return (
    <div className='card-wrapper'>
    <div className="card">
    <img src= {item.image} alt="" />
    
    </div>

     
    </div>
  )
}

export default ItemCard
