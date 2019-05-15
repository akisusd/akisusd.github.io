import React from 'react';
import { Link } from 'react-router-dom';

function Header (){
 return <nav className="navbar navbar-light bg-dark">
    <form className="form-inline">
      <Link className="btn btn-outline-success" to="/reddit">reddit</Link>
      <Link className="btn btn-outline-success" to="/spotify">spotify</Link>
    </form>
  </nav>
}

export default Header;