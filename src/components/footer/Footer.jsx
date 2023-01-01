import React from 'react'
import './Footer.css'
import { tourvillageicon } from '../../assets/index'

const Footer = () => {
  return (
    <footer>
        <div className="footer-center">
            <div className="footer-top">
                <p className="hero-primary-title">"Architecture is inhabited sculpture."</p>
                <a href="#email" className="footer-contact-us-btn">
                    Contact Us
                </a>
            </div>
            <div className="footer-line"></div>
            <div className="footer-bottom">
                <div className="footer-content">
                    <div className="footer-bottom-left">
                        <div className="logo">
                            <img src={tourvillageicon} alt="TourVillage"/>
                            <span>TourVillage. All rights reserved.</span>
                        </div>
                    </div>
                    <div className="footer-bottom-right">
                        <div className="footer-links">
                            <div className="link-title">Links</div>
                            <ul>
                                <li><a href="#introduction.html">Introduction</a></li>
                                <li><a href="#architecture.html">Architecture</a></li>
                                <li><a href="#museum.html">Museum</a></li>
                                <li><a href="#gallery.html">Gallery</a></li>
                                <li><a href="#our-team.html">Our Team</a></li>
                            </ul>
                        </div>
                        <div className="footer-social-medias">
                            <div className="link-title">Social Media</div>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/tourvillage2022/">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.00195 22H15.002C20.002 22 22.002 20 22.002 15V9C22.002 4 20.002 2 15.002 2H9.00195C4.00195 2 2.00195 4 2.00195 9V15C2.00195 20 4.00195 22 9.00195 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12.002 15.5C12.4616 15.5 12.9167 15.4095 13.3413 15.2336C13.766 15.0577 14.1518 14.7999 14.4768 14.4749C14.8018 14.1499 15.0596 13.764 15.2355 13.3394C15.4114 12.9148 15.502 12.4596 15.502 12C15.502 11.5404 15.4114 11.0852 15.2355 10.6606C15.0596 10.236 14.8018 9.85013 14.4768 9.52513C14.1518 9.20012 13.766 8.94231 13.3413 8.76642C12.9167 8.59053 12.4616 8.5 12.002 8.5C11.0737 8.5 10.1835 8.86875 9.52708 9.52513C8.8707 10.1815 8.50195 11.0717 8.50195 12C8.50195 12.9283 8.8707 13.8185 9.52708 14.4749C10.1835 15.1313 11.0737 15.5 12.002 15.5V15.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M17.6377 7H17.6497" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p>Instagram</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M14.002 9.3V12.2H16.602C16.802 12.2 16.902 12.4 16.902 12.6L16.502 14.5C16.502 14.6 16.302 14.7 16.202 14.7H14.002V22H11.002V14.8H9.30195C9.10195 14.8 9.00195 14.7 9.00195 14.5V12.6C9.00195 12.4 9.10195 12.3 9.30195 12.3H11.002V9C11.002 7.3 12.302 6 14.002 6H16.702C16.902 6 17.002 6.1 17.002 6.3V8.7C17.002 8.9 16.902 9 16.702 9H14.302C14.102 9 14.002 9.1 14.002 9.3V9.3Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                            <path d="M15.002 22H9.00195C4.00195 22 2.00195 20 2.00195 15V9C2.00195 4 4.00195 2 9.00195 2H15.002C20.002 2 22.002 4 22.002 9V15C22.002 20 20.002 22 15.002 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p>Facebook</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#youtube">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M17.002 20H7.00195C4.00195 20 2.00195 18 2.00195 15V9C2.00195 6 4.00195 4 7.00195 4H17.002C20.002 4 22.002 6 22.002 9V15C22.002 18 20.002 20 17.002 20Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M11.4016 9.5003L13.9016 11.0003C14.8016 11.6003 14.8016 12.5003 13.9016 13.1003L11.4016 14.6003C10.4016 15.2003 9.60156 14.7003 9.60156 13.6003V10.6003C9.60156 9.3003 10.4016 8.9003 11.4016 9.5003Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p>YouTube</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-contacts">
                            <div className="link-title">Contact</div>
                            <ul>
                                <li>
                                    <a href="#address">
                                        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.00195 17H21.002M11.002 17H19.002V11.368C19.002 10.8427 19.002 10.58 18.939 10.335C18.8831 10.1178 18.7911 9.91163 18.6668 9.72496C18.5267 9.51434 18.3314 9.33869 17.9406 8.98758L15.6406 6.92126C14.8846 6.24208 14.5065 5.9025 14.0791 5.77368C13.7027 5.66021 13.3011 5.66021 12.9246 5.77368C12.4973 5.9025 12.1194 6.24208 11.3634 6.92126L11.002 7.24597M11.002 17V4.19995C11.002 3.07985 11.0022 2.51986 10.7842 2.09204C10.5924 1.71572 10.2861 1.40973 9.90974 1.21799C9.48191 1 8.92225 1 7.80215 1H6.20215C5.08204 1 4.52157 1 4.09375 1.21799C3.71743 1.40973 3.41169 1.71572 3.21994 2.09204C3.00195 2.51986 3.00195 3.07985 3.00195 4.19995V17H11.002Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p>
                                            Universiti Malaya, Jalan Projek Menejar 18, Taman Universiti
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#number">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5049 2.25722C7.20118 1.4979 6.46576 1 5.64795 1H2.89669C1.85026 1 1.00195 1.84834 1.00195 2.89478C1.00195 11.7895 8.21273 19 17.1074 19C18.1539 19 19.002 18.1518 19.002 17.1053L19.0018 14.354C19.0018 13.5362 18.5039 12.8009 17.7445 12.4971L15.1091 11.4429C14.427 11.1701 13.6505 11.293 13.0861 11.7633L12.405 12.3307C11.6104 12.9929 10.4419 12.94 9.7105 12.2085L7.79332 10.2915C7.06188 9.56007 7.00918 8.39154 7.67139 7.59688L8.23877 6.91597C8.70905 6.35163 8.83197 5.57493 8.55915 4.89286L7.5049 2.25722Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p>
                                            011-10525189
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#email">
                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.00195 2L10.2305 8L18.0019 2M19.002 4.19995V11.8C19.002 12.9201 19.0022 13.4802 18.7842 13.908C18.5924 14.2844 18.2861 14.5902 17.9097 14.782C17.4819 15 16.9223 15 15.8021 15H4.20215C3.08204 15 2.52157 15 2.09375 14.782C1.71743 14.5902 1.41169 14.2844 1.21994 13.908C1.00195 13.4802 1.00195 12.9201 1.00195 11.8V4.19995C1.00195 3.07985 1.00195 2.51986 1.21994 2.09204C1.41169 1.71572 1.71743 1.40973 2.09375 1.21799C2.52157 1 3.08204 1 4.20215 1H15.8021C16.9223 1 17.4819 1 17.9097 1.21799C18.2861 1.40973 18.5924 1.71572 18.7842 2.09204C19.0022 2.51986 19.002 3.07985 19.002 4.19995Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p>
                                            tourvillage2022@gmail.com
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright-text">© 2022 TourVillage. All rights reserved.</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
