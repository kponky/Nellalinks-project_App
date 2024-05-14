import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DonutCard = () => {
  return (
    <div  className='Donut-card-container'>
    <div className="bgc-heading">
    <h1> Dougnuts </h1>
    <button> <FontAwesomeIcon icon={faChevronDown}/> </button>
    </div>
    <div className='line'>line</div>
      
    </div>
  )
}

export default DonutCard
