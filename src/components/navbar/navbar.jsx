import React, { useState } from 'react'
import '../navbar/navbar.css'
import {assets} from "../../assets/frontend_assets/assets.js"
import {Link} from 'react-router-dom'

const Navbar = ({setshowLogin}) => {
    const[menu,setMenu]=useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='navbar'>
            <Link to={"/"}><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                <Link to={"/"} onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
                <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
            </ul>
            <div className='navbar-right'>
                
                <div className='navbar-search-icon'>
                   <Link to={"/cart"}><img src={assets.basket_icon} alt="" /></Link> 
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setshowLogin(true)}>Sign in</button>
                <div className='navbar-menu-icon' onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar
