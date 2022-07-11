import About from "./component/About"
import Footer from "./component/Footer";
import Info from "./component/skill";
import Interest from "./component/Interest";
import "./styles.css"

import './App.css';

function App() {
  return (
    <div className="App">
      <Info/>
      <div className="app--set">
        <About/>
        <Interest/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
