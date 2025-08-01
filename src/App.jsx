import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Header from "./Components/Menu/header";
import Footer from "./Components/Menu/footer";

function App() {
  return (
    // I make design used figma but i used template and there link:https://www.figma.com/proto/bcrqkpqHCZKDDnEOjhCZja/Photography-Portfolio-%E2%80%94-Webflow-Landing-Page-Design--Community-?node-id=1-1263&t=jtX2WoGBoLKqwuEb-1
    // I did add Github but i add link to netlify add project and work show website and there link: https://joshuaclintonportfolio.netlify.app/
    //I make add Github as step with powershell: git status, git add . , git commit -m "update", git push -u origin main. when update work saving to github and link to netlify update it.
    <BrowserRouter>
      <>
        <head><link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet"></link></head>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App