import React from 'react'
import '../styles/home.css'
import Search from '../Components/Search'
import Tabs from '../Components/Tabs'

const Home = () => {
  return (
    <div className='home-container'>
    <div className="menu">
    <h1>Menu</h1>
   </div>
    <Tabs/>
    <Search/>
  
  
 
    </div>
  )
}

export default Home
