import React, { useState } from 'react';
import './App.css';
import Form from "./Form";
import TeamCard from "./TeamCard";


function App() {

  const [teamMembers, setTeamMembers] = useState([]);

  const addMember = card => {
    const newCard = {
        name: card.name,
        email: card.email,
        role: card.role
    };
    setTeamMembers([...teamMembers, newCard]);
  }

  return (
      <div>
          <Form addMember={addMember} />
          <TeamCard teamMembers={teamMembers} />
      </div>
  );
}


export default App;
