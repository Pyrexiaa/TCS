import React from 'react'
import './OurTeamHeader.css'
import Navbar from '../navbar/navbar'

const OurTeamHeader = () => {
    return (
        <div className='ourTeamPage-hero-section'>
            <Navbar />
            <div className="hero section-center">
                <div className="content-wrapper">
                    <p className="hero-primary-title">
                        <span>Meet Our Team</span>
                    </p>
                    <p className="hero-secondary-title">
                        <span>Meet our dynamic and dedicated team! We are a group of nine students with a wide range of skills and expertise. At the University of Malaya, our team members bring a diverse set of experiences and perspectives to the table. Together, we are committed to promoting the best of Malaysia's historical architecture and striving to deliver innovative solutions to the public every day.</span>
                    </p>
                    <div class="orange-btn">
                        <a href="#view-team">
                            View Team
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeamHeader
