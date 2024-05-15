import React, { useState } from 'react'
import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/pattern-2/donut.css'


const DonutCard = ({menuItems}) => {
  const [isOpen, setIsOpen] = useState (false);

  const toggleDonutCard = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div  className='Donut-card-container'>
    <div className="dcc-heading">
    <h1> Dougnuts </h1>
    <button onClick={toggleDonutCard}> 
    <FontAwesomeIcon icon={faChevronDown} className='icon'/> 
    </button>
    </div>
    <div className='line'></div>
    {isOpen && (
      <div className='item-open'>
      {menuItems.map((item) =>(
        <div key={item.id} className="donut-item">
        <img src={item.image} alt={item.title} className="donut-img" />
        <div className="donut-info">
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
        <div className="price-btn">
          <p>{item.price}</p>
          <button className="btn"> <FontAwesomeIcon icon={faPlus}/></button>
        </div>
        </div>
        </div>

      ))}
      </div>
    )}
      
    </div>
  )
}

export default DonutCard

