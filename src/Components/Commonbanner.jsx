import { Link } from "react-router-dom";
function Commonbanner({...breadcrumb}) {
  return (
    <>  
      <div className="container-fluid cbanner">
          <ul id="list-style">
            <li> <Link to={breadcrumb.path}>{breadcrumb.home}</Link></li> 
            <li>{breadcrumb.currentpage}</li>
          </ul>
      </div>
    </>
  );
}
export default Commonbanner;
