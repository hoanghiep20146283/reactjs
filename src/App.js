import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer, useRef } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: e => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ]
}

function GithubUser({ name, location }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
    </div>
  )
}

function App({ destructuredProperty }) {
  const [emotion, setEmotion] = useState("happy");
  const [status, setStatus] = useState("In Progress");
  const title = useRef();
  const [colorProps, resetColor] = useInput("#000000");
  const [checked, setChecked] = useReducer(checked => !checked, false);
  const submit = e => {
    e.preventDefault();
    alert(`Title: ${title.current.value}, Color: ${colorProps.value}`);
    resetColor();
    title.current.value = "";
  };

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion, status])

  const [data, setData] = useState(null);

  useEffect(() => {
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
            <input type="color" {...colorProps}></input>
            <button>Submit</button>
          </form>
        </>
        <>
          <h2>Fetch Data</h2>
          <GithubUser name={data.name} location={data.avatar_url}></GithubUser>
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
    </div>
  );
}

export default App;
