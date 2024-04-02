import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
function Homeslider() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators custom-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../assets/home-slider/slider1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption carousel-caption-style d-none d-md-block">
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-center">ARCHWOOD___</p>
            <h1 data-aos="fade-right">Interior spaces, inspired solutions. <br/> Shaping your space, together.</h1>
            <button  data-aos="fade-up" className='style-button text-light p-2 mt-5'>Read More__</button>
          </div>
          </div>
          <div className="carousel-item">
          <img src="../assets/home-slider/slider2.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption carousel-caption-style d-none d-md-block">
            <p>ARCHWOOD___</p>
            <h1>Interior spaces, inspired solutions. <br/> Shaping your space, together.</h1>
            <button className='style-button text-light p-2 mt-5'>Read More__</button>
          </div>
          </div>
          <div className="carousel-item">
          <img src="../assets/home-slider/slider3.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption carousel-caption-style d-none d-md-block">
            <p>ARCHWOOD___</p>
            <h1>Interior spaces, inspired solutions. <br/> Shaping your space, together.</h1>
            <button className='style-button text-light p-2 mt-5'>Read More__</button>
          </div>
          </div>
        </div>
      </div>
      <p data-aos="fade-up" data-aos-anchor-placement="bottom-center"></p>
    </>
  );
}
export default Homeslider;
