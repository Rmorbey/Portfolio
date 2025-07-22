import { React, useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';

function App() {
  const [load, upadateLoad] = useState(true);
  // const ButterCMS = process.env.REACT_APP_BUTTER_CMS_API_KEY;
  // const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     axios.get(`https://api.buttercms.com/v2/pages/portfolio/a-portfolio-site?auth_token=${ButterCMS}`).then(res => {
  //       setData(res.data.data.fields.my_personal_portfolio);
  //     }).catch(err => {
  //       console.log(err);
  //     })
  //   }
  //   getData();
  // },);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          {/* <Route path="*" element={<Content content={data}/>} /> */}
          <Route path="*" element={<Content />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
