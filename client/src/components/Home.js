import React from 'react'
import BannerSrc from "../images/banner_1080x.webp";
import GreetingGif from "../images/greeting_2.gif"

const Home = () => {
  return (
    <div className='main'>
      <img className="banner" src={BannerSrc} alt="banner" />
      <img className="greeting" src={GreetingGif} alt="greeting" />
    </div>
  )
}

export default Home