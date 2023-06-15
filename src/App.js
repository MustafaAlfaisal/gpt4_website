import React from 'react'
import { Footer, Header, WhatGPT4, Features, Blog, Possibility} from './containers'
import { Cta, Article, Brand, Feature, Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT4 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App