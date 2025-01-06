"use client"
import React from 'react'
import { Hero } from "@/components/Hero/Hero";
import { Work } from "@/components/Work/Work";
import { Services } from "@/components/Services/Services";
import { NavBar } from '@/components/Navbar/NavBar'
import { Footer } from '@/components/Footer/Footer'

const Home = () => {
  return (
    <section>
      <div className="mx-auto max-w-[90%]">
        <NavBar/>
      </div>
      <Hero/>
      <Work/>
      <Services/>
      <Footer/>
    </section>
  )
}

export default Home;
