import React, { useEffect } from 'react'
import Navbar from '../Home/Navbar'
import MovieDetails from './MovieDetails'
import Footer from '../Home/Footer'

const MovieHome = () => {
  useEffect(() => {
      window.scrollTo(0, 0); 
      document.title="Movie Schedule"
    },[])
  return (
    
    <div>
        <Navbar/>
        <MovieDetails/>
        <hr/>
        <Footer/>
    </div>
  )
}

export default MovieHome