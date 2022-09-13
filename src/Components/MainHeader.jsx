import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (

    <header className='main__header'>
      <div className='container main__header-container'>
        <div className="main__header-left">
          <h4>Healthy | Fit Workout</h4>
          <h1>join the Legends of the fitness world</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus distinctio culpa aut?</p>
          <Link to="/plans" className='btn lg'> Get started</Link>
        </div>
      <div className="main__header-right">
        <div className="main__header-circle"></div>
        <div className="main__header-image">
          <img src="https://www.pngall.com/wp-content/uploads/5/Michael-Jordan-PNG-Download-Image.png" alt="Main Header Image" />
        </div>

      </div>
      </div>
    </header>


  )
}

export default MainHeader