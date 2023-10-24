import React from 'react';
import { Link } from 'react-router-dom';
import MainPage from '../pages/MainPage';
// import Home from '../pages/Home';
// import FirstPage from '../pages/FirstPage';

const svgStyle = {
    enableBackground: 'new 0 0 414 414',
    backgroundColor: 'lightblue',

    borderRadius: '100px',



};

const pathStyle = {
    opacity: 0.4,
    fill: 'none',
    stroke: '#FFFFFF',
    strokeWidth: 2,
    strokeMiterlimit: 10,
    enableBackground: 'new',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '10px',
    transition: 'color 0.2s ease-in-out',
};

const dotsStyle = {
    fill: 'rgb(0, 146, 255)',
    opacity: 1,
};

const dotsStrokeStyle = {
    opacity: 1,
    fill: 'none',
    stroke: 'rgb(255, 255, 255)',
    strokeWidth: 2,
    strokeMiterlimit: 10,
};

const lineStyle = {
    position: 'absolute',
    width: '2px',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    top: '0',
    bottom: '0',
};

const verticalLineStyle = {
    position: 'absolute',
    width: '2px',
    height: '200px',
    backgroundColor: 'green',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'none',
};

const mdScreenMediaQuery = '@media (min-width: 768px)';

const FixedSvg = () => {
    return (


        <div>

            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <div style={{ ...lineStyle, left: '0' }}></div>

                <div
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: '1',
                    }}
                >
                    <svg
                        version="1.1"
                        id="transring"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 414 414"
                        style={svgStyle}

                    >
                        <path
                            id="Transparent_Ring"
                            className="transrg"
                            style={pathStyle}
                            d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
                        ></path>

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
                        >
                            <Link to="/" style={linkStyle}>Link</Link>
                        </path>

                        <g id="Dots1" className="dots-nav">
                            <g>
                                <Link className="nav-link" to="/">
                                    <path
                                        className="dotsst dotsfill1"
                                        style={dotsStyle}
                                        d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
                                    ></path>
                                </Link>
                            </g>
                            <g>
                                <path
                                    className="dotsstro1"
                                    style={dotsStrokeStyle}
                                    d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
                                ></path>
                            </g>
                        </g>



                        <g id="Dots2" className="dots-nav">
                            <g>
                                <Link className="nav-link" to="/firstPage">
                                    <path
                                        className="dotsst dotsfill2"
                                        style={dotsStyle}
                                        d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
                                    ></path>
                                </Link>
                            </g>
                            <g>
                                <path
                                    className="dotsstro2"
                                    style={dotsStrokeStyle}
                                    d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
                                ></path>
                            </g>
                        </g>


                        <g id="Dots3" className="dots-nav">
                            <g>
                                <Link className="nav-link" to="/secondPage">
                                    <path
                                        className="dotsst dotsfill3"
                                        style={dotsStyle}
                                        d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
                                    ></path>
                                </Link>
                            </g>
                            <g>
                                <path
                                    className="dotsstro3"
                                    style={dotsStrokeStyle}
                                    d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
                                ></path>
                            </g>
                        </g>

                        <g id="Dots4" className="dots-nav">
                            <g>
                                <Link className="nav-link" to="/thirdPage">
                                    <path
                                        className="dotsst dotsfill4"
                                        style={dotsStyle}
                                        d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
                                    ></path>
                                </Link>
                            </g>
                            <g>
                                <path className="dotsstro4"
                                    style={dotsStrokeStyle}
                                    d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
                                ></path>
                            </g>
                        </g>



                        <g id="Dots5" className="dots-nav">
                            <g>
                                <Link className="nav-link" to="/fourPage">
                                    <path
                                        className="dotsst dotsfill5"
                                        style={dotsStyle}
                                        d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
                                    ></path>
                                </Link>
                            </g>
                            <g>
                                <path
                                    className="dotsstro5"
                                    style={dotsStrokeStyle}
                                    d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
                                ></path>
                            </g>
                        </g>


                        <g id="Dots6" className="dots-nav">
                            <g>
                                <Link className="nav-link" to="/fivePage">
                                    <path
                                        className="dotsst dotsfill6"
                                        style={dotsStyle}
                                        d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
                                    ></path>
                                </Link>
                            </g>
                            <g>
                                <path
                                    className="dotsstro6"
                                    style={dotsStrokeStyle}
                                    d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
                                ></path>
                            </g>
                        </g>


                    </svg>
                </div>


                <div style={{ ...lineStyle, right: '0' }}></div>


                <div style={{ ...verticalLineStyle }}>
                    {mdScreenMediaQuery && (
                        <style>{`${mdScreenMediaQuery}
            // { display: block; }`
                        }</style>
                    )}
                </div>
            </div>

        </div>




    );
};

export default FixedSvg;
