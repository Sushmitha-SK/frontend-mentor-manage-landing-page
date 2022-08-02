import React, { useState } from 'react';
import { images } from '../constants';
import "../components/Navbar.scss";
import { RiCloseLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="mobile-container">
                        <img src={images.logo} alt='' className='logo' />
                        <div className="menu-item" onClick={handleClick}>
                            {click ? <RiCloseLine className='hamburger' /> : <GiHamburgerMenu className='hamburger' />}
                        </div>

                    </div>
                    <div className={click ? 'sidebar active' : 'sidebar'}>
                        <ul className="nav-links">
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Product</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Community</a></li>
                        </ul>
                    </div>
                    <button className="btn">Get Started</button>
                    <img src={images.bgTabletPattern} alt="" className='pattern-top' />
                </div>
            </nav>
        </>
    )
}

export default Navbar