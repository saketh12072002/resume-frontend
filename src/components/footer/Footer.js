import './footer.css';

const Footer = () => {
    return ( 
        <div className="main-container">
           <div className="content">
                <div className="logo">Logo</div> 
                <div className="side-content">
                    <div className="newletter-section">
                    <div className="new-head">
                        SUBSCRIBE  TO  THE <br/> NEWSLETTER  FOR  UPDATE
                    </div>
                    <div className = "news-class">
                        <div className="input-section"> hiii</div>
                        <button className="btn-class">Subscribe Now</button>
                    </div>
                    </div>
                    <div className="links">
                        <div className="subheading">GENERAL</div>
                        <div className="link">Contact Us</div>
                        <div>Privacy Policy</div>
                        <div>Documentation</div>

                    </div>
                    <div className="links">
                        <div className="subheading">COMMUNITY</div>
                        <div>Github Repository</div>
                        <div>Join us on Discord</div>
                    </div>
                </div>
                <div className="copywrite-section">Copyright © 2022 Logo</div>
           </div>

       </div>
     );
}
 
export default Footer;