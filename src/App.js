import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [hobby, setHobby] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const objt = { name, age, salary, hobby }

    axios.post('https://sheet.best/api/sheets/19142baf-a9b9-44e8-a109-c2ee3bbe8ffb', objt).then((response) => {
      console.log(response);
    });
  };

  return (
    <Container fluid className="container">
      <Header as="h2">React Google Sheets!</Header>
      <Form className="form">
        <Form.Field>
          <label>Name</label>
          <input 
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Age</label>
          <input
            placeholder='Enter your age'
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Salary</label>
          <input
            placeholder='Enter your salary'
            onChange={(e) => setSalary(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Hobby</label>
          <input
            placeholder='Enter your hobby'
            onChange={(e) => setHobby(e.target.value)}
          />
        </Form.Field>
        
        <Button color="blue" type='submit' onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
