import React from 'react'
import './OurTeam.css'
import OurTeamHeader from '../OurTeamHeader/OurTeamHeader'
import Footer from '../footer/Footer'
import { gihming, sherwynd, zhengyu, chingyen, yiyang, yanjian, jiayu, kwanyang, jason } from '../../assets'

const OurTeam = () => {
    return (
        <div>
            <OurTeamHeader />
            <div className="body-section">
                <div className="section-center">
                    <div className="content-wrapper">
                        <span className="hero-primary-title">Our Team Members</span>
                        <div className="underline"></div>
                        <p className="medium-blue-text-ourteam">Team BRUH</p>
                        <p className="hero-primary-title title-text">With great power comes great responsibility</p>

                        <div className="team-members">
                            <div className="members-wrapper">
                                <span className="member" id="1"><img src={gihming} alt="gay-ming.png" /></span>
                                <span className="member" id="2"><img src={sherwynd} alt="sherwynd.png" /></span>
                                <span className="member" id="3"><img src={zhengyu} alt="zheng-yu.png" /></span>
                                <span className="member" id="4"><img src={chingyen} alt="ching-yen.png" /></span>
                                <span className="member" id="5"><img src={yiyang} alt="yi-yang.png" /></span>
                                <span className="member" id="6"><img src={yanjian} alt="yan-jian.png" /></span>
                                <span className="member" id="7"><img src={jiayu} alt="jia-yu.png" /></span>
                                <span className="member" id="8"><img src={kwanyang} alt="kwan-yang.png" /></span>
                                <span className="member" id="9"><img src={jason} alt="jason.png" /></span>
                            </div>
                        </div>

                        <p className="designer-title">Designer</p>
                        <p className="designer-name">Chen Ching Yen & Choong Yi Yang</p>
                        <a id="view-team"></a>
                        <div className="profile-section">
                            <span className="hero-primary-title">Project Manager</span>
                            <div className="underline"></div>
                            <div className="profile-container">
                                <div className="profile">
                                    <img className="profile-picture" src={gihming} alt="gih-ming.png" />
                                    <span className="profile-name">Ng Gih Ming</span>
                                </div>
                                <p className="profile-description">
                                    <span>Manage to handle over 20+ projects since his career started. he knows the job scope of his department as well as the difficulty of accomplishing each task. The most important thing is after his project ended, his clients were
                                        always happy with all the outcomes.</span>
                                </p>
                            </div>
                        </div>
                        <a id="Secretary"></a>
                        <div className="profile-section">
                            <span className="hero-primary-title">Secretary</span>
                            <div className="underline"></div>
                            <div className="profile-container">
                                <div className="profile">
                                    <img className="profile-picture" src={sherwynd} alt="sherwynd.png" />
                                    <span className="profile-name">Sherwynd Liew Liyuan</span>
                                </div>
                                <p className="profile-description">
                                    <span>Writing documentation, reading a research paper, and seeking related materials sound boring to most people, but not him. As an experienced secretary, he truly believes efficiency comes from excellent paperwork.</span>
                                </p>
                            </div>
                            <div className="profile-container">
                                <div className="profile">
                                    <img className="profile-picture" src={zhengyu} alt="zheng-yu.png" />
                                    <span className="profile-name">Lim Zheng Yu</span>
                                </div>
                                <p className="profile-description">
                                    <span>He has always been a good listener instead of an ideator. As a member of the debate team, he helped the team strive by collecting pinpoint information and giving accurate and constructive feedback on the ideas pitched by his
                                        teammates.</span>
                                </p>
                            </div>
                        </div>
                        <div className="profile-section">
                            <span className="hero-primary-title">Designer</span>
                            <div className="underline"></div>
                            <div className="profile-container">
                                <div className="profile">
                                    <img className="profile-picture" src={chingyen} alt="ching-yen.png" />
                                    <span className="profile-name">Chen Ching Yen</span>
                                </div>
                                <p className="profile-description">
                                    <span>A very dedicated self-taught designer capable of designing 2D objects, creating and rendering 3D designs, animations, and anything you could think of. He was born an artist with a fantastic art sense; every one of his art can be
                                        considered a masterpiece.</span>
                                </p>
                            </div>
                            <div className="profile-container">
                                <div className="profile">
                                    <img className="profile-picture" src={yiyang} alt="yi-yang.png" />
                                    <span className="profile-name">Choong Yi Yang</span>
                                </div>
                                <p className="profile-description">
                                    <span>Start to learn drawing in primary school and had an artistic mind. He is particularly good at illustrating the design concept and controlling the use of colour and visual complexity to ensure the outcome is visually balanced and
                                        good for the eyes.</span>
                                </p>
                            </div>
                        </div>
                        <div className="profile-section">
                            <span className="hero-primary-title">Developer</span>
                            <div className="underline"></div>
                            <div className="profile-container">
                                <div className="profile">
                                    <img className="profile-picture" src={yanjian} alt="yan-jian.png" />
                                    <span className="profile-name">Wong Yan Jian</span>
                                </div>
                                <p className="profile-description">
                                    <span>Starting from zero, now he is already a full stack developer who can develop both the front end and back end of a website. He tends to learn from the best design awards and never stops visiting a new website page and evaluating
                                        them daily.</span>
                                </p>
                            </div>
                            <div className="profile-container">
                                <div className="profile">
                                    <img className="profile-picture" src={jiayu} alt="jia-yu.png" />
                                    <span className="profile-name">Lim Jia Yu</span>
                                </div>
                                <p className="profile-description">
                                    <span>Participated in various programming events as both a committee and contestant. He thoroughly comprehends the requirement to build a successful product by implementing the backend using the optimal solution.</span>
                                </p>
                            </div>
                        </div>
                        <div className="profile-section">
                            <span className="hero-primary-title">Multimedia Technician</span>
                            <div className="underline"></div>
                            <div className="profile-container">
                                <div className="profile">
                                    <img className="profile-picture" src={kwanyang} alt="kwan-yang.png" />
                                    <span className="profile-name">Tan Kwan Yang</span>
                                </div>
                                <p className="profile-description">
                                    <span>As a movie lover, he studied how the plot of a story kept the audience from looking away from the screen. He is also well experienced in sound engineering by participating in various music production.</span>
                                </p>
                            </div>
                        </div>
                        <div className="profile-section">
                            <span className="hero-primary-title">Marketing and Public Relations Manager</span>
                            <div className="underline"></div>
                            <div className="profile-container">
                                <div className="profile">
                                    <img className="profile-picture" src={jason} alt="jason.png" />
                                    <span className="profile-name">Jason Wong Jack</span>
                                </div>
                                <p className="profile-description">
                                    <span>Communicating is what he enjoys the most. He is comfortable with being an extrovert, standing out and getting the audience's attention.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OurTeam
