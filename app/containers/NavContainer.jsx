import React from 'react';
import { Link } from 'react-router-dom';

const NavContainer = () => {
  return (
		<div className="nav">
			<Link className="nav-text" to="/">
				HeartThis.At
      </Link>
		</div>);
};

export default NavContainer;
