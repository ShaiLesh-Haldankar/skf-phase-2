import "./App.scss";
import React, { useState } from "react";
function App() {
  return (
    <div className="App">
      <Tabs />
    </div>
  );
}

export default App;

export function CounterVariable() {
  let counter = 0;

  const handleClick = () => {
    alert(counter);
  };

  return (
    <div className="counter">
      <div className="counter-wrapper">
        <h1>{counter}</h1>
        <div className="button-wrapper">
          <button
            onClick={() => {
              counter = counter - 1;
            }}
          >
            -
          </button>
          <button onClick={() => (counter = 0)}>Reset</button>
          <button onClick={() => (counter = counter + 1)}>+</button>
        </div>
        <div>
          <button onClick={() => handleClick()}>Check</button>
        </div>
      </div>
    </div>
  );
}

export function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <div className="counter-wrapper">
        <h1>{counter}</h1>
        <div className="button-wrapper">
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <button onClick={() => setCounter(0)}>Reset</button>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export function CounterSwitch() {
  const [counter, setCounter] = React.useState(0);

  const handleClick = (type) => {
    switch (type) {
      case "+":
        setCounter(counter + 1);
        break;
      case "-":
        setCounter(counter - 1);
        break;
      default:
        setCounter(0);
        break;
    }
  };

  return (
    <div className="counter">
      <div className="counter-wrapper">
        <h1>{counter}</h1>
        <div className="button-wrapper">
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick()}>Reset</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>
      </div>
    </div>
  );
}

export function Form() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    alert("email:" + email + ",password:" + password);
  };

  return (
    <div className="form-main">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="form"
      >
        <div className="input-wrapper">
          <label className="label">Email</label>
          <input
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className="input-wrapper">
          <label className="label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

// Objects
let data = {
  name: "",
  height: 0,
  weight: 0,
};

data.name = "DK";
data.height = "170";
data.weight = "75";

data = { ...data, name: "SH" };
data = { ...data, height: "170" };
data = { ...data, weight: "75" };

data["name"] = "DK";
data["height"] = "170";
data["weight"] = "75";

export function FormObject() {
  const [details, setDetails] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    alert("email:" + details.email + ",password:" + details.password);
  };

  return (
    <div className="form-main">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="form"
      >
        <div className="input-wrapper">
          <label className="label">Email</label>
          <input
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            placeholder="email"
          />
        </div>
        <div className="input-wrapper">
          <label className="label">Password</label>
          <input
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            placeholder="password"
            type="password"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export function List() {
  return (
    <div className="listing">
      {[{ name: "SH" }, { name: "DK" }].map((obj) => {
        return <div className="card">{obj.name}</div>;
      })}
    </div>
  );
}

export function ListAdd() {
  const [list, setList] = React.useState([]);

  return (
    <div className="listing">
      <button
        onClick={() => {
          list.pop();
          setList([...list]);
        }}
        className="card"
      >
        Remove Card
      </button>

      {list.map((item) => {
        return <div className="card">{item}</div>;
      })}

      <button
        // onClick={() => setList([...list, Math.random()])}
        onClick={() => {
          list.push(Math.random());
          setList([...list]);
        }}
        className="card"
      >
        Add Card
      </button>
    </div>
  );
}

export function ListAddConditional() {
  const [list, setList] = React.useState([]);
  return (
    <div className="listing">
      {list.length > 0 ? (
        <button
          onClick={() => {
            list.pop();
            setList([...list]);
          }}
          className="card"
        >
          Remove Card
        </button>
      ) : null}
      
      {list.map((item) => {
        return <div className="card">{item}</div>;
      })}
      <button
        onClick={() => setList([ ...list, Math.random()  ])}
        className="card"
      >
        Add Card
      </button>
    </div>
  );
}

export function ListSelected() {
  const [list, setList] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleClick = (val) => {
    selectedCard === val ? setSelectedCard(null) : setSelectedCard(val);
  };

  return (
    <div className="listing">
      {list.length > 0 ? (
        <button
          onClick={() => {
            list.pop();
            setList([...list]);
          }}
          className="card"
        >
          Remove Card
        </button>
      ) : null}
      {list.map((item) => {
        return (
          <div
            onClick={() => handleClick(item)}
            className={`card ${item === selectedCard ? "selected-card" : ""}`}
            // className={"card "+ item === selectedCard ? "selected-card" : "" }
          >
            {item}
          </div>
        );
      })}
      <button
        onClick={() => setList([...list, Math.random()])}
        className="card"
      >
        Add Card
      </button>
    </div>
  );
}

export function Tabs() {
  const [selectedTab, setSelectedTab] = React.useState(tabList[0]);

  return (
    <div className="tabs-main">
      <div className="tabs-sidebar">
        <ul>
          {tabList.map((item) => (
            <li
              className={selectedTab.id === item.id ? "selected-tab" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="tabs-body">
        <SelectTab tab={} />
      </div>
    </div>
  );
}

export function SelectTab({ tab }) {
  switch (tab.id) {
    case "tabOne":
      return <TabOne />;
    case "tabTwo":
      return <TabTwo />;
    case "tabThree":
      return <TabThree />;
    default:
      return null;
  }
}

const tabList = [
  { id: "tabOne", name: "Tab One" },
  { id: "tabTwo", name: "Tab Two" },
  { id: "tabThree", name: "Tab Three" },
];

export function TabOne() {
  return (
    <div>
      <h1>Tab One</h1>
    </div>
  );
}

export function TabTwo() {
  return (
    <div>
      <h1>Tab Two</h1>
    </div>
  );
}

export function TabThree() {
  return (
    <div>
      <h1>Tab Three</h1>
    </div>
  );
}
