import React from 'react';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Msgbox } from '../../components';
import './Footer.css';

const Footer = () => {
  return (
    <div className='app__footer section__padding' id='login'>
      <FooterOverlay/>
      <Msgbox/>

      
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className="app__footer-headtext" style={{color: 'white'}}>Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+965 0255056522</p>
          <p className="p__opensans">+965 0255985677</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.glazed} alt="footer_logo" />
          <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.bordure} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext" style={{color: 'white'}}>Working Hours</h1>
        <p className="p__opensans" >Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2024 Glazed. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
