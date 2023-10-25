import React from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourPage from './FourPage'
import FivePage from './FivePage'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import '../App.css'
import FixedSvg from '../components/FixedSvg'
// import FixedSvg from '../components/FixedSvg'

const MainPage = () => {
    return (
        <>
            <div className='FixedSvg'>
                <FixedSvg />
            </div>

            <div style={{ position: "relative", }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/firstPage' element={<FirstPage />} />
                    <Route path='/secondPage' element={<SecondPage />} />
                    <Route path='/thirdPage' element={<ThirdPage />} />
                    <Route path='/fourPage' element={<FourPage />} />
                    <Route path='/fivePage' element={<FivePage />} />
                </Routes>
            </div>
        </>
    )
}

export default MainPage