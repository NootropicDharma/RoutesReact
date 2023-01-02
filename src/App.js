import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Users from './Pages/Users';

import {Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import ErrorPage from './Pages/ErrorPage';


function App() {
  return (
    

      <div className="App">

         <Navbar/>

          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="*" element={<ErrorPage/>}/>
          </Routes>

      </div>

  
  );
}

export default App;
