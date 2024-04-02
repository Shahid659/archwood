import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
function Testimonial() {
    return (
      <>
        <div className="container p-5  text-center">
        <div id="carouselExampleIndicators" className="carousel slide p-5" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <h5 className="text-dark">Shahid Raza ____</h5>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
            </div>
            <div className="carousel-item">
                <h5 className="text-dark">Syed Shahid  ____</h5>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
            </div>
            <div className="carousel-item">
                <h5 className="text-dark">Syed SR____</h5>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
                <FontAwesomeIcon icon={faStar}style={{color: "#7b6f5d"}}/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon carousel-control-prev-icon-style p-3 mt-5" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon carousel-control-prev-icon-style p-3 mt-5" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
        </div>
      </>
    );
  }
  export default Testimonial;