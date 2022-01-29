import Button from '../Button/Button';
import './Footer.css';
import Link from '../Link/Link';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-header'>
                <hr />
                <h2>Logo</h2>
            </div>
            <div className="container">
                <div className="row">
                    <form className="form">
                        <label>
                            <p>SUBSCRIBE TO THE <br />NEWSLETTER FOR UPDATES</p>
                        </label>
                        <div className="input-group">
                            <input type="email" placeholder="yourname@domain.com" />
                            <Button value="Subscribe Now" />
                        </div>
                    </form>
                    <div className="footer-nav">
                        <div className="nav-part">
                            <div className='footer-links-header'>
                                <p>GENERAL</p>
                            </div>
                            <div className="footer-links-body">
                                <Link href="" className="footer-links">Contact Us</Link>
                                <Link href="" className="footer-links">Privacy Policy</Link>
                                <Link href="" className="footer-links">Documentation</Link>
                            </div>
                        </div>
                        <div className="nav-part">
                            <div className='footer-links-header'>
                                <p>COMPANY</p>
                            </div>
                            <div className="footer-links-body">
                                <Link href="" className="footer-links">GitHub Repository</Link>
                                <Link href="" className="footer-links">Join us on Discord</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='footer-copyright'>
                        <p>Copyright &copy; 2022 Logo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}