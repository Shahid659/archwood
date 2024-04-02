import Header from '../Components/Header';
import Commonbanner from '../Components/Commonbanner';
import Footer from '../Components/Footer';

function Modularworks() {

  const breadcrumb = {home: 'Home', path:'/', currentpage:'Modular Workes'};
  return (
    <> 
      <Header/> 
      <Commonbanner {...breadcrumb}/>
      <Footer/>
    </>
  );
}
export default Modularworks;

