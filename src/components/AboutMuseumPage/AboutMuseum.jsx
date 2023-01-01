import React from 'react'
import './AboutMuseum.css'
import SecondPageHeader from '../MuseumHeader/SecondPageHeader'
import Footer from '../footer/Footer'
import VisitingMuseum from '../VisitingMuseum/VisitingMuseum'
import DisplayImage from '../displayImage/DisplayImage'
import WalkInPrice from '../WalkInPrice/WalkInPrice'

const AboutMuseum = () => {
  return (
    <div>
        <SecondPageHeader />
        <VisitingMuseum />
        <DisplayImage />
        <WalkInPrice />
        <Footer />
    </div>
  )
}

export default AboutMuseum
