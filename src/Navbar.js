import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {
	return (
		<div>
			<header>
			<div className='logo'>note-it</div>
				<ul>
					<Link to='/'><li>Home</li></Link>
					<Link to='/diary'><li>Write</li></Link>
					<Link to='/crud'><li>Diary</li></Link>
				</ul>
			</header>
		</div>
	)
}

export default Navbar;
