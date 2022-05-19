import React, { useEffect, useState } from 'react'
import LogoImg from "../images/black_logo_130x.webp";
import {ReactComponent as EnvelopeSvg} from "../images/svgexport-5.svg";
import {ReactComponent as CaretSvg} from "../images/caret-down-solid.svg";

const Footer = () => {

  return (
    <div className='footer'>
      <div className="grid">

        <div className="grid-item logo-div">
          <div className="footer-logo"><img src={LogoImg} alt="berd store logo" /></div>
          <div className="footer-copyright">© 2022 berd store <br/>powered by warren james, llc</div>
        </div>
        
        <FooterGridItem title="menu">
          <ul className="footer-links">
            <FooterLink link="">home</FooterLink>
            <FooterLink link="">catalog</FooterLink>
          </ul>
        </FooterGridItem> 
        
        <FooterGridItem title="help">
          <ul className="footer-links">
            <FooterLink link="">contact</FooterLink>
            <FooterLink link="">shipping / returns</FooterLink>
            <FooterLink link="">size chart</FooterLink>
            <FooterLink link="">privacy policy</FooterLink>
            <FooterLink link="">terms of use</FooterLink>
            <FooterLink link="">terms of service</FooterLink>
            <FooterLink link="">refund policy</FooterLink>
            <FooterLink link="">do not sell my personal information</FooterLink>
            </ul>
        </FooterGridItem>
        
        <FooterGridItem title="join our newsletter">
          <p>get notifications about new arrivals and restocked items!</p>

          <div className="newsletter">
            <input type="text" placeholder='enter your email'/>
            <button type="submit">
              <EnvelopeSvg/>
            </button>
          </div>
        </FooterGridItem>
        
        <FooterGridItem title="contact">
          <p>
            warren james llc <br/>
            3908 lebanon pike <br/>
            box number 8249 <br/>
            hermitage, tn 37076-9998 <br/>
          </p>
          <p>customersupport@warrenjames.org</p>
        </FooterGridItem>

        <div className="grid-item logo-div-mobile">
          <div className="footer-logo"><img src={LogoImg} alt="berd store logo" /></div>
          <div className="footer-copyright">© 2022 berd store <br/>powered by warren james, llc</div>
        </div>
      </div>
    </div>
  )
}

const FooterGridItem = (props) => {
  const [open, setOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const handleResize = () => {
    if(window.innerWidth<=768) setMobileView(true);
    if(window.innerWidth>768) setMobileView(false);
    setOpen(false);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return ()=>{
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <div className="grid-item">
      <div className="mobile-dropdown" onClick={()=>setOpen(!open)}><CaretSvg className={`${(open) ? 'rotate' : ''}`}/></div>
      <div className="footer-title">{props.title}</div>

      <div className={`mobile-content ${(open) ? 'show-mobile-content' : 'hide-mobile-content'}`}>{props.children}</div>
      {!mobileView && props.children}
      
    </div>
  )
}

const FooterLink = (props) =>{
  return(
    <li className='footer-link'><a href={props.link}>{props.children}</a></li>
  );
}

export default Footer