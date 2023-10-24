import React from 'react'
import "../css/thirdPage.css"
import world_communication_awards_for_best_digital_experience from "../assets/img/world_communication_awards_for_best_digital_experience.png"
import nexgtv_mobile_app_ui_design from "../assets/img/nexgtv_mobile_app_ui_design.png"
import nexgtv_entertainment_mobile_app_development from "../assets/img/nexgtv_entertainment_mobile_app_development.png"

const ThirdPage = () => {
    return (<>

        <div>ThirdPage</div>
        <div className="row">
            <div className="col-sm-6 bgT ">
                <div className='bg1T'>
                    <img src={world_communication_awards_for_best_digital_experience} alt="" data-aos="zoom-in-up" className='img-fluid' width={150} />

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
            <div className="col-sm-6 bg2T d-flex gap-4">


                <div className='imgT' data-aos="fade-right" >

                    <img src={nexgtv_entertainment_mobile_app_development} alt="" className='img-fluid' />
                </div>

                <div className='img1T' data-aos="fade-left" >
                    <img src={nexgtv_mobile_app_ui_design} alt="" className='img-fluid' />

                </div>
            </div>
        </div>
    </>
    )
}

export default ThirdPage