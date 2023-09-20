import React, { useState, useEffect } from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
    const [active, setactive] = useState(false);
    const isActive = () => {
        window.scrollY > 30 ? setactive(true) : setactive(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, []);
    return ([
        <nav className={active ? "navbar active" : "navbar"}>

            <Link to='/'><h3 className="logo">Logo</h3></Link>
            <ul className={
                Mobile ?
                    "nav-links-mobile " :
                    "nav-links "
            } onClick={() => setMobile(false)}>

                <Link to='/ayurveda'><li>Ayurveda</li></Link>
                <Link to='/unani'><li>Unani</li></Link>
                <Link to='/sindha'><li>Sindha</li></Link>
                <Link to='/aboutus'><li>AboutUs</li></Link>
                <Link to='/login'><li>Login</li></Link>
                <Link to='/signup'><li>SignUp</li></Link>


            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross /> : <FaBars />}
            </button>

            {/* //testing */}

        </nav>,
        <div className="testing"></div>
    ]);
}

export default Navbar;