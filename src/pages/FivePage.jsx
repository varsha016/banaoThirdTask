import React from 'react'
import '../css/fivePage.css'
import erp_app_development_service from "../assets/img/erp_app_development_service.png"


const FivePage = () => {
    return (<>
        <div className="row">
            <div className="col-sm-6 bgF ">
                <div className='bg1F'>

                    <h2>ABC 678</h2>
                    <p>WE ARE THE BEST</p>
                    <p>web development company</p>
                    <p>in the world</p>
                    <div className='d-flex justify-content-between'>
                        <p>View Cose Study <i className="bi bi-arrow-right"></i></p>

                        <p>SKIP</p>

                    </div>
                </div>

            </div>
            <div className="col-sm-6 bgImgF">
                <div data-aos="zoom-in" style={{ marginTop: "100px" }}>

                    <img src={erp_app_development_service} alt="" className='img-fluid' />
                </div>


            </div>
        </div>


    </>
    )
}

export default FivePage