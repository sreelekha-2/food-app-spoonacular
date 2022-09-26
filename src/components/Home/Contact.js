import React from 'react'
import { Col, Row } from 'react-bootstrap'
import map from "../../assets/map.png"

const handler=(e)=>{
    console.log(e)
}

export default function Contact() {
    return (
        <>

            <Row className="justify-content-between">

                <Col xs={12} md={6} lg={6} >
                    <h2 className='contact-head inter-font-bold'>Contact us</h2>
                    <p className='contact-desc inter-font-regular'>Need an experienced and skilled hand with custom IT projects? <br></br>
                        Fill out the form to get a free consultation.</p>
                    <form className='mt-4'>
                        <div>
                            <input type="text" className='form-input input-width' placeholder="Your Company Name" onChange={handler}/>
                        </div>
                        <div>
                            <input type="text" className='form-input input-width' placeholder="Nature of Bussiness" onChange={handler} />
                        </div>

                        <div className='d-flex'>
                            <input type="text" className='address form-input' placeholder="Address" onChange={handler}/>
                            <input type="number" className='pincode ms-4 form-input' placeholder="Postcode" onChange={handler}/>
                        </div>

                        <div>
                            <input type="text" className=' form-input input-width' placeholder="Contact name" onChange={handler}/>
                        </div>
                        <div>
                            <input type="number" className=' form-input input-width' placeholder="Contact Phone" onChange={handler}/>
                        </div>
                        <div>
                            <input type="email" className=' form-input email-input input-width' placeholder="Email" onChange={handler}/>
                        </div>

                        <div className="mt-3 mb-5">
                            <input type="checkbox" onChange={handler}/>
                            <label className='ms-2 checkbox-label inter-font-regular'>I want to protect my data by signing an NDA</label>
                        </div>

                        <input type="submit" value="submit" className='submit-btn inter-font-medium d-block w-100' />
                    </form>
                </Col>
                
                <Col xs={12} md={6} lg={5} className="d-flex flex-column justify-content-center">
                    <h6 className='mb-4 offices-head inter-font-bold'>Offices</h6>
                    <div>
                        <p className='office-address inter-font-regular'>United States<br></br>
                            500 5th Avenue Suite 400, NY 10110</p>
                    </div>
                    <div>
                        <p className='office-address inter-font-regular'>United Kingdom<br></br>
                            High St, Bromley BR1 1DN</p>
                    </div>
                    <div>
                        <p className='office-address inter-font-regular'>France<br></br>
                            80 avenue des Terroirs de France, Paris</p>
                    </div>
                    <div>
                        <img src={map} alt="map" className='map mt-3' />
                    </div>
                </Col>
            </Row>
        </>
    )
}
