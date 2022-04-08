import { useState } from "react";

import Child from "./components/Child";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  return (
    <main>
      <h1>Father component: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <br />
      <br />
      <input type="text" value={input}
        onChange={({target}) => setInput(target.value)}
      />
      <Child counter={counter}/>
    </main>
  );
}

export default App;
