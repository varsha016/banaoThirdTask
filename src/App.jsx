import React, { useEffect } from 'react'

import { BrowserRouter, Route, Routes, } from 'react-router-dom'
// import MainPage from './pages/MainPage'

import "./css/home.css"
import Home from './pages/Home'
import FirstPage from './pages/FirstPage'
import FivePage from './pages/FivePage'
import FourPage from './pages/FourPage'
import ThirdPage from './pages/ThirdPage'
import SecondPage from './pages/SecondPage'
import AOS from 'aos';
import FixedSvg from './components/FixedSvg'


const App = () => {
  useEffect(() => {


    AOS.init({
      offset: 300,
      duration: 1000
    });
  }, [])
  return (<>
    <BrowserRouter>
      <FixedSvg />
      {/* <div className="col-sm-2 bg">
        <div className='bg2'>

          <TransringSVG />
        </div>

      </div> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/firstPage' element={<FirstPage />} />
        <Route path='/secondPage' element={<SecondPage />} />
        <Route path='/thirdPage' element={<ThirdPage />} />
        <Route path='/fourPage' element={<FourPage />} />
        <Route path='/fivePage' element={<FivePage />} />
      </Routes>

    </BrowserRouter>
  </>
  )
}

export default App