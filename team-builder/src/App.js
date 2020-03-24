import React, { useState } from 'react';
import './App.css';
import Form from "./Form";
// import TeamCard from "./TeamCard";


function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const inputChange = event => {
    setFormData({...formData,
    [event.target.name]: event.target.value
    });
    console.log(formData);
  };
  const [teamList] = useState([]);

  const submitForm = event => {
    teamList.push(formData);
    setFormData({
      name: "",
      email: "",
      role: ""
    });
    event.preventDefault();
  };
  return(
  <div className="App">
      <header className="App-header">
        <Form
          inputChange={inputChange}
          formData={formData}
          submitForm={submitForm}
        />
      </header>
      {/* <h3>Team List</h3>
      <div className="card-wrapper">
        {teamList.map(data => {
          return (
            // <TeamCard
              // name={data.name}
              // email={data.email}
              // role={data.role}
            // />
          );
        })} */}
      </div>
    // </div>
  );
}

export default App;
