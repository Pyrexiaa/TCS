import React from 'react'
import './ArchitectureHeader.css'
import Navbar from '../navbar/navbar'

const ArchitectureHeader = () => {
  return (
    <div className='architecturePage-hero-section'>
            <Navbar />
            <div className="hero section-center">
                <div className="content-wrapper">
                    <p className="hero-primary-title">
                        <span>Architecture of</span>
                        <span>Hang Tuah Centre</span>
                    </p>
                    <p className="hero-secondary-title">
                        <span>In Malacca, Malaysia, there is a cultural and leisure facility called the Hang Tuah Centre. A hub for cultural and community activities, the complex has a variety of facilities, including an auditorium, exhibition halls, and a multipurpose hall. The Hang Tuah Centre's architecture combines traditional and modern design features with the goal of producing a warm and inviting place that captures Malacca's distinct personality and culture</span>
                    </p>
                    <div className="orange-btn">
                        <a href="#play-video">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 16 18" fill="none">
                                <path d="M1 14.3334V3.66675C1 2.78718 1 2.3474 1.18509 2.08716C1.34664 1.86002 1.59564 1.71065 1.87207 1.675C2.1885 1.63418 2.57572 1.8407 3.35036 2.25384L3.35254 2.25501L13.3525 7.58834C14.212 8.04673 14.6418 8.27596 14.7826 8.58115C14.9053 8.84701 14.9053 9.15321 14.7826 9.41907C14.6418 9.72426 14.212 9.95348 13.3525 10.4119L3.35254 15.7452L3.34978 15.7467C2.57553 16.1596 2.18842 16.3661 1.87207 16.3253C1.59564 16.2896 1.34664 16.1402 1.18509 15.9131C1 15.6528 1 15.213 1 14.3334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Play Video
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ArchitectureHeader
