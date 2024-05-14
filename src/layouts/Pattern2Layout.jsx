import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import FooterMenu from '../Components/FooterMenu'
import '../styles/main.css'


const Pattern2Layout = () => {
  return (
    <div className="main-container">
    <Header/>
    <main>
    <Outlet/>
    </main>
    <FooterMenu/>

    </div>
  )
}

export default Pattern2Layout
