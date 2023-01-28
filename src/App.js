import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import FuncComponent from "./Components/FuncComponent";
import ClassComp from "./Components/ClassComp";
import ObjStateComp from "./Components/ObjStateComp";
import PropComp from "./Components/PropComp";
import { useState } from "react";
import ComponentA from "./Components/Context/ComponentA";
import { createContext } from "react";
const name = "Sam";

export const messageContext = createContext(null);
function App() {
  const [dataFromChild, setDataFromChild] = useState(null);

  return (
    <div className="App">
      <messageContext.Provider 
      value={"Message from App.js"}>
        <ComponentA />
      </messageContext.Provider>
    </div>
  );
}

export default App;
