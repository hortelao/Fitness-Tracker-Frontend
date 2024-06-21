import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;