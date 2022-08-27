import './styles/App.css';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Work from './components/pages/Work';
import Home from './components/pages/Home';
import Header from './components/sections/Header';
import React, {useState} from 'react'

import { Routes, Route } from "react-router-dom";

function App() {
  const [pageTitle, setPageTitle] = useState('Andrew Nolan');

  return (
    <div>
      <Header pageTitle={pageTitle}/>
      <Routes>
        <Route path={"/"} element={<Home setPageTitle={setPageTitle}/>}/>
        <Route path={"about"} element={<About setPageTitle={setPageTitle}/>}/>
        <Route path={"blogs"} element={<Blogs setPageTitle={setPageTitle}/>}/>
        <Route path={"blogs/*"} element={<Blog setPageTitle={setPageTitle}/>}/>
        <Route path={"Projects"} element={<Projects setPageTitle={setPageTitle}/>}/>
        <Route path={"resume"} element={<Resume setPageTitle={setPageTitle}/>}/>
        <Route path={"Work"} element={<Work setPageTitle={setPageTitle}/>}/>
      </Routes>
      <br/><br/><br/><br/>
    </div>
  );
}

export default App;
