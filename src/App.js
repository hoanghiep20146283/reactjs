import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';

function useResettableInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    value,
    e => setValue(e.target.value),
    () => setValue(initialValue)
  ]
}

function GithubUser({ name, location }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <Link to="/app">App</Link>
    </div>
  )
}

export function About() {
  return (
    <div>
      <h2>About us</h2>
      <Link to="/app">App</Link>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <h2>Contact us</h2>
    </div>
  )
}
let numberOfRenders = 0;

function App({ destructuredProperty }) {

  // 1. Use the name state variable
  console.log(`Render number: ${numberOfRenders++}`);
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  // if (numberOfRenders % 2 == 0) {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  // }

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  const [emotion, setEmotion] = useState("happy");
  const [status, setStatus] = useState("In Progress");
  const title = useRef();
  const [color, setColor, resetColor] = useResettableInput("#000000");
  const [checked, setChecked] = useReducer(checked => !checked, false);
  const submit = e => {
    e.preventDefault();
    alert(`Title: ${title.current.value}, Color: ${color}`);
    resetColor();
    setName(String(numberOfRenders++));
    title.current.value = "";
  };

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion, status])

  const [data, setData] = useState(null);

  useEffect(() => {
    const spreadedObject = {
      "spreadField": "testSpreadOperator",
    }
    const testObject = {
      originalField: "test",
      ...spreadedObject,
    }
    console.log(testObject);
    fetch(`https://api.github.com/users/hoanghiep20146283`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <>
          <p>
            Example of <code>{destructuredProperty}</code>
          </p>
          <button onClick={() => setEmotion("sad")}>
            I'm sad
          </button>
          <button onClick={() => setEmotion("happy")}>
            I'm happy
          </button>
          <p>
            Current emotion is {emotion}
          </p>
        </>
        <>
          <button onClick={() => setStatus("In Progress")}>
            In Progress
          </button>
          <button onClick={() => setStatus("Done")}>
            Done
          </button>
          <p>
            Current status is {status}
          </p>
        </>
        <>
          <input type="checkbox" value={checked} onChange={setChecked}></input>
          <label> {checked ? "checked" : "not checked"}</label>
        </>
        <>
          <form onSubmit={submit}>
            <input type="text" placeholder='Color title...' ref={title}></input>
            <input type="color" onChange={setColor} value={color}></input>
            <button>Submit</button>
          </form>
        </>
        <>
          <h2>Fetch Data</h2>
          <GithubUser></GithubUser>
        </>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
