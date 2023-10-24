import React from 'react'
import "../css/second.css"
import veme_blockchain_app_developed from "../assets/img/veme_blockchain_app_developed.png"
import veme_app_ui_design from "../assets/img/veme_app_ui_design.png"


const SecondPage = () => {
    return (<>

        <div className="row">
            <div className="col-sm-6 bgS ">
                <div className='bg1S'>

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
            <div className="col-sm-6 bg2S ">


                <div className=' imgS' data-aos="fade-dwon" >

                    <img src={veme_app_ui_design} alt="" className='' />
                </div>

                <div className='img1S' data-aos="fade-up" >
                    <img src={veme_blockchain_app_developed} alt="" />

                </div>
            </div>
        </div>
    </>
    )
}

export default SecondPage