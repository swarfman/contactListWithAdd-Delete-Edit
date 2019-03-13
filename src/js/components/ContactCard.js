import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

class ContactCard extends React.Component{

// onDelete = e => {
// 	let x = getStore();
// 	console.log(x);
	
// }


getIndex = () => {
	return `/edit/${this.props.index}`;
}

	
	render(){
		return (
			<li className="list-group-item">
				<Context.Consumer>
					{({ store, actions }) => {
					return (
						<div className="row w-100">
							<div className="col-12 col-sm-6 col-md-3 px-0">
								<img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
							</div>
							<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
								<div className="float-right">
									<Link to={`/edit/${this.props.index}`}>
										<button className="btn" onClick={() => this.props.history.push('/edit/${this.props.index}')}><i className="fas fa-pencil-alt mr-3"></i></button>
										{/*<button className="btn"><i className="fas fa-pencil-alt mr-3"></i></button>*/}
									</Link>
									<button className="btn" onClick={() => actions.deleteContact(this.props.index)}><i className="fas fa-trash-alt"></i></button>
								</div>
								<label className="name lead">{this.props.fullName}</label>
								<br /> 
								<i className="fas fa-map-marker-alt text-muted mr-3"></i>
								<span className="text-muted">{this.props.address}</span>
								<br />
								<span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
								<span className="text-muted small">{this.props.phone}</span>
								<br />
								<span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
								<span className="text-muted small text-truncate">{this.props.email}</span>
							</div>
						</div>
				);	}}
				</Context.Consumer>
			</li>
		);
	}
}

/**
 * Define the data-types for
 * your component's properties
**/
ContactCard.propTypes = {
		history: PropTypes.object,
		onDelete: PropTypes.func,
		deleteContact: PropTypes.func,
		email: PropTypes.string,
		phone: PropTypes.string,
		address: PropTypes.string,
		fullName: PropTypes.string,
		index: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
**/
ContactCard.defaultProps = {
	onDelete: null
};
export default withRouter(ContactCard);