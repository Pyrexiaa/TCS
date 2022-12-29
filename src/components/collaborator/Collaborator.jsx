import React from 'react'
import './Collaborator.css'
import { perzimlogo } from '../../assets/index'

const Collaborator = () => {
  return (
    <div class="collaborator-section">
            <div class="section-center">
                <div class="content-wrapper">
                    <span class="hero-primary-title">
                        Collaborator
                        <div class="underline-text"></div>
                    </span>
                    <div class="perzim-intro">
                        <span><img src={perzimlogo} alt=""/></span>
                        <span class="perzim-intro-content">
                            <p class="medium-white-title">Who is PERZIM?</p>
                            <p class="medium-blue-text">
                                Perbadanan Muzium Melaka (PERZIM)
                                is our main collaborator in this
                                project. PERZIM has been working
                                proactively in collecting and
                                preserving ancient artifacts related
                                to historical heritage for the
                                current and future generations.
                            </p>
                        </span>
                    </div>
                    <div class="about-perzim">
                        <div class="hero-primary-title">About PERZIM</div>
                        <div class="about-content">
                            <ul>
                                <li>
                                    <span>
                                        <p class="small-white-text">
                                            Task
                                        </p>
                                    </span>
                                    <p class="medium-blue-text">
                                        Collect, preserve and spread quality
                                        information and materials professionally
                                        which are related to historical heritage
                                        for our future generations.
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <p class="small-white-text">
                                            Vision
                                        </p>
                                    </span>
                                    <p class="medium-blue-text">
                                        To become a museum sector in the state of
                                        Malacca and act as education and tourism
                                        sectors around the globe.
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <p class="small-white-text">
                                            Mission
                                        </p>
                                    </span>
                                    <p class="medium-blue-text">
                                        To inspire education and tourism sectors
                                        through the development of museum and
                                        historical areas professionally.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="visit-perzim-section">
                        <div>
                            <span>Visit PERZIM's official website for more details</span>
                            <span><a class="gradient-btn" target="_blank" href="https://perzim.gov.my/en/">Visit Website</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Collaborator
