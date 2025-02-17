import React from 'react'
import './LeftSideBar.css'
import assets from '../../assets/assets'

const LeftSideBar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} alt="" className='logo'/>
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text"  placeholder='Search here..'/>
        </div>
      </div>
      <div className="ls-list">
        <div className="friends">
          <img src={assets.profile_img} alt="" />
          <div>
            <p>Aman Singh</p>
            <span>Hello, How are you?</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
