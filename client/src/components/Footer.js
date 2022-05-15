import React from 'react'
import LogoImg from "../images/black_logo_130x.webp"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="grid">

        <div className="grid-item">
          <div className="footer-logo"><img src={LogoImg} alt="berd store logo" /></div>
          <div className="footer-copyright">© 2022 berd store <br/>powered by warren james, llc</div>
        </div>
        
        <div className="grid-item">
          <div className="footer-title">main menu</div>
          <ul className="footer-links">
            <FooterLink link="">home</FooterLink>
            <FooterLink link="">catalog</FooterLink>
          </ul>
        </div>
        
        <div className="grid-item">
          <div className="footer-title">help</div>
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
        </div>
        
        <div className="grid-item">
          <div className="footer-title">join our newsletter</div>
          <p>get notifications about new arrivals<br/> and restocked items!</p>
          <input type="text" />
        </div>
        
        <div className="grid-item">
          <div className="footer-title">contact</div>
          <p>
            warren james llc <br/>
            3908 lebanon pike <br/>
            box number 8249 <br/>
            hermitage, tn 37076-9998 <br/>
          </p>
          <p>customersupport@warrenjames.org</p>
        </div>
      </div>
    </div>
  )
}

const FooterLink = (props) =>{
  return(
    <li className='footer-link'><a href={props.link}>{props.children}</a></li>
  );
}

export default Footer