import "./styles.css";
import React, { useEffect, useState } from "react";

const users = [
  { name: "A", id: 1 },
  { name: "B", id: 2 }
];

const usersList = users.map((user) => <li key={user.id}>{user.name}</li>);
export default function App() {
  const [button, setbutton] = useState(false);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [total, settotal] = useState(0);
  const [counter, setcounter] = useState(0);
  const [users, setUsers] = useState([]);

  function toggleButton() {
    setbutton(!button);
  }

  function totalSum() {
    if (num1 && num2) {
      const total = num1 % num2;
      settotal(total);
    }
  }

  const label = button ? "HideList" : "ShowList";

  const url = "https://jsonplaceholder.typicode.com/users/1";

  const fetchdata = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="App">
        <div className="App part 1">
          <h1>React Excercise</h1>
          <h3>Part 1 Printing JSX</h3>
          <h3> Part 2 Click a button to show/hide list of users</h3>
          <button onClick={() => toggleButton()}>{label}</button>
          {button && <ul>{usersList}</ul>}
        </div>
        <div className="App part 2(Two way data binding )">
          <h3>Part 3 : Two way data binding</h3>
          <br></br>
          <input
            type="text"
            placeholder="Enter your input here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <p>{text}</p>
        </div>
        <div className="disable button">
          <h3>Part 4 : Disable button unless text is displayed </h3>
          <input
            type="text"
            placeholder="Button disabled"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          ></input>
          <button disabled={text2.length < 1}> Submit </button>
        </div>
        <div className="Add two numbers">
          <h3>Part 5: Add two numbers</h3>
          <input
            type="number"
            value={num1}
            onChange={(e) => setnum1(+e.target.value)}
          ></input>
          <input
            type="number"
            value={num2}
            onChange={(e) => setnum2(+e.target.value)}
          ></input>
          <button onClick={() => totalSum()}>Total: </button>
          <p>{total}</p>
        </div>
        <div className="Counter">
          <h3>Part 6 : Counter</h3>
          <button onClick={() => setcounter(counter + 1)}>Increment</button>
          <button onClick={() => setcounter(counter - 1)}>Decrement</button>
          <p>{counter}</p>
        </div>
        <div className="Fetch data from API">
          <h3>Part 7 : Fetch Data from an API</h3>
          <li>{users.name}</li>
          <li>{users.phone}</li>
          <li>{users.website}</li>
        </div>
      </div>
    </>
  );
}
