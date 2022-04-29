import React from 'react'

function Header() {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>It's Great Time for A Good Taste of Burger</h3>
            <h1><span>BURGER</span>FOR<br/>WEEK</h1>
            <p className='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className='header-main'>
                <a href='#' className='header-btn'>Order</a>
            </div>
        </div>
    </div>
  )
}

export default Header