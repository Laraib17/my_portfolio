import React from "react";
import {getdata} from "java.js";
let url="https://jsonplaceholder.typicode.com/posts";
const App = () => {
  return (
    <main>
      <div>
        <button onClick={() => getdata(url)}>Fetch Data</button>
      </div>
    </main>
  );
};
export default App;
