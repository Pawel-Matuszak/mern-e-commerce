import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../actions/itemActions';
import BannerSrc from "../images/banner_1080x.webp";
import GreetingGif from "../images/greeting_2.gif"
import BuyThatOneGif from "../images/buythatone_3.gif"
import ShopNowGif from "../images/shop_now.gif"
import Product from './Product';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state)=>state.items);

  useEffect(() => {
    dispatch(getItems())
  }, []);

  return (
    <div className='main'>
      <img className="banner" src={BannerSrc} alt="banner" />
      <img className="greeting" src={GreetingGif} alt="greeting" />

      <div className="main-content">
        <h2>featured collection</h2>
        <a href=""><img src={ShopNowGif} alt=""/></a>
        <div className="items">
          {items.map((item, i)=>(
            i<4 && <Product key={item._id} itemDetails={item} />
            
          ))}
        </div>
        <img src={BuyThatOneGif} alt="" className="buythatone"/>
      </div>
    </div>
  )
}

export default Home