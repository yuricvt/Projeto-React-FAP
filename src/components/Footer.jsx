import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
        <img src="../../src/assets/logoFooter.svg" alt="logoDnc" className='logo'/>
        <div className='socialMedia'>
            <img src="../../src/assets/instagramIcon.svg" alt="instagram" className='instagram'/>
            <img src="../../src/assets/facebookIcon.svg" alt="instagram" className='instagram'/>
            <img src="../../src/assets/linkedinIcon.svg" alt="instagram" className='instagram'/>
        </div>
    </footer>
  )
}

export default Footer