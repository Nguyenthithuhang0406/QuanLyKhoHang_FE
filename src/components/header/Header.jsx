/* eslint-disable */
import React from 'react'

import './Header.css';
const Header = () => {
  return (
    <div className='heder'>
      <div className='lef'>
          <div><i className="fa-regular fa-star"></i></div>
          <div><p>Công ty ABC</p></div>
      </div>
      <div className='right'>
          <div><i className="fa-regular fa-bell"></i></div>
          <div><i className="fa-solid fa-right-from-bracket"></i></div>
      </div>
    </div>
  )
}

export default Header