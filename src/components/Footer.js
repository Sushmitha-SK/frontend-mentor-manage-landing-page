import React from 'react'
import '../components/Footer.scss'
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { images } from '../constants';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <p className="copyright-1">Copyright 2020. All Rights Reserved</p>
                <div className="leftFooter">
                    <img src={images.logoFooter} alt='' />
                    <ul className="socialMedia">
                        <li><a href="/"><AiFillFacebook /></a></li>
                        <li><a href="/"><AiFillYoutube /></a></li>
                        <li><a href="/"><AiOutlineTwitter /></a></li>
                        {/* <li><a href="/"><BsPinterest /></a></li> */}
                        <li><a href="/"><AiOutlineInstagram /></a></li>

                    </ul>
                </div>

                <div className="middleFooter">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Community</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="rightFooter">
                    <form action="submit">
                        <input type="email" name="Updates in your inbox..." required />
                        <button className="circleButton" type='submit'>Go</button>
                    </form>
                    <p className="copyright-2">Copyright 2020. All Rights Reserved</p>
                </div>

            </div>
        </div>
    )
}

export default Footer