import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent'
import SecondComp from './Components/secondComp'
import FuncComponent from './Components/FuncComponent';
import ClassComp from './Components/ClassComp';


function App() {
  return (
    <div className="App">
      {/* <FuncComponent/> */}
      <ClassComp/>
    </div>
  );
}

export default App;
