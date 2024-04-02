import Header from '../Components/Header';
import Commonbanner from '../Components/Commonbanner';
import Footer from '../Components/Footer';
function Aboutus() {

  const breadcrumb = {home: 'Home', path:'/', currentpage:'About Us'};
  
  return (
    <> 
      <Header/> 
        <Commonbanner {...breadcrumb}/>
        <div className="container p-5 About text-dark">
        <div className='row'>
          <div className='col-md-6'>
              <img src='../assets/Images/about-home.jpg' style={{width:"100%"}} />
          </div>
          <div className='col-md-6'>
            <h4 className="p-2"><span className="About-heading-style">About The Company: </span> Build The Pattern Of Your Modern Life.</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
        </div><hr/>
        <div className="container pb-5 pt-4 About text-dark">
        <div className='row'>
          <div className='col-md-12 text-center'>
              <h2 className='p-2'>Why choose us</h2>
              <p className='text-center p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='col-md-3 p-2'>
              <div class="card services-card text-center">
                  <div className="card-body">
                      <h5 className="card-title">45-Day's Installation</h5>
                  </div>
              </div>
          </div>
          <div className='col-md-3 p-2'>
              <div class="card services-card text-center">
                  <div className="card-body">
                      <h5 className="card-title">Personalized Designs​</h5>
                  </div>
              </div>
          </div>
          <div className='col-md-3 p-2'>
              <div class="card services-card text-center">
                  <div className="card-body">
                      <h5 className="card-title">No Hidden Costs​</h5>
                  </div>
              </div>
          </div>
          <div className='col-md-3 p-2'>
              <div class="card services-card text-center">
                  <div className="card-body">
                      <h5 className="card-title">Up to 10-Year’s Warranty</h5>
                  </div>
              </div>
          </div>
          
        </div>
        </div>
        <Footer/>
    </>
  );
}
export default Aboutus;
