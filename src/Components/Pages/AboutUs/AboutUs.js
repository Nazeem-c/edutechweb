import React from 'react'
import miya from '../../../assets/img/miya.jpg'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="container">
        <div className="about-us-container">
            <div className="team-members">
                <h2>Our Team</h2>
                <div className="team_member_card">
                    <img src={miya} alt="miya doe" className="member_image" />
                    <h3 className="member_name">Miya Heisinki</h3>
                    <p className="member_role">Co Founder</p>
                </div>
            </div>
            <div className="about-us">
                <div className="about-us-heading">About Us</div>
                <p>
                    with a passion for empowering learners of all ages,our misssion is make to accesible ,engaging, and personalised throuh our cutting-edge educational technology platform
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs