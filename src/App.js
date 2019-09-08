import React from 'react';
import makeID from './modules/idGen.js';
import generateSituation from './modules/generateSituation.js';
import logo from './logo.svg';
import './App.scss';

const title = "An Uncertain Universe";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentEvent: false,
			pastEvents: [],
		};
	}
	generateAnEvent = () => {
		if(this.state.currentEvent){
			this.setState(state => {
				const pastEvents = [state.currentEvent].concat(state.pastEvents);
				return {
					pastEvents
				};
			});
		}
		this.setState({
			currentEvent: generateSituation().t
		})
	}
	showCurrentEvent = () => {
		if(this.state.currentEvent){
			return <>
				<h2>Your Latest Event</h2>
				<p>{this.state.currentEvent}</p>
			</>;
		}
	}
	showPastEvents = () => {
		if(this.state.pastEvents.length > 0){
			return <>
				<h2>Your Past Events</h2>
				<div className="past-events-contain">
					{this.state.pastEvents.map((i)=>{
						return <p key={makeID()+""}>{i}</p>;
					})}
				</div>
			</>
		}
	}
	render(){
		return (
			<main className="grid">
				<header className="grid-m-4 grid-t-10 push-t-1 grid-d-8 push-d-2">
					<h1 className="logo"><img src={logo} title={title} /></h1>
					<p>Welcome to {title}. This is a tool to help you randomly generate events to spice up your WWE Universe. I plan to add customization to this tool at a later date, no timeline as of yet. Please make suggestions on github, twitter, or reddit. Consider this a beta release and not a finished product.</p>
				</header>
				<section className="grid-m-4 grid-t-10 push-t-1 grid-d-8 push-d-2 current-event-contain">
					{this.showCurrentEvent()}
					<div class="generate-event-container">
						<button onClick={this.generateAnEvent}>Generate an event</button>
						<span>Generate an event</span>
					</div>
				</section>
				<section className="grid-m-4 grid-t-10 push-t-1 grid-d-8 push-d-2">
					{this.showPastEvents()}
				</section>
				<footer className="grid-m-4 grid-t-10 push-t-1 grid-d-8 push-d-2">
					<p>{title} was developed by <a href="https://hmphry.com">Emily Humphrey</a> on <a href="https://reactjs.org/">React</a>. Its code is released to the public domain. Feel free to browse, create an issue, or clone the repo on <a href="https://github.com/hmphry/an-uncertain-universe">github</a> or wherever you'd like. Have a suggestion? Feel free to reach out to me on <a href="https://twitter.com/heyhmphry">twitter!</a></p>
				</footer>
			</main>
		);
	}
}

export default App;
