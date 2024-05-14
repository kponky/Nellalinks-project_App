import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Cheesecard = () => {
  return (
   
        <div  className='cheese-card-container'>
            <div className="cheese-heading">
            <h1> Cheese</h1>
            <button> <FontAwesomeIcon icon={faChevronDown}/> </button>
            </div>
            <div className='line'>line</div>
              
            </div>
       
   
  )
}

export default Cheesecard
