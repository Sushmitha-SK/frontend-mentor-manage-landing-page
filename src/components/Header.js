import React from 'react'
import { images } from '../constants';
import "../components/Header.scss";

const Header = () => {
    return (

        <div className="header">
            <div className="header-container">
                <div className="left-header">
                    <h1>Bring eveyone together to build better products.</h1>
                    <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <button className="btn">Get Started</button>
                </div>
                <div className="right-header">
                    <img src={images.illustrationIntro} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Header