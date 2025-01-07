"use client"
import React from 'react'
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { NavBar } from '@/components/Navbar/NavBar'
import { Footer } from '@/components/Footer/Footer'
import { Work } from './Work/Work';
import Testimonial from './Testimonial/Testimonial';



const Home = () => {
  return (
    <section>
      <div className="mx-auto max-w-[90%]">
        <NavBar/>
      </div>
      <Hero/>
      <Work/>
      <Services/>
      {/* <Testimonial/> */}
      <Footer/>
    </section>
  )
}

export default Home;
