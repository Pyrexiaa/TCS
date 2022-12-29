import React from 'react'
import './Evolution.css'
import { architecture1, architecture2, architecture3, architecture4, architecture5} from '../../assets'

const Evolution = () => {
    return (
        <div className='evolution-section'>
            <div className='section-center'>
                <div className='content-wrapper'>
                    <span className='hero-primary-title'>
                        The Evolution Architecture in Malaysia
                        <div className='underline-text'></div>
                    </span>
                    <div className='evolution-content'>
                        <p className='evolution-intro'>
                            From its lengthy history, our country has inherited a diverse spectrum of architectural styles. These buildings demonstrate how far Malaysia has progressed, from the A Famosa fort in Melaka, one of the oldest European architectural relics in Asia, to the Petronas Twin Towers, the highest twin towers in the world.
                            <br></br>
                            <br></br>
                            It is also worth mentioning that Malaysian architecture is a fusion of several different architectural forms, including Islamic, Chinese, and colonial European designs. These influences have affected Malay architecture. While homes in the south are more like to those in Java, those in the north are more like those in Thailand.
                        </p>
                    </div>
                    <div className='timeline'>
                        <div className='container left'>
                            <div className='image'>
                                <img src={architecture1} alt="Testing"></img>
                            </div>
                        </div>
                        <div className='container right'>
                            <div className='content'>
                                <span>
                                    <h3 className='small-white-title'>The Traditional Malay House</h3>
                                </span>
                                <p className='content-text'>Traditional architectural forms, such as tropically-suited roofs and harmonious proportions with decorative elements are considered to still have great cultural value by many in the region. However, these buildings require significant maintenance compared to modern construction; such as the challenges in preserving its main material, wood, from the decaying effect of tropical weather as well as termite infestation. These vernacular construction skills are gradually being lost as Malaysia continues its process of industrialisation, while in Indonesia such traditional dwellings still survive in rural areas.</p>
                            </div>
                        </div>
                        <div className='container left'>
                            <div className='content'>
                                <span>
                                    <h3 className='small-white-title'>The Heritage Shophouse</h3>
                                </span>

                                <p className="content-text">A shophouse is a style of 19th- and early 20th-century architecture that is still found across urban Southeast Asia. The buildings have two or three stories, with a shop on the ground floor, and typically feature an interior courtyard. Early renditions had wooden shutters and decorative moldings, while later ones adopted more of an Art Deco look, with simpler geometric designs.</p>
                            </div>
                        </div>
                        <div className='container right'>
                            <div className='image'>
                                <img src={architecture2} alt="Testing"></img>
                            </div>
                        </div>
                        <div className='container left'>
                            <div className='image'>
                                <img src={architecture3} alt="Testing"></img>
                            </div>
                        </div>
                        <div className='container right'>
                            <div className='content'>
                                <span>
                                    <h3 className='small-white-title'>The Colonial Architecture</h3>
                                </span>

                                <p className="content-text">Most of Malaysia's colonial buildings were built toward the end of the 19th and early 20th centuries. These buildings have Mughal, Tudor Revival, Gothic Revival or Straits Eclectic style of architecture. Most of the styling has been modified to cater to the use of local resources and acclimatised to the local Malaysian climate, which is hot and humid all year round. Buildings with Mughal, Tudor Revival and Gothic Revival style of architecture were built by the colonial power, the British while the Chinese influenced Straits eclectic styles are common in many urban centres around Malaysia where Chinese settlers lived.</p>
                            </div>
                        </div>
                        <div className='container left'>
                            <div className='image'>
                                <img src={architecture4} alt="Testing"></img>
                            </div>
                        </div>
                        <div className='container right'>
                            <div className='content'>
                                <p className="content-text">Malacca, which was a traditional centre of trade in the region, has a large variety of building styles, ranging from Islamic and Chinese styles to those brought by European colonists (Portuguese, Dutch, British). Along with Malacca, Penang is also considered one of the architectural gems of Malaysia. With its colonial-style government buildings, churches, squares, fortifications, and multicultural heritage, both Malacca and George Town demonstrate a unique architectural and cultural townscape without parallel anywhere in East and Southeast Asia.</p>
                            </div>
                        </div>
                        <div className='container left'>
                            <div className='content'>
                                <span>
                                    <p className='small-white-title'>The Modernist and Post-Modernist</p>
                                </span>

                                <p className="content-text">Several design elements of traditional Malaysian architecture are adapted to modern structures to reflect the Malaysian identity. Wood, an important element in traditional Malay buildings, is also reinterpreted and readapted in the modern landscape in the Kuala Lumpur International Airport and Putrajaya. Some of these buildings also incorporated Islamic geometric motifs and designs, such as square patterns or a dome. With the help of modern technology, Malaysian firms are developing skyscraper designs that are specifically for Malaysia's tropical climates.</p>
                            </div>
                        </div>
                        <div className='container right'>
                            <div className='image'>
                                <img src={architecture5} alt="Testing"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Evolution
