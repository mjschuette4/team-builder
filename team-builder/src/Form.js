import React from "react";

const Form = (props) => {

    return (
        <form onSubmit={props.submitForm}>
            <h2>Team Member List</h2>
            <label htmlFor="name">
                <input 
                onChange={props.onInputChange}
                value={props.formData.name}
                name="Name"
                type="text" 
                placeholder="Add Team Member"   />
            </label>
            <br></br>
            <label htmlFor="email">
                <input 
                onChange={props.onInputChange}
                value={props.formData.email}
                name="Email"
                type="text" 
                placeholder="Add Email"
                />   
            </label>
            <br></br>
            <label htmlFor="role">
                <input 
                onChange={props.onInputChange}
                value={props.formData.role}
                 name="Role"
                type="text" 
                placeholder="Add Role"
                />   
            </label>
            <br></br>
            <button type="submit">Submit</button>
        </form>     
    );
}


export default Form;