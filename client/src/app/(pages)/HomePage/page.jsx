"use client"
import React from 'react'
import { NavBar } from '@/components/Navbar/NavBar'
import { Footer } from '@/components/Footer/Footer'


const Home = () => {
  return (
    <section>
       
        <div className="mx-auto max-w-[90%]">
         <NavBar/>
        </div>
         <Footer/>
        

    </section>
  )
}

export default Home;
