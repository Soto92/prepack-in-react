import React, { useState } from "react";
import "./App.css";
import * as Prepack from 'prepack';


  function App() {
    const [name, setName] = useState("");
    return (
      <div className="App">
        <div>
          <input
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="enter your name"
          />
          <p>Hello {name || "stranger"}!</p>
        </div>
      </div>
    );
  }
  
Prepack.prepackFile(App)

  
  export default App;
