import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMapLocation, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../CSS/clicktocall.css';

function Footer() {
  return (
    <>
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <FontAwesomeIcon icon={faMapLocation} style={{color:"#ff5e14"}}/>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>H144 Noida, 7870592743, Uttar Pradesh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <FontAwesomeIcon icon={faPhone} style={{color:"#ff5e14"}}/>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+91 7870592743</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <FontAwesomeIcon icon={faEnvelopeOpen}style={{color: "#ff5e14"}}/>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>srilogicinfo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} style={{color: "#ff5e14"}}/></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter}  style={{color: "#ff5e14"}}/></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram}style={{color: "#ff5e14"}}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><FontAwesomeIcon icon={faTelegram}style={{color: "white"}}/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a href="#">IlogicWebs</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <section class="call-buton"><a class="cc-calto-action-ripple" href="tel:7870592743"><FontAwesomeIcon class="fa-phone" icon={faPhone}/></a>
</section>
    </>
  );
}
export default Footer;
