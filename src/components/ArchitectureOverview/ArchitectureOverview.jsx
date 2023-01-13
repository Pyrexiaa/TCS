import React from 'react'
import './ArchitectureOverview.css'
import { rumahibu, theFoyer, theFoyerbtm, thePillar, theRig, theRoof, theStaircase, theStaircasebtm, theStilts, theWall, theWallbtm } from '../../assets'

const ArchitectureOverview = () => {
    return (
        <div className='section-center'>
            <div className='content-wrapper'>
                <span className="hero-primary-title">Overview</span>
                <div className="underline"></div>
                <div className="selection-container">
                    <div className="main-selection">
                        <div className="main-container">
                            <div className="selection-image">
                                <img src={rumahibu} alt="Rumah Ibu" />
                            </div>
                            <div className="selection-content">
                                <p>Architecture 01
                                </p>
                                <h3>Rumah Ibu.</h3>
                                <div className="white-btn">
                                    <a href="#rumah-ibu">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-selection">
                        <div className="sub-container">
                            <div className="selection-image">
                                <img src={theWallbtm} alt="The Wall" />
                            </div>
                            <div className="selection-content">
                                <p>Architecture 02
                                </p>
                                <h3>The Wall.</h3>
                                <div className="white-btn">
                                    <a href="#the-wall">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="sub-container">
                            <div className="selection-image">
                                <img src={theStilts} alt="The Pillar" />
                            </div>
                            <div className="selection-content">
                                <p>Architecture 03
                                </p>
                                <h3>The Pillar.</h3>
                                <div className="white-btn">
                                    <a href="#the-pillar">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="sub-container">
                            <div className="selection-image">
                                <img src={theFoyerbtm} alt="The Foyer" />
                            </div>
                            <div class="selection-content">
                                <p>Architecture 04
                                </p>
                                <h3>The Foyer.</h3>
                                <div className="white-btn">
                                    <a href="#the-foyer">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="sub-container">
                            <div className="selection-image">
                                <img src={theStaircasebtm} alt="The Staircase." />
                            </div>
                            <div className="selection-content">
                                <p>Architecture 05
                                </p>
                                <h3>The Staircase.</h3>
                                <div className="white-btn">
                                    <a href="#the-staircase">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ArchitectureOverview
