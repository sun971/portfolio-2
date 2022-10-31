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
          <p>Hi there! I'm Aisorya, a 4th year Computer Science student</p>
        </div>
      
    </div>
  )
}

export default MainPic
