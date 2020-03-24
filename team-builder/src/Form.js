import React, {useState} from "react";

const Form = props => {

	const [card, setCard] = useState({
		name: "",
		email: "",
		role: "",
	});

	const eventHandler = event => {
		console.log(event);
		setCard({...card, [event.target.name]: event.target.value});
	};

	const submitForm = event => {
		event.preventDefault();
		props.addMember(card);
	};

	return(
		<div>
			<form onSubmit={submitForm}>

				<label htmlFor="name"></label>
                    <input 
                        onChange={eventHandler} 
                        type="text" 
                        id="name" 
                        name="name"  
                        placeholder="Name" />

                <br></br>

				<label htmlFor="email"></label>
                    <input 
                        onChange={eventHandler} 
                        type="text" 
                        id="email" 
                        name="email"
                        placeholder="Email" />

                <br></br>

				<label htmlFor="role"></label>
                    <input 
                        onChange={eventHandler} 
                        type="text" 
                        id="role" 
                        name="role" 
                        placeholder="Role" />

                <br></br>

				<button type="submit">Submit</button>

			</form>
		</div>
	);
}

export default Form; 