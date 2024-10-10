import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
        <nav>
            <div className='logoLinks'>
                <img src="../../src/assets/logoDnc.svg" alt="logoDnc" className='logo'/>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            <button className='cta-button'>marque sua consultoria</button>
        </nav> 
    </>
  )
}

export default Header