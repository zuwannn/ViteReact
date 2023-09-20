import { useState } from "react";
// import './App.css'
import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container-fluid overflow-hidden d-flex flex-row">
      <div className="bg-body-secondary ">
        <Sidebar />
      </div>
      <div className="bg-tertiary">
        {/* <Header />
        <Content /> */}
      </div>
    </div>
  );
}

export default App;
