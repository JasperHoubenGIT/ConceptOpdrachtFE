import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SubReddit from "./pages/subreddit/Subreddit";






function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/subreddit/r/:subredditId" element={<SubReddit />} />
        </Routes>

        <footer>in opdracht van Novi en natuurlijk onze expert Jasper Houben</footer>
    </>
  );
}

export default App;
