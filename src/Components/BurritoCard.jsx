import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BurritoCard = () => {
  return (
    <div  className='burrito-card-container'>
    <div className="bgc-heading">
    <h1> Burrito </h1>
    <button> <FontAwesomeIcon icon={faChevronDown}/> </button>
    </div>
    <div className='line'>line</div>
      
    </div>
  )
}

export default BurritoCard
