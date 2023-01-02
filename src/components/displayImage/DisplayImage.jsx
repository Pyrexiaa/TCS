import React from 'react'
import './DisplayImage.css'
import { visitingImage, map } from '../../assets'

const DisplayImage = () => {
    return (
        <div>
            <div className='section-center'>
                <div className='content-wrapper'>
                    <div className='visiting-image'>
                        <img src={visitingImage}></img>
                    </div>
                    <div className="about-display-content">
                        <ul>
                            <li>
                                <span>
                                    <p className="small-white-text">
                                        You can learn a little bit more about Admiral Hang Tuah's life here.
                                    </p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="small-white-text">
                                        Malacca Malay houses can also be found in this location. Additionally, each home has the names of one of Hang Tuah's fellow soldiers, such as Hang Jebat, who battled alongside him against human defamation.
                                    </p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="small-white-text">
                                        You can enter these Malay houses every day (except the Hang Jebat and Kasturi houses which are closed every Friday).
                                    </p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="small-white-text">
                                        In this area there is also a museum with historical artifacts of the development of Malacca.
                                    </p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='section-center'>
                <div className='content-wrapper'>
                    <div className='visiting-image'>
                        <img src={map} className='display-image'></img>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DisplayImage
