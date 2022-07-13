import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className="max-width header">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="ZOMATO" className="header_logo" />
        <div className="header-right">
          <div className="header-location-search-container">
            <div className="location-wrapper">
              <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bangalore</div>
              </div>
              <i className="fi fi-rr-caret-down absolute-center"></i>
            </div>
            <div className="location-search-separator"></div>
          <div className="header-searchbar">
          <i className="fi fi-rr-search absolute-center search-icon"></i>
          <input placeholder="Search for restaurant, cuisine or a dish" className="search-input" />
          </div>
        </div>
        <div className="profile-wrapper">
          <img src="https://images-na.ssl-images-amazon.com/images/I/819nmWETo8L.png" alt="Profile" className="header-profile-image" />
          <span className="header-username">Sunetra</span>
          <i className="fi fi-rr-angle-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Header