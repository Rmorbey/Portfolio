import { React, useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from './components/Skills/Skills';
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  // Route,
  // Routes,
  // Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function App() {
  const [load, upadateLoad] = useState(true);
  const ButterCMS = process.env.REACT_APP_BUTTER_CMS_API_KEY;
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://api.buttercms.com/v2/pages/portfolio/a-portfolio-site?auth_token=${ButterCMS}`).then(res => {
        setData(res.data.data.fields.my_personal_portfolio);
      }).catch(err => {
        console.log(err);
      })
    }
    getData();
  },);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Home content={data[0]}/>
        <About content={data[1]}/>
        <Skills content={data[2]}/>
        {/* <Projects content={data[3]}/>
        <Other content={data[4]}/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
