import React from 'react';
import { Link, Router } from "react-router-dom";
import '../../App.css';
import facebook from '../img/facebook.png';
import bandcamp from '../img/bandcamp.png';
import instagram from '../img/instagram.png';

const Footer = () => {
	return (
		<div className='Footer'>
			<ul>
				<li >
		       		<a 
		       		href="https://www.facebook.com/pressuresensitiveband/">
		       			<img className="outLink" src={facebook} alt="facebook" />
		       		</a>
		        </li>
		    </ul>
		    <ul>
				<li>
		       		<a href="https://pressuresensitive.bandcamp.com/">
		       			<img className="outLink" src={bandcamp} alt="bandcamp" />
		       		</a>
		        </li>
		    </ul>
		    <ul>
				<li>
		       		<a href="https://www.instagram.com/pressuresensitiveband/">
		       			<img className="outLink" src={instagram} alt="instagram" />
		       		</a>
		        </li>
		    </ul>
  		</div>
	);
}

export default Footer;