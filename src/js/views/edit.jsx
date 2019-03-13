import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export default class EditContact extends React.Component {
	constructor(){
		super();
		this.state = {
			contact: [{
				fullName: "Mike L",
				address: "123 blah blah Lane",
				phone: 8005678942,
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
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<Context.Consumer>
						{ ({actions}) => {
						
						return(
							<form id="formLife" onSubmit={ (e) => { 
								if (this.onSubmitFunction(e) === true){
									actions.addContact(e);
									
								}
								
							}}>
								<div className="form-group">
									<label>Full Name</label>
									<input type="text" id="nameInput" className="form-control" placeholder="Full Name" value= {this.state.value} onChange={(e)=>this.state.fullName} />
								</div>
								<div className="form-group">
									<label>Email</label>
									<input type="email" id="emailInput" className="form-control" placeholder="Enter email" value= {this.state.value} onChange={(e)=>this.state.email} />
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input type="phone" id="phoneInput" className="form-control" placeholder="Enter phone" value= {this.state.value} onChange={(e)=>this.state.phone} />
								</div>
								<div className="form-group">
									<label>Address</label>
									<input type="text" id="addressInput" className="form-control" placeholder="Enter address" value= {this.state.value} onChange={(e)=>this.state.address} />
								</div>
								<button type="submit" id="submitBtn" className="btn btn-primary form-control">save</button>
								<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
							</form>
					);}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}