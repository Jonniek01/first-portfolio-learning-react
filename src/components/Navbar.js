import { React } from "react";
import Logo from "../logo.png"
/*font awsome import*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => { 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt="NK John..."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Me</a>
            </li>
            
            
             <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/nk.john.779">Contacts</a>
            </li>
            
            
          </ul>
          
        </div>
        </div>
      </nav>
    );
}
 
export default Navbar;