import React from 'react'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";
import BannerLogo from '/banner-logo.png';

const Navbar = () => {
  return (
    <div>

      <nav className=" sticky top-0 z-50 bg-gray-200 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='' className="flex items-center">
            <img src={BannerLogo} className="h-8 mr-3" alt="YouTube" />
          </Link>

          <SearchBar />
        </div>
      </nav>



    </div>
  )
}

export default Navbar
