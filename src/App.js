import logo from './logo.svg';
import './App.css';
import { Header } from './Header/Header';
import {Section1} from "./Sections/Section1"
import {Section2} from "./Sections/Section2"
import {Section3} from "./Sections/Section3"
import { Section4 } from './Sections/Section4';
import {Footer} from "./Footer/Footer"
function App() {
  return (
    <div className="App">
     <Header/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Footer/>
    </div>
  );
}

export default App;
