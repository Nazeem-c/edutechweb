import React from 'react'
import Courses from '../Courses/Courses'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'

function Home() {
    const handleButton =()=>{
        window.open("https://youtu.be/o_UuZVvKtqY")
    }
  return (
    <><section>
          <div className="container">
              <div className="home_container">
                  <div className="home_content">
                      <h2 className="section_title">
                          Learn everything for free!
                      </h2>
                      <p className="section_content">
                          cutting edge technologies with edutech, invest your time and return skills
                      </p>
                      <div className="home_buttons">
                          <button className='register_button' onClick={handleButton}>Get started</button>
                          <button className='register_button' onClick={handleButton}>watch now</button>
                      </div>
                  </div>
                  <div className="home_image">
                      <div className="home_imgwrapper">
                          <div className="box01">
                              <div className="box_image">
                                  <img src={meta} alt="" />
                              </div>
                          </div>
                          <div className="whatsapp_container">
                              <h5>500+ Students</h5>
                              <AiOutlineWhatsApp color='green' />
                          </div>
                          <div className="support">
                              <h5>Active Support</h5>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <Courses />
      <Community/>
      <Plans></Plans></>
  )
}

export default Home