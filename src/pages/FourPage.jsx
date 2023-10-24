import React from 'react'
import mobile_app_of_the_year_by_entrepreneur from "../assets/img/mobile_app_of_the_year_by_entrepreneur.png"
import melltoo_img1 from "../assets/img/melltoo_img1.png"
import melltoo_img2 from "../assets/img/melltoo_img2.png"
import "../css/fourPage.css"

const FourPage = () => {
    return (<>

        <div className="row">
            <div className="col-sm-6 bgSx ">
                <div className='bg1Sx'>
                    <img src={mobile_app_of_the_year_by_entrepreneur} alt="" data-aos="zoom-in-up" className='img-fluid' width={150} />

                    <h2>ABC 234</h2>
                    <p>WE ARE THE BEST</p>
                    <p>web development company</p>
                    <p>in the world</p>
                    <div className='d-flex justify-content-between'>
                        <p>View Cose Study <i className="bi bi-arrow-right"></i></p>

                        <p>SKIP</p>

                    </div>
                </div>

            </div>
            <div className="col-sm-6 bg2Sx d-flex">


                <div className='imgSx ' data-aos="zoom-out-down" >

                    <img src={melltoo_img2} alt="" className='img-fluid' />
                </div>

                <div className='img1Sx ' data-aos="zoom-out-up" >
                    <img src={melltoo_img1} alt="" className='img-fluid' />

                </div>
            </div>
        </div>

    </>
    )
}

export default FourPage