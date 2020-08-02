import React,{Component} from 'react';
import {Navbar, NavbarBrand,Jumbotron } from 'reactstrap';

class Header extends Component {
	render(){
		return(
           <>
		     <Navbar dark>
		       <div className="container">
		         <NavbarBrand href="/">Resturant Con Fusion</NavbarBrand>
		       </div>
		     </Navbar>
		     <Jumbotron>
		       <div className="container">
                  <div className="row row-header">
                    <div className="col-12 col-sm-6">
                       <h1>Ristorante Con Fusion</h1>
                       <p>We take inspiration from the world best cuisenes, and create a unique future experience, our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                  </div>
		       </div>
		     </Jumbotron>
           </>
			);
	}
}

export default Header;