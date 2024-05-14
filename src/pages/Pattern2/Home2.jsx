import React from 'react'
import pizzaImg from '../../assets/pizza.png'
import Search from '../../Components/Search'
import '../../styles/pattern-2/home.css'

const Home2 = () => {
  return (
    <div className='menu2-container'>
    <div className='menu2-content '>
    <div className='menu2-img'>
    <img src= {pizzaImg} alt="" />
    </div>
     <h1>Menu</h1>
    </div>

    <Search/>

    </div>
  )
}

export default Home2

