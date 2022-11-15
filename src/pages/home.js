import React from 'react'
import Footer from '../components/footer.component'
import Header from '../components/header.component'
import Inspiration from '../components/inspiration.component'
import Main from '../components/main.component'
import Meta from '../components/meta.component'
import Tokens from '../components/tokens.component'

const Home = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <Tokens/>
        <Inspiration/>
        <Meta/>
        <Footer/>
    </div>
  )
}

export default Home