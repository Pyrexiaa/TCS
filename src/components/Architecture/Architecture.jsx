import React from 'react'
import ArchitectureHeader from '../ArchitectureHeader/ArchitectureHeader'
import Footer from '../footer/Footer'
import './Architecture.css'
import ArchitectureOverview from '../ArchitectureOverview/ArchitectureOverview'
import { rumahibu, theFoyer, theFoyerbtm, thePillar, theRig, theRoof, theStaircase, theStaircasebtm, theStilts, theWall, theWallbtm } from '../../assets'

const Architecture = () => {
    return (
        <div>
            <ArchitectureHeader />
            <>
                <div className="body-section">
                    <ArchitectureOverview />
                    <div className="section-center">
                        <div className="content-wrapper">
                            <div className="architecture-card">
                                <a id="rumah-ibu"></a>
                                <h2 className="hero-primary-title architecture-title">01 - Mother's House (Rumah Ibu)</h2>
                                <div className="architecture-container">
                                    <div className="architecture-image-container">
                                        <div className="selection-image">
                                            <img src={rumahibu} alt="Rumah Ibu" />
                                            <p>Architecture 01</p>
                                        </div>
                                    </div>
                                    <div className="architecture-content">
                                        <div className="architecture-description">
                                            <div className="underline long"></div>
                                            <p>The mother's house is the main room of the occupants, which is the privacy of the family, and there is a room for the daughter to rest and sleep.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>Part of the floor in the mother's house is usually not nailed.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>It is used as an emergency route for the occupants of the house or as a space to drain the water for bathing the body in the event of the death of a family member.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="architecture-card">
                                <a id="the-wall"></a>
                                <h2 className="hero-primary-title architecture-title right">02 - The Wall (Dinding)</h2>
                                <br/>
                                <div className="architecture-container">
                                    <div className="architecture-content left">
                                        <div className="architecture-description">
                                            <div className="underline long"></div>
                                            <p>The wall is a component that uses wood or board as its building material.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>The majority of traditional Melaka house walls use wood in various ways, and among the types of wood that are often used to make walls are the Resak and Meranti types.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>These two woods are said to have an attraction in terms of colour and strength.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>This wood splitting is said to be done using a saw and can only be done by experienced craftsmen to ensure that the wood is split according to the taste or specifications of the construction of a house.</p>
                                        </div>
                                    </div>
                                    <div className="architecture-image-container">
                                        <div className="selection-image">
                                            <img src={theWallbtm} alt="The Wall" />
                                            <p>Architecture 02</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="architecture-card">
                                <a id="the-stilts"></a>
                                <h2 className="hero-primary-title architecture-title">03 - The Stilts (Panggung)</h2>
                                <div className="architecture-container">
                                    <div className="architecture-image-container">
                                        <div className="selection-image">
                                            <img src={theStilts} alt="Panggung" />
                                            <p>Architecture 03</p>
                                        </div>
                                    </div>
                                    <div className="architecture-content">
                                        <div className="architecture-description">
                                            <div className="underline long"></div>
                                            <p>Cengal wood, resak merbau, sea resin, nibong, and others are often used as poles because this type of wood is quite heavy, water-resistant, and can also avoid being eaten by termites or beetles.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>Usually, this type of wood is used in a rather luxurious house, or the owner wants the pole to be more beautiful. The pillar will be lined with a base stone made of cement or solid stone.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>According to sources, the poles of traditional Malay houses will have holes punched to accommodate the pole nails, and coins or ore dung will be placed in the pole holes before being lined with foundation stones.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>In addition, bendul also affects the structure of the pole because it is an ornament on a building. In addition to acting as a separator between components, bendul acts as a floor end cover to show the neatness of the
                                                construction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="architecture-card">
                                <a id="the-foyer"></a>
                                <h2 className="hero-primary-title architecture-title right">04 - The Foyer (Ruang Serambi)</h2>
                                <br />
                                <div className="architecture-container extra-space">
                                    <div className="architecture-content left">
                                        <div className="architecture-description">
                                            <div className="underline long"></div>
                                            <p>The foyer is used as a place to chat and is considered an open space because events related to customs and religion, such as weddings, studying, teaching religious knowledge, and reading the Quran, are always held in this space.
                                            </p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>The level of the porch floor is lower than the floor of the mother's house as a sign of respect for visiting guests who respect the host.</p>
                                        </div>
                                    </div>
                                    <div className="architecture-image-container">
                                        <div className="selection-image">
                                            <img src={theFoyerbtm} alt="Ruang Serambi" />
                                            <p>Architecture 04</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="architecture-card">
                                <a id="the-staircase"></a>
                                <h2 className="hero-primary-title architecture-title">05 - The Staircase (Tangga)</h2>
                                <div className="architecture-container">
                                    <div className="architecture-image-container">
                                        <div className="selection-image">
                                            <img src={theStaircasebtm} alt="Tangga" />
                                            <p>Architecture 05</p>
                                        </div>
                                    </div>
                                    <div className="architecture-content">
                                        <div className="architecture-description">
                                            <div className="underline long"></div>
                                            <p>The staircase of a traditional Malay house is quite an important construction because the floor of a traditional house is high and usually faces the public road.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>2 types of stairs</p>
                                            <li>Round stairs made of wood and round ones known as "tangga bertanggam"</li>
                                            <li>"Tangga picak" which are flat and made of thick boards.</li>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>The front wooden stairs or the main stairs used to be built under the roof to maintain the durability of the stairs, and the ends of the stairs would be lined with "batu kaki" that were carved one foot wide.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>Wooden stairs are usually built in normal traditional houses and the roof will connect from the foyer to form a hall. There are also staircases made from stone and cement engraved with floral motif which is believed to be from
                                                China.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="architecture-card">
                                <a id="the-roof"></a>
                                <h2 className="hero-primary-title architecture-title right">06 - The Roof (Bumbung)</h2>
                                <br/>
                                <div className="architecture-container">
                                    <div className="architecture-content left">
                                        <div className="architecture-description">
                                            <div className="underline long"></div>
                                            <p>Traditional Melaka houses usually have a long or folded kajang roof.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>Among the types of roofs on traditional houses are the cucuh roof, the bertam roof, the rembia roof, the nipah roof, the ijuk roof, the genting roof, the cement roof, the zinc roof, and the wooden roof.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>The building materials that were used in the early days of traditional house construction were nipah and rembia roofs.</p>
                                        </div>
                                    </div>
                                    <div className="architecture-image-container">
                                        <div className="selection-image">
                                            <img src={theRoof} alt="Bumbung" />
                                            <p>Architecture 06</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="architecture-card">
                                <a id="the-rig"></a>
                                <h2 className="hero-primary-title architecture-title">07 - The Rig (Pelantar)</h2>
                                <div className="architecture-container">
                                    <div className="architecture-image-container">
                                        <div className="selection-image">
                                            <img src={theRig} alt="Pelantar" />
                                            <p>Architecture 07</p>
                                        </div>
                                    </div>
                                    <div className="architecture-content">
                                        <div className="architecture-description">
                                            <div className="underline long"></div>
                                            <p>The platform is an uncovered wet space built between the "rumah ibu" and the kitchen for washing and drying clothes or dishes and so on. This room becomes the focus of children when the rainy season arrives, making this room
                                                their bathing place.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>The passage of time and the development of building material technology caused the original floor made of bamboo and nibong sticks to be replaced by cement floors.</p>
                                        </div>
                                        <div className="architecture-description">
                                            <div className="underline"></div>
                                            <p>In addition, the culture of the Malay community is more comfortable if their married children do not move far away from them, then the house is connected with the construction of a new room such as "rumah ibu" and the platform is
                                                the separator. This construction is called "rumah berbandung dua" and the house depends on the increase in the number of residents and the size of the house.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Footer />
        </div>
    )
}

export default Architecture
