import "./MainPicStyles.css"

import React from 'react'
import headshot from "../assets/headshot-img.jpg"
import "./MainPicStyles.css"

const MainPic = () => {
  return (
    <div className="Main">
        <div className = "mask">
          <img className="headshot" src={headshot} alt="headshot"/>
        </div>
        <div className="description">
          <p>Hi, I'm a Computer Science Student</p>
        </div>
      
    </div>
  )
}

export default MainPic
