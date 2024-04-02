import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './Header';
import Homeslider from './Homeslider';
import Services from './Services';
import Footer from './Footer';
import Abouthome from './Abouthome';
import Testimonial from './Testimonial';
function Home() {
  return (
    <>
      <Header/>
      <Homeslider/>
      <Abouthome/>
      <Services/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
export default Home;
