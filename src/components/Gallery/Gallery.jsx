import React from 'react'
import './Gallery.css'
import GalleryHeader from '../GalleryHeader/GalleryHeader'
import Footer from '../footer/Footer'
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8 } from '../../assets'

const Gallery = () => {
    return (
        <>
            <GalleryHeader />
            <>
                <div className="body-section">
                    <div className="section-center">
                        <div className="content-wrapper">
                            <a id="show-gallery-section"></a>
                            <div className="gallery-section">
                                <div className="gallery-row-1">
                                    <div className="image-container clickable">
                                        <img src={gallery1} alt="Malacca History" />
                                        <div className="description-box">
                                            <div className="description-caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery-row-2">
                                    <div className="image-container">
                                        <img src={gallery2} alt="Trolley" />
                                    </div>
                                    <div className="image-container">
                                        <img src={gallery3} alt="Status" />
                                    </div>
                                </div>
                                <div className="gallery-row-2">
                                    <div className="image-container">
                                        <img src={gallery4} alt="Staircase" />
                                    </div>
                                    <div className="image-container">
                                        <img src={gallery5} alt="Wallpaper Pattern" />
                                    </div>
                                </div>
                                <div className="gallery-row-1">
                                    <div className="image-container">
                                        <img src={gallery6} alt="House Entrance" />
                                    </div>
                                </div>
                                <div className="gallery-row-2">
                                    <div className="image-container">
                                        <img src={gallery7} alt="Staircase" />
                                    </div>
                                    <div className="image-container">
                                        <img src={gallery8} alt="Wallpaper Pattern" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Footer />
        </>

    )
}

export default Gallery
