const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: [{
				fullName: "Mike L",
				address: "123 blah blah Lane",
				phone: 8005678942,
				email: "abc@gmail.com"
			},
			{
				fullName: "Tom L",
				address: "123 blah Tom Lane",
				phone: 8005678942,
				email: "abc@gmail.com"
			}]//Your data structures, A.K.A Entities
		},
		actions: {
			addContact: e => {
			
			let name = e.target.nameInput.value;
			let address = e.target.addressInput.value;
			let phone = e.target.phoneInput.value;
			let email = e.target.emailInput.value;
				
			let	tempObject = 
				{fullName: name , 
				address: address , 
				phone: phone , 
				email: email};
				
				let newValues =	getStore();
				console.log(newValues);
				newValues.contact.push(tempObject);
				setStore({newValues});
			//	console.log(getState);
				//console.log(newValues);
			},
			
			deleteContact: e => {
			//	e.addEventListener();
				let deleteArrayValue = getStore();
				deleteArrayValue.contact.splice(e, 1);
				setStore({deleteArrayValue});
				console.log(getState);
				
			}
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;


