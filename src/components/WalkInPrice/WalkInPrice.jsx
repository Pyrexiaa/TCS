import React from 'react'
import './WalkInPrice.css'
import { localVisitor, foreignVisitor } from '../../assets'

const WalkInPrice = () => {
    return (
        <div className='WalkInAndOperation'>
            <div className='WalkInPrice-section'>
                <div className='section-center'>
                    <div className='content-wrapper'>
                        <span className='hero-primary-title'>
                            Walk-in Ticket Price
                            <div className='underline-text'></div>
                        </span>
                        <div className='visitor'>
                            <div className='visitor-image'>
                                <img src={localVisitor}></img>
                            </div>
                            <div className='visitor-image'>
                                <img src={foreignVisitor}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='operationHours-section'>
                <div className='section-center'>
                    <div className='content-wrapper'>
                        <span className='hero-primary-title'>
                            Operation Hours
                            <div className='underline-text'></div>
                        </span>
                        <div className='operationHours-content'>
                            <p>Monday - Sunday</p>
                            <p>9 am - 5 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WalkInPrice
