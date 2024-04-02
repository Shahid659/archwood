import Header from '../Components/Header';
import Commonbanner from '../Components/Commonbanner';
import Footer from '../Components/Footer';
function Residencial() {

  const breadcrumb = {home: 'Home', path:'/', currentpage:'Residencial Interior'};
  return (
    <> 
      <Header/> 
      <Commonbanner {...breadcrumb}/>
    <div className='container p-5'>
            <div className='main-title'>
            <h3>Best Residencial Interior Services</h3>
                <p className='text-center mb-5'>As a leading interior design company, we specialize in creating attractive and functional living spaces that match your unique style and enhance your everyday life.</p>
            </div>
        <div className='row'>
                <div className='col-md-3 p-2'>
                    <div class="card services-card">
                        <img className="card-img-top w-100" src="../assets/Images/services/1.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Living Room</a></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div class="card services-card">
                    <img className="card-img-top w-100" src="../assets/Images/services/2.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Dinning Room</a></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div class="card services-card">
                    <img className="card-img-top w-100" src="../assets/Images/services/3.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Bedroom</a></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div class="card services-card">
                    <img className="card-img-top w-100" src="../assets/Images/services/4.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Modular Kitchen</a></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div class="card services-card">
                    <img className="card-img-top w-100" src="../assets/Images/services/5.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Wardrobe</a></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div class="card services-card">
                    <img className="card-img-top w-100" src="../assets/Images/services/6.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Bathroom</a></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div class="card services-card">
                    <img className="card-img-top w-100" src="../assets/Images/services/7.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Home Office</a></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div class="card services-card">
                    <img className="card-img-top w-100" src="../assets/Images/services/8.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Kids Room</a></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div className='container-fluid p-5 bg-backgroudfix'>
        <div className='row p-5'>
                <div className='col-md-5 p-2'>
                    <div class="card services-card p-5">
                        <div className="card-body">
                        <h2 className="card-title">Archwood interior & <br/>Decorator</h2>
                        <p className="card-text">We are architects, planners & designers out to change the world.</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
      <Footer/>
    </>
  );
}
export default Residencial;

