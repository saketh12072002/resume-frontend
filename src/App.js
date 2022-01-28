import logo from './logo.svg';
import './App.css';
import { Header } from './Header/Header';
import {Section1} from "./Sections/Section1"
import {Section2} from "./Sections/Section2"

function App() {
  return (
    <div className="App">
     <Header/>
     <Section1/>
     <Section2/>
    </div>
  );
}

export default App;
