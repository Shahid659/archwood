import Header from '../Components/Header';
import Commonbanner from '../Components/Commonbanner';
import Footer from '../Components/Footer';
function Contactus() {

  const breadcrumb = {home: 'Home', path:'/', currentpage:' Contact Us'};
  return (
    <> 
      <Header/> 
      <Commonbanner {...breadcrumb}/>
        <section className="contact_us">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="contact_inner">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="contact_form_inner">
                                    <div className="contact_field">
                                        <h3>Contatc Us</h3>
                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <input type="text" className="form-control form-group" placeholder="Name" />
                                        <input type="text" className="form-control form-group" placeholder="Email" />
                                        <textarea className="form-control form-group" placeholder="Message"></textarea>
                                        <button className="contact_form_submit">Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="right_conatct_social_icon d-flex align-items-end">
                                   <div className="socil_item_inner d-flex">
                                      <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_sec">
                            <h4>Contact Info</h4>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-headset"></i>
                                <span>+91 7870592743</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-envelope-open-text"></i>
                                <span>info@archwood.com</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-map-marked-alt"></i>
                                <span>First Floor, H-141 Sector-63, Pin 201301</span>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
      <Footer/>
    </>
  );
}
export default Contactus;
