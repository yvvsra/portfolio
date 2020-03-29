import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  return (
    <div>
    <NavLink exact to="/" className="navbar-brand">YVVSRA</NavLink>

    <nav className="navbar navbar-expand-sm navbar-dark bg-primary  justify-content-center">
       <div className="navbar-nav">
        <div className=" navbar-nav ml-auto">
          <NavLink exact to="/" className="nav-item nav-link" activeClassName="nav-item nav-link active">Home</NavLink>
          <NavLink exact to="/Portfolio" className="nav-item nav-link" activeClassName="nav-item nav-link active">Portfolio </NavLink>
          <NavLink exact to="/Cv" className="nav-item nav-link" activeClassName="nav-item nav-link active">CV</NavLink>
          <NavLink exact to="/About" className="nav-item nav-link" activeClassName="nav-item nav-link active">About </NavLink>
          <NavLink exact to="/Contact" className="nav-item nav-link nav-contact" activeClassName="nav-item nav-link active">Contact </NavLink>
          {/*<NavLink class="nav-link dropdown-toggle" exact to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></NavLink>*/}
        </div>
        
    </div> 
  </nav>
   </div>
  );
};

export default Navbar;

