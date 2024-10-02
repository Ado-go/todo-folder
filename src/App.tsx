import { useState } from "react";
import Folder from "./components/Folder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Folder />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
