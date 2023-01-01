import React from 'react'
import './GalleryHeader.css'
import Navbar from '../navbar/navbar'

const GalleryHeader = () => {
    return (
        <div className='galleryPage-hero-section'>
            <Navbar />
            <div className="hero section-center">
                <div className="content-wrapper">
                    <p className="hero-primary-title">
                        <span>Gallery of</span>
                        <span>Hang Tuah Centre</span>
                    </p>
                    <p className="hero-secondary-title">
                        <span>This gallery is a showcase of photos of the Hang Tuah Center including the building's exterior as well as its interior spaces and features accompanied by captions or other information that provides context on the building and its history. Whether you are a historian, an architecture enthusiast, or simply someone with an interest in the past, this gallery is a great resource for learning about and appreciating a piece of history.</span>
                    </p>
                    <div class="orange-btn">
                        <a href="#show-gallery-section">
                            Explore Gallery
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryHeader
