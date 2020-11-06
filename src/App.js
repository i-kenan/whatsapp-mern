import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
      {/*Chat component*/}
    </div>
  );
}

export default App;
