import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home";

import Navbar from "./Components/Navbar/Navbar";
import { Login } from "./componentsB/authentication/Login";
import { Register } from "./componentsB/authentication/Register";

import { Payments } from "./componentsB/Payments";
import React from "react";
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
import CheckOut from "./Components/Home/CheckOut";


// import Home from './Components/Home/Home';

// import Navbar from './Components/Navbar/Navbar';
import { ProductLanding } from "./Components/ProductFlights/ProductLanding/ProductLanding";
import CheckOut from "./Components/Home/CheckOut";

function App() {
  // const dispatch = useDispatch()
  // const flightData = useSelector(state=>state.flightData.data)
  // useEffect(()=>{
  //   dispatch(fetchFlightData())
  // },[dispatch])

  const [isToken, setIsToken] = React.useState(null);

  return (
    <div className="App">
      <Navbar isToken={isToken} setIsToken={setIsToken} />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<ProductLanding />} />

        <Route path="/checkout" element={<CheckOut />} />
        <Route
          path="/check"
          element={<Payments isToken={isToken} setIsToken={setIsToken} />}
        />
        <Route
          path="/login"
          element={<Login isToken={isToken} setIsToken={setIsToken} />}
        />

        <Route path="/register" element={<Register />} />
      </Routes>

     {/* footer aayega */}
     
    </div>
  );
}

export default App;
