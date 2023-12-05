import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Publications } from '../components/AboutUs/Publications';


export const PublicationsPage = () => {
  return (
  <>
      <Navbar />
      <Publications />
      <Footer />
  </>
  )
}