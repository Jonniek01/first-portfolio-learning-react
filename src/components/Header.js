import React from 'react';
import Typed from "react-typed"
const Header = () => {
    return ( 
<div className="Head-wrapper">
        <div className="main-info">
            <h1>Web Development and website promotions.</h1>
             <Typed
             className="react-typed"
             strings={["Web Design","Web development","Application Devlopment","Google Ads","Machine Learning"]}
             typeSpeed={45}
             backSpeed={60}
             loop
             />
             <a href="#" className="btn-main-offer">Contact Me</a>
         </div>
</div>
     );
}
 
export default Header;
