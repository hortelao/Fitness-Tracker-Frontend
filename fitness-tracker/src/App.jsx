import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;