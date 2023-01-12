import React from 'react'
import './Gallery.css'
import GalleryHeader from '../GalleryHeader/GalleryHeader'
import Footer from '../footer/Footer'
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10 } from '../../assets'

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
                                                <p>The Hang Tuah Centre, which is said to be located on the land that Hang Tuah honed his silat skills, also sites five houses of the five famous warriors during Sultan Mansur Shah. Each house is equipped with a silat court for silat training and cultural activities.</p>
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

                                <div className="gallery-row-2">
                                    <div className="image-container">
                                        <img src={gallery9} alt="Baling Tin" />
                                    </div>
                                    <div className="image-container">
                                        <img src={gallery10} alt="Spears" />
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
