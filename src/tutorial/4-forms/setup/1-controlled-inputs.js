import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && firstName) {
    const person = {
      id: new Date().getTime().toString(),
      firstName,
      email,
    }
    setPeople((people) => {
      return [...people, person];
    })
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  }

  const handleNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);


  return <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='firstName'>Name : </label>
          <input
              value={firstName}
              onChange={handleNameChange}
              type="text"
              id="firstName"
              name='firstName'/>
        </div>
        <div className="form-control">
          <label htmlFor='email'>Email : </label>
          <input
              value={email}
              type="text"
              id="email"
              name='email'
              onChange={handleEmailChange}
          />
        </div>
        <button type='submit'>add person</button>
      </form>
      {people.map((person)=> {
        const {id, firstName, email} = person
        return <div key={id} className='item'>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })}
    </article>
  </>

};

export default ControlledInputs;
