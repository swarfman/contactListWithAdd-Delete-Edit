import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';

export default class Contacts extends React.Component {
		constructor(){
		super();
		this.state = {
			contact: [{
				name: "Mike",
				address: "123 BirdBerry Lane",
				phone: "8005678942",
				email: "abc@gmail.com"
			}]
			// initialize your state
		};
	}

	render() {
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">Add new contact</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<Context.Consumer>
							{({ store }) => {
						return	store.contact.map((elem, index) => {
						return (
							<ContactCard
								key ={index}
								address ={elem.address}
								fullName ={elem.fullName}
								phone ={elem.phone}
								email ={elem.email}
								index = {index}
								onDelete={() => this.setState({ showModal: true})} 
							/>
						);
							});
								
							}
						}
						</Context.Consumer>
					</ul>
				</div>
			</div>
			<Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
		</div>
		);
	}
}
