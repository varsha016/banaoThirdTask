import React from 'react'
import "../css/firstPage.css"
import measure_total_body_weight_through_fitness_app from "./../assets/img/measure_total_body_weight_through_fitness_app.png"
import nasa_fitness_tracking_mobile_app from "./../assets/img/nasa_fitness_tracking_mobile_app.png"
const FirstPage = () => {
    return (
        <>
            <div>FirstPage</div>

            <div className="row">
                <div className="col-sm-6 bg-color ">
                    <div className='bg1-color'>

                        <h2>ABC 345</h2>
                        <p>WE ARE THE BEST</p>
                        <p>web development company</p>
                        <p>in the world</p>
                        <div className='d-flex justify-content-between'>
                            <p>View Cose Study <i className="bi bi-arrow-right"></i></p>

                            <p>SKIP</p>

                        </div>
                    </div>

                </div>
                <div className="col-sm-6 bg2-color ">


                    <div className='img-content' data-aos="fade-dwon" >

                        <img src={measure_total_body_weight_through_fitness_app} alt="" className='img-fluid' />
                    </div>

                    <div className='img1-content' data-aos="fade-up" >
                        <img src={nasa_fitness_tracking_mobile_app} alt="" className='img-fluid' />

                    </div>
                </div>
            </div>






        </>
    )
}

export default FirstPage