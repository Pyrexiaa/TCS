import React from 'react'
import { Header } from '../IntroHeader/header'
import Collaborator from '../collaborator/Collaborator'
import Evolution from '../evolution/Evolution'
import Footer from '../footer/Footer'
import './FirstPage.css'

const FirstPage = () => {
  return (
    <div>
      <Header />
      <Collaborator />
      <Evolution />
      <Footer />
    </div>
  )
}

export default FirstPage
