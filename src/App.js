import React from 'react';
import Forms from './Pages/Forms';
import Home from './Pages/Home';
import Bookings from './Pages/Bookings';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/Forms/:name" element={<Forms/>} />
        <Route path="/Bookings" element={<Bookings/>}/>
      </Routes>
      </Router>
  );
}

export default App;