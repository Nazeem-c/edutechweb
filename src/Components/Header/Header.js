import React from 'react'
import logo from '../../assets/img/logo.png' 
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    const nav_items=[{
        path:'/',display:'Home'
    },{
        path:'/plans',display:'Services'
    },{
        path:'/courses',display:'Courses'
    },{
        path:'/aboutus',display:'About us'
    }]
  return (
    <header className='header'>
        <div className="container">
            <div className="nav_container">
                <div className="logo">
                    <div className="logo-img">
                        <img src={logo} alt="logo" />
                    </div>
                    <h2>EduTech</h2>
                </div>
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav_items.map((items)=>{
                               return( <li className='name_item'><Link to={items.path}>{items.display}</Link></li>)
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header