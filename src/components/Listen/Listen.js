import React, { Component } from 'react';
import '../../App.css';
import './Listen.css';
import rightSupremacy from '../img/RightSupremacy.jpg';
import agentOrange from '../img/AgentOrange.jpg';

class Listen extends React.Component {
	
  	/* Showbox will have a hover event for each img.  When you hover, links will appear
  	   that will go to the streaming and listening sites for each album. */

	render () {
		return (
			<div className="listenPage">
				<div className="container">
					<img className="listenImages image" id='rightSupremacy' src={rightSupremacy} alt="Right Supremacy Art" />
					<div className="overlay">
						<div className="text">
							<h1 className="title">right supremacy (single)</h1>
								<a href="https://pressuresensitive.bandcamp.com/track/right-supremacy"
									className="links">
									bandcamp</a>
								<a href="https://open.spotify.com/album/2cA09yBbKtHM3stE5yESbZ?si=UiFJS-_iTjCL8JNhYbTcGw"
									className="links">
									spotify</a>
								<a href="https://music.apple.com/us/album/right-supremacy-single/1487890059"
									className="links">
									apple</a>
								<a href="https://www.amazon.com/dp/B081J21GM9/ref=sr_1_2?keywords=Pressure+Sensitive&qid=1573862635&s=dmusic&search-type=ss&sr=1-2"
									className="links">
									amazon</a>
						</div>
					</div>
				</div>
				<div className="container">
					<img className="listenImages image" id='agentOrange' src={agentOrange} alt="Agent Orange Art" />
					<div className="overlay">
						<div className="text">
							<h1 className="title">agent orange (full length lp)</h1>
							<a href="https://pressuresensitive.bandcamp.com/album/agent-orange"
						className="links">bandcamp</a>
						</div>
					</div>
				</div>
	  		</div>
		);
	}
}

export default Listen;