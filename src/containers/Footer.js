import React from 'react';
import { Link } from 'react-router-dom';

function Footer (){
 return <nav className="footer navbar navbar-light bg-info">
    <form className="form-inline">
      <Link className="btn btn-outline-success" to="/about">About us</Link>
    </form>
  </nav>
}

export default Footer;