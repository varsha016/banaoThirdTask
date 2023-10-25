import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import FixedSvg from './components/FixedSvg';
import MainPage from './pages/MainPage';

import './css/home.css';
import './App.css';

import Home from './pages/Home';
import FirstPage from './pages/FirstPage';
import FivePage from './pages/FivePage';
import FourPage from './pages/FourPage';
import ThirdPage from './pages/ThirdPage';
import SecondPage from './pages/SecondPage';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* <div >
        </div> */}


        {/* <div style={{ position: "absolute" }}> */}
        {/* <FixedSvg /> */}
        {/* <div style={{ position: "relative", }}> */}
        <div>
          <MainPage />
        </div>


      </BrowserRouter>
    </>
  );
};

export default App;