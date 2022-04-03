import SideBar from "./Components/SideBar";
import Navbar from "./Components/Navbar";
import AppContent from "./Components/AppContent";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import "./App.css";

function App() {
  {
    /* const [active, setActive] = useState(false);
  const activeHandler = () => {
    setActive(!active);
  };*/
  }
  return (
    <div className="App">
      <Navbar />
      <AppContent />
    </div>
  );
}

export default App;
