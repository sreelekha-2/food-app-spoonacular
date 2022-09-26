import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BiChevronRight } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import burger from "../../assets/burger.png"

export default function Footer() {
  return (
    <div className='footer py-5'>
        <Container>
            <Row>
                <Col>
                    <img src={burger} alt="burger"/>
                    <hr className='horizontal-line'></hr>
                </Col>
            </Row>
            <Row>
                <Col  xs={6} md={6} lg={3}>
                    <p className='subscribe-text dm-sans-regular'>Subscribe to our newsletter</p>
                    <div className='d-flex align-items-start'>
                        <input type="email" className='footer-email dm-sans-regular' placeholder='Email address'/>
                        <button className='footer-submit-btn'><BiChevronRight/></button>
                    </div>
                   
                </Col>
                <Col  xs={6} md={6} lg={3}>
                    <ul className='footer-list'>
                        <li><Link to="/" className='footer-head-link'>Services</Link></li>
                        <li><Link to="/" className='footer-link'>Email Marketing</Link></li>
                        <li><Link to="/" className='footer-link'>Campaigns</Link></li>
                        <li><Link to="/" className='footer-link'>Branding</Link></li>
                        <li><Link to="/" className='footer-link'>Offline</Link></li>
                    </ul>
                </Col>
                <Col  xs={6} md={6} lg={3}>
                    <ul className='footer-list'>
                        <li><Link to="/" className='footer-head-link'>About</Link></li>
                        <li><Link to="/" className='footer-link'>Our Story</Link></li>
                        <li><Link to="/" className='footer-link'>Benefits</Link></li>
                        <li><Link to="/" className='footer-link'>Team</Link></li>
                        <li><Link to="/" className='footer-link'>Careers</Link></li>
                    </ul>
                </Col>
                <Col  xs={6} md={6} lg={3}>
                    <ul className='footer-list'>
                        <li><Link to="/" className='footer-head-link'>Help</Link></li>
                        <li><Link to="/" className='footer-link'>FAQs</Link></li>
                        <li><Link to="/" className='footer-link'>Contact Us</Link></li>
                    </ul>
                </Col>
            </Row>
            <Row className='mt-5 justify-content-between'>
                <Col  xs={6} md={6} lg={3}>
                    <div>
                        <Link to="/" className='footer-terms-link'>Terms & Conditions</Link>
                        <Link to="/" className='footer-terms-link'>Privacy Policy</Link>
                    </div>
                    
                </Col>
                
                <Col  xs={6} md={6} lg={3}>
                    <ul className='icons-container d-flex'>
                       <li><Link to="/" className='footer-icon'><FaFacebookF/></Link></li>
                       <li><Link to="/" className='footer-icon'><FaTwitter/></Link></li>
                       <li><Link to="/" className='footer-icon'><FaInstagram/></Link></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
