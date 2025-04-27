import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Solutions from './solutions';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const menuListRef = useRef(null);
  const manuListRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);


  const togglemenu = () => {
    const menuList = menuListRef.current;
    const manuList = manuListRef.current;
    const first = firstRef.current;
    const second = secondRef.current;

    menuList.style.maxWidth="10%"


    if (!isOpen) {
      menuList.style.maxWidth = "30%";
      manuList.style.maxWidth = "100%";
      manuList.style.opacity = "100%";
      menuList.style.opacity = "100%";
      first.classList.add('first-anim');
      second.classList.add('second-anim');
    } else {
      menuList.style.maxWidth = "0%";
      manuList.style.maxWidth = "0%";
      manuList.style.opacity = "0%";
      menuList.style.opacity = "0%";
      first.classList.remove('first-anim');
      second.classList.remove('second-anim');
    }

    setIsOpen(!isOpen);
  };

  return (
    <Router>
    <div>

      <div className="logo"></div>
      <img src='https://www.kgkite.ac.in/wp-content/themes/kgkite/images/logo.png?x46988'></img>



      <header>
        <ul id="menuList" ref={menuListRef}>
          <a href="#home">Home</a>
          <a href="#docs">Documentation</a>
          <a href="#wiki">List of experiments</a>
          <a href="#design">Design</a>
        </ul>

        <ul id="manuList" ref={manuListRef}>
          <a href="#home">Home</a>
          <a href="#docs">Documentation</a>
          <a href="#wiki">List of experiments</a>
          <a href="#design">Design</a>
        </ul>

        <div className="hamburger" onClick={togglemenu}>
          <ion-icon name="remove-outline" className="first" ref={firstRef}></ion-icon>
          <ion-icon name="remove-outline" className="second" ref={secondRef}></ion-icon>
        </div>
      </header>

      <div className="title">
        <h1>Numerical Integration</h1>
      </div>

      <ol className='list'>
        <li>&nbsp;&nbsp;<Link to="/solutions.jsx">Numerical Integration</Link></li>
        <li>&nbsp;&nbsp;<Link to="/ode">Ordinary Differential Equations</Link></li>
        <li>&nbsp;&nbsp;<Link to="/algebra">Solutions of algebraic equations</Link></li>
      </ol>

      <Routes>
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/ode" element={<div><h1>ODE Page Coming Soon!</h1></div>} />
        <Route path="/algebra" element={<div><h1>Algebra Solutions Page Coming Soon!</h1></div>} />
      </Routes>


      <footer>
        <div className="community">
          <h2>Community Links</h2>
          <div className="line"></div>
          <a href='#'>Organisation</a>
          <a href='#'>About</a>
        </div>

        <div className="contact">
          <h2>Contact us</h2>
          <div className="line"></div>
          <a href='https://www.kgkite.ac.in/' target='blank'>Website</a>
          <a href='#'>Email</a>
        </div>

        <div className="follow">
          <h2>Follow</h2>
          <div className="line"></div>
          <a href='https://www.youtube.com/@kitetechcollege' target='blank'>Youtube</a>
          <a href='https://www.instagram.com/harishwa.notded/' target='blank'>Instagram</a>
          <a href='https://www.linkedin.com/school/kitetechcollege/posts/?feedView=all' target='blank'>Linkedin</a>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
