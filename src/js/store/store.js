const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: []//Your data structures, A.K.A Entities
		},
		actions: {
			addContact: e => {
			
			let name = e.target.nameInput.value;
			let address = e.target.addressInput.value;
			let phone = e.target.phoneInput.value;
			let email = e.target.emailInput.value;
				
			let	tempObject = 
				{full_name: name,
				address: address, 
				phone: phone,
				groups: "" ,
				email: email};
			
			
			fetch(
			"https://assets.breatheco.de/apis/fake/contact/",{
			
			method: 'PUT',
			body: JSON.stringify(tempObject),
			headers:{
				'Content-Type': 'application/json'
			}})
			
			.then(res => {
				return res.text();
				})
			.then(response => {
				//console.log("Success:", typeof response);
				//	console.log(response);
				let newValues =	getStore();
				//console.log(newValues);
				newValues.contact.push(tempObject);
				setStore({contact: newValues});
			})

			.catch(error => console.error("Error:", error));
			
			
			},	
			
			deleteContact: e => {
				//console.log(getState);
			fetch(
			"https://assets.breatheco.de/apis/fake/contact/"+e,{
			
			method: 'DELETE'
				
			})
			
			.then(res => {
				return res.text();
				})
			.then(response => {
				let deleteArrayValue = getStore();
				let other = deleteArrayValue.contact.filter((shower) => {
					return shower.id !== e;
						
					});
				setStore({contact: other});
				
				
			})

			.catch(error => console.error("Error:", error));
			
			},
			
			getDatData: () => {
			fetch(
			"http://contact-list-database-flask-api-swarfman.c9users.io:8080/"
			)
			.then(res => res.json())
			.then(response => {
				//console.log("Success:", typeof response);
				//	console.log(response);
				if (typeof response.data === typeof []) {
					setStore({ contact: response.data });
					//console.log(this.state);
				} else {
					setStore({ contact: [] });
				}
			})

			.catch(error => console.error("Error:", error));
			}
	}};
			
			
		
			
			
			};
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()




export default getState;


