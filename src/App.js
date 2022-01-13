import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom"

import Home from "./Pages/Home/index";
import {Buy} from './Pages/Buy/index';
import Exemples from "./Pages/Exemples/index";
import Prices from "./Pages/Prices/index";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/atendimento" element={<Buy/>}/>
        <Route path="/exemplos" element={<Exemples/>}/>
        <Route path="/valores" element={<Prices/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
