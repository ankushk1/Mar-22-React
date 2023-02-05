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
import FuncLC from "./Components/FuncLC";
import ApiComp from "./Components/ApiComp";
import FormComponent from "./Components/FormComponent";
import ThemeToggle from "./Components/ThemeToggle";
import UseReducerHook from "./Components/Advanced Hooks/UseReducerHook";
import UseMemoHook from "./Components/Advanced Hooks/UseMemoHook";
import UseCallbackHook from "./Components/Advanced Hooks/UseCallbackHook";
const name = "Sam";

export const messageContext = createContext(null);
function App() {
  const [dataFromChild, setDataFromChild] = useState(null);

  const [mount, setMount] = useState(true);
  return (
    <div className="App">
      {/* <messageContext.Provider 
      value={"Message from App.js"}>
        <ComponentA />
      </messageContext.Provider> */}

      {/* <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      { mount && <FuncLC/>} */}
      {/* <FuncLC/> */}
      {/* <ApiComp/> */}
      {/* <FormComponent/> */}
      {/* {<ThemeToggle/>} */}
      {/* <UseReducerHook/> */}
      {/* <UseMemoHook/> */}
      <UseCallbackHook/>
    </div>
  );
}

export default App;
