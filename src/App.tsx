import React from "react";
import {getdata} from "java.js";
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
