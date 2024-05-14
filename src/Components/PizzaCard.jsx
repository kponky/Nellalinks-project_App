import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PizzaCard = () => {
  return (
    <div  className='pizza-card-container'>
    <div className="pcc-heading">
    <h1> Pizza</h1>
    <button> <FontAwesomeIcon icon={faChevronDown}/> </button>
    </div>
    <div className='line'>line</div>
      
    </div>
  )
}

export default PizzaCard
