import React from 'react';
import './navbar.css';
import {tourvillagelogo} from '../../assets/index'
import { Link } from 'react-router-dom';
import AboutMuseum from '../AboutMuseumPage/AboutMuseum';

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-center">
                <div className="logo">
                    <img src={tourvillagelogo} alt="TourVillage"/>
                        <p>TOURVILLAGE</p>
                </div>
                <div className="nav-links">
                    <ul className="links">
                        <li><a href="/">Intro</a></li>
                        <li><a href="/aboutArchitecture">Architecture</a></li>
                        <li><a href="/aboutMuseum">Museum</a></li>
                        <li><a href="/aboutGallery">Gallery</a></li>
                        <li><a href="/aboutOurTeam">Our Team</a></li>
                    </ul>
                </div>
                <div className="orange-btn contact-btn">
                    <a href="#email">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
