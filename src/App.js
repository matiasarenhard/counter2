import { useState } from "react";

import Child from "./components/Child";

function App() {
  const [counter, setCounter] = useState(0);
  return (<main>
    <h1>Father component: {counter}</h1>
    <button onClick={() => setCounter(counter + 1)}>+1</button>
    <Child />
  </main>);
}

export default App;
