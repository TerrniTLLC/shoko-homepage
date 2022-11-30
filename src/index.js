import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Privacy from "./screens/privacy.jsx"
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/privacy' element={<Privacy />}></Route>
      </Routes>
    </Router>
  </>
);
