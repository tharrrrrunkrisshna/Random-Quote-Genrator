import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quote from "./Quote";
import Home from "./Home";
import Layout from "./Layout";
import Fav from "./Fav";
import './Styles.css';
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="quote" element={<Quote/>} />
          <Route path="fav" element={<Fav/>} />

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    

  );
}

export default App;