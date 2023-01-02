import React from 'react'
import './VisitingMuseum.css'
import { tourvillageicon } from '../../assets'

const VisitingMuseum = () => {
  return (
    <div className='visitingMuseum-section'>
      <div className='section-center'>
        <div className='content-wrapper'>
          <span className='hero-primary-title'>
            Visiting Hang Tuah Museum
            <div className='underline-text'></div>
          </span>
          <p className='small-description'>What's in the museum</p>
          <div className="aboutVisiting-content">
            <ul>
              <li>
                <span>
                  <p className="small-white-text">
                    Task
                  </p>
                </span>
              </li>
              <li>
                <p className="medium-blue-text">
                  Collect, preserve and spread quality
                  information and materials professionally
                  which are related to historical heritage
                  for our future generations.
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <p className="small-white-text">
                    Kampung Duyong
                  </p>
                </span>
              </li>
              <li>
                <p className="medium-blue-text">
                  Anyway, he is said to be from Malacca. And his village in Kampung Duyong which is said to have existed for over 600 years.
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <p className="small-white-text">
                    Hang Tuah Village
                  </p>
                </span>
              </li>
              <li>
                <p className="medium-blue-text">
                  And to remember and recall Hang Tuah's heroism, the state of Malacca finally decided to develop the Hang Tuah Village complex. The size is 40 acres, and the cost is over 130 million.
                  <br></br>
                  <br></br>
                  Hang Tuah Village was completed in August 2013. But due to lack of activities, promotion and its location which is a bit out of the city, it kind of just got buried.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisitingMuseum
