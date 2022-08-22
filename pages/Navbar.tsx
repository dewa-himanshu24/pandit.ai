import React from 'react'

const Navbar = () => {
  return (
    <div
    className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent"
  >
    <div className="container">
      <div className="relative -mx-4 flex items-center justify-between">
        <div className="w-60 max-w-full px-4">
          <a href="index.html" className="navbar-logo block w-full py-5">
            <img src="assets/images/Pandit_AI.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar