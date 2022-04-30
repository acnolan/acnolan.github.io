import logo from './resources/images/logo.svg';
import './styles/App.css';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Work from './components/pages/Work';
import Home from './components/pages/Home';
import Header from './components/sections/Header';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"about"} element={<About/>}/>
        <Route path={"blogs"} element={<Blogs/>}/>
        <Route path={"Projects"} element={<Projects/>}/>
        <Route path={"resume"} element={<Resume/>}/>
        <Route path={"Work"} element={<Work/>}/>
      </Routes>
    </div>
  );
}

export default App;
