import { React, useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content";
import { LazyResume } from "./components/LazyComponent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function App() {
  const [load, updateLoad] = useState(true);
  const ButterCMS = process.env.REACT_APP_BUTTER_CMS_API_KEY;
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://api.buttercms.com/v2/pages/portfolio/a-portfolio-site?auth_token=${ButterCMS}`);
        setData(response.data.data.fields.my_personal_portfolio);
      } catch (error) {
        // Handle error gracefully - could add error state here
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to fetch portfolio data:', error);
        }
      }
    }
    getData();
  }, [ButterCMS]);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="*" element={<Content content={data} />} />
          <Route path="/resume" element={<LazyResume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
