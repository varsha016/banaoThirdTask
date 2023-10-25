import React from 'react'
import "./../css/home.css"
import dominos_bread from "./../assets/img/dominos_bread.png"
import pizza_box from "./../assets/img/pizza_box.png"
import dominos_bread1 from "./../assets/img/dominos_bread1.png"
import domi_img1 from "./../assets/img/domi_img1.png"
import ux_strategy_for_mobile_app_devlopment from "./../assets/img/ux_strategy_for_mobile_app_devlopment.png"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='row'>


                <div className="col-sm-6 bg text-light ">
                    <div className=' bg '>
                        {/* <div className='data'>
                            <p style={{ marginLeft: "90px" }}>Redefining</p>
                            <h3 className='text-center ' style={{ marginLeft: "100px" }} >UX Strategy</h3>
                            <p className='text-end' style={{ marginRight: "20px", }}>and UI Design</p>
                        </div> */}

                        <div className='Mcontent'>


                            <h2>ABC 456</h2>
                            <p>WE ARE THE BEST</p>
                            <p>web development company</p>
                            <p>in the world</p>
                            <div className='d-flex justify-content-between'>
                                <p>View Cose Study <i className="bi bi-arrow-right"></i></p>

                                <p>SKIP</p>

                            </div>
                        </div>
                    </div>

                </div>




                <div className="col-sm-6 bg1">
                    <div className='d-flex justify-content-between'>
                        <div className='pizza_box'>
                            <img src={pizza_box} alt="" />
                        </div>
                        <div className='dominos_bread ' data-aos="zoom-in-left" >
                            <img src={dominos_bread} alt="" />
                        </div>
                    </div>
                    <div className=' img1' data-aos="zoom-in">
                        <img src={ux_strategy_for_mobile_app_devlopment} alt="" />

                    </div>

                    <div className='d-flex justify-content-between'>
                        <div data-aos="zoom-in-right">
                            <img src={domi_img1} alt="img" className='img-fluid domi_img1' />
                        </div>
                        <div >
                            <img src={dominos_bread1} alt="img" className='img-fluid dominos_bread1' />
                        </div>
                    </div>



                </div>
            </div >

        </>
    )
}

export default Home



export function TransringSVG() {
    return (
        <svg
            version="1.1"
            id="transring"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 414 414"
            style={{ enableBackground: 'new 0 0 414 414', backgroundColor: 'lightblue' }}
            xmlSpace="preserve"
        >
            <path
                id="Transparent_Ring"
                className="transrg"
                style={{
                    opacity: 0.4,
                    fill: 'none',
                    stroke: '#FFFFFF',
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                    enableBackground: 'new',
                }}
                d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
            />

            <path
                id="Opaque_Ring"
                className="transrgwht"
                strokeDasharray="0,1000"
                style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                    strokeDasharray: '10, 1000',
                }}
                d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
            />

            <g id="Dots1" className="dots-nav">
                <g>
                    <Link to="/firstPage">

                        <path
                            className="dotsst dotsfill1"
                            style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
                            d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
                        />
                    </Link>
                </g>
                <g>
                    <path
                        className="dotsstro1"
                        style={{
                            opacity: 1,
                            fill: 'none',
                            stroke: 'rgb(255, 255, 255)',
                            strokeWidth: 2,
                            strokeMiterlimit: 10,
                        }}
                        d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
                    />
                </g>
            </g>

            <g id="Dots2" className="dots-nav">
                <g>
                    <path
                        className="dotsst dotsfill2"
                        style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
                        d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z"
                    />
                </g>
                <g>
                    <path
                        className="dotsstro2"
                        style={{
                            opacity: 1,
                            fill: 'none',
                            stroke: 'rgb(255, 255, 255)',
                            strokeWidth: 2,
                            strokeMiterlimit: 10,
                        }}
                        d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z"
                    />
                </g>
            </g>

            <g id="Dots3" className="dots-nav">
                <g>
                    <path
                        className="dotsst dotsfill3"
                        style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
                        d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z"
                    />
                </g>
                <g>
                    <path
                        className="dotsstro3"
                        style={{
                            opacity: 1,
                            fill: 'none',
                            stroke: 'rgb(255, 255, 255)',
                            strokeWidth: 2,
                            strokeMiterlimit: 10,
                        }}
                        d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z"
                    />
                </g>
            </g>

            <g id="Dots4" className="dots-nav">
                <g>
                    <path
                        className="dotsst dotsfill4"
                        style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
                        d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z"
                    />
                </g>
                <g>
                    <path
                        className="dotsstro4"
                        style={{
                            opacity: 1,
                            fill: 'none',
                            stroke: 'rgb(255, 255, 255)',
                            strokeWidth: 2,
                            strokeMiterlimit: 10,
                        }}
                        d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z"
                    />
                </g>
            </g>

            <g id="Dots5" className="dots-nav">
                <g>
                    <path
                        className="dotsst dotsfill5"
                        style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
                        d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z"
                    />
                </g>
                <g>
                    <path
                        className="dotsstro5"
                        style={{
                            opacity: 1,
                            fill: 'none',
                            stroke: 'rgb(255, 255, 255)',
                            strokeWidth: 2,
                            strokeMiterlimit: 10,
                        }}
                        d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z"
                    />
                </g>
            </g>

            <g id="Dots6" className="dots-nav">
                <g>
                    <path
                        className="dotsst dotsfill6"
                        style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
                        d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z"
                    />
                </g>
                <g>
                    <path
                        className="dotsstro6"
                        style={{
                            opacity: 1,
                            fill: 'none',
                            stroke: 'rgb(255, 255, 255)',
                            strokeWidth: 2,
                            strokeMiterlimit: 10,
                        }}
                        d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z"
                    />
                </g>
            </g>

            <g id="Dots7" className="dots-nav">
                <g>
                    <path
                        className="dotsst dotsfill7"
                        style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
                        d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z"
                    />
                </g>
                <g>
                    <path
                        className="dotsstro7"
                        style={{
                            opacity: 1,
                            fill: 'none',
                            stroke: 'rgb(255, 255, 255)',
                            strokeWidth: 2,
                            strokeMiterlimit: 10,
                        }}
                        d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z"
                    />
                </g>
            </g>
        </svg>
    );
}


