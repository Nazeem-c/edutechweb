import React from 'react'
import tc from '../../../assets/img/tc.png'
import './Community.css'

function Community() {
    const handleClick =() =>{
        window.open('_blank')
    }
  return (
    <div className="container">
        <div className="start-wrapper">
            <div className="start-image">
                <img src={tc} alt="img" />
            </div>
            <div className="start-content">
                <h2 className="section-communitys">Join our Community</h2>
                <p>Unlock the power of knowkedge and innovation by joining our vibrant and innovative free tech community</p>
                <button className='register_button' onClick={handleClick}>Join now</button>
                
            </div>
        </div>
    </div>
  )
}

export default Community