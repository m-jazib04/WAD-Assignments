import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Footer() {

    return (

      <div className="mj-footer">
        <div className="content" style={{lineHeight: '2.2rem'}}>
          <p style={{textAlign: 'left'}}>Contact Us</p>
          <ul style={{color: 'grey'}}>
            <li style={{textAlign: 'left'}}>
              <i className="fa-solid fa-location-dot" style={{marginRight: '1rem'}} />ThemesGround, Anytown, CA 12345 USA</li>
            <li style={{textAlign: 'left'}}> <i className="fa-solid fa-phone" style={{marginRight: '1rem'}} />+(888) 123-4567</li>
            <li style={{textAlign: 'left'}}> <i className="fa-solid fa-envelope" style={{marginRight: '1rem'}} />Flipmart@themesground.com</li>
            <li style={{textAlign: 'left'}} className="icons">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-google" />
              <i className="fa-brands fa-linkedin" />
              <i className="fa-brands fa-youtube" />
              <i className="fa-brands fa-github" />
              <i className="fa-brands fa-figma" />
              <i className="fa-brands fa-font-awesome" />
            </li>
          </ul>
        </div>
        <div className="content">
          <p>Customer Service</p>
          <ul style={{color: 'grey'}}>
            <li style={{textAlign: 'left'}}>My Account</li>
            <li style={{textAlign: 'left'}}>Order History</li>
            <li style={{textAlign: 'left'}}>FAQ</li>
            <li style={{textAlign: 'left'}}>Specials</li>
            <li style={{textAlign: 'left'}}>Help Center</li>
          </ul>
        </div>
        <div className="content">
          <p>Corporation</p>
          <ul style={{color: 'grey'}}>
            <li><Link to="/page2">About Us</Link></li>
            <li style={{textAlign: 'left'}}>Customer Service</li>
            <li style={{textAlign: 'left'}}>Company</li>
            <li style={{textAlign: 'left'}}>Investor Relations</li>
            <li style={{textAlign: 'left'}}>Advanced Search</li>
          </ul>
        </div>
        <div className="content">
          <p style={{textAlign: 'left'}}>Why choose Us</p>
          <ul style={{color: 'grey'}}>
            <li style={{textAlign: 'left'}}>Shopping Guide</li>
            <li style={{textAlign: 'left'}}>Blog</li>
            <li style={{textAlign: 'left'}}>Company</li>
            <li style={{textAlign: 'left'}}>Investor Relations</li>
            <li><Link to="/page3 " >Contact Us</Link></li>
          </ul>
        </div>
      </div>
    );
}

export default Footer;