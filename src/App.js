
import './App.css';
import {CustomSwitch} from "./components/childrenMachine/CustomCase";
import {CustomCase} from "./components/childrenMachine/CustomSwitch";
import {DefaultCase} from "./components/childrenMachine/DefaultCase";



function App() {
  return (
    <div className="App">
      <CustomSwitch value="20">
        <CustomCase value={(e) => e > 10}><div>Hello Function Child</div></CustomCase>
        <CustomCase value="20">Hello 20</CustomCase>
        <CustomCase value="30">Hello 30</CustomCase>
        <CustomCase value="10"><div>Hello 10</div></CustomCase>
        <DefaultCase>DEFAULT CASE EXECUTED</DefaultCase>
      </CustomSwitch>
    </div>
  );
}

export default App;
