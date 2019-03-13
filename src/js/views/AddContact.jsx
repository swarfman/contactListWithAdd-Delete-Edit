import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class AddContact extends React.Component {
	constructor(){
		super();
		this.state = {
			contact: [{
				fullName: "Mike L",
				address: "123 blah blah Lane",
				phone: "8005678942",
				email: "abc@gmail.com"
			}]
			// initialize your state
		};
	}
	
		onSubmitFunction = e => {
			e.preventDefault();
			
			//console.log(e.target.emailInput.value);
			//query select all values and update with variable information
		let name = e.target.nameInput.value;
			if (name === ""){
				e.target.nameInput.style.background="red";
			}
			
		let email = e.target.emailInput.value;
			if (email === ""){
				e.target.emailInput.style.background="red";
			}
			
		let phone = e.target.phoneInput.value;
			if (phone.length !== 10){
				e.target.phoneInput.style.background="red";
			}
			
		let address = e.target.addressInput.value;
			if (address === ""){
				e.target.addressInput.style.background="red";
			}
		if (e.target.style !== "red"){
			return true;
		}
	}
	
	
	
	
	
	
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
				
				let context = this.props.match.params.theid;
				let contact = store.contact[parseInt(context)];
				if (contact === undefined){
					contact= {};
				}
				//console.log(contact); 
				
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Contact Details</h1>
								<form id="formLife" onSubmit={ (e) => { 
								if (this.onSubmitFunction(e) === true){
									actions.addContact(e);
									
								}
								
							}}>
									<div className="form-group">
										<label>Full Name</label>
										<input type="text" id="nameInput" className="form-control" placeholder= {contact.fullName || ""}   value= {this.state.contact.fullName}   onChange={(e)=>this.setState({fullName: e.target.value})} />
									</div>
									<div className="form-group">
										<label>Email</label>
										<input type="email" id="emailInput" className="form-control" placeholder= {contact.email || ""} value={this.state.contact.email}  onChange={(e)=>this.setState({email: e.target.value})} />
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input type="phone" id="phoneInput" className="form-control" placeholder= {contact.phone || ""} value={this.state.contact.phone}  onChange={(e)=>this.setState({phone: e.target.value})} />
									</div>
									<div className="form-group">
										<label>Address</label>
										<input type="text" id="addressInput" className="form-control" placeholder= {contact.address || ""} value={this.state.contact.address}  onChange={(e)=>this.setState({address: e.target.value})} />
									</div>
									<button type="submit" id="submitBtn" className="btn btn-primary form-control">save</button>
									<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
								</form>
					
							</div>
						</div>
							);	}}
			</Context.Consumer>
		);
	}
}

AddContact.propTypes = {
		history: PropTypes.object,
		onDelete: PropTypes.func,
		deleteContact: PropTypes.func,
		email: PropTypes.string,
		phone: PropTypes.string,
		address: PropTypes.string,
		fullName: PropTypes.string,
		index: PropTypes.number,
		match: PropTypes.object,
		contact: PropTypes.array
};