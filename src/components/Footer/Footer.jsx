import React from 'react'
import '../Footer/Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-con-l">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nulla vero perferendis ut eligendi esse aliquam accusantium eos, sunt dolorum quas reiciendis? Assumenda eius molestiae aspernatur voluptate modi dignissimos nemo.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-con-c">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-con-r">
                <h2>Get In Touch</h2>
                <ul>
                    <li>
                        +1232030124
                    </li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            
            <p className="footer-copyright">Copyright 2024 @ Tomato.com - All RIght Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
