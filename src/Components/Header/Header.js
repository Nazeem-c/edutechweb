import React from 'react'
import logo from '../../assets/img/logo.png' 
import './Header.css'

function Header() {
    const nav_items=[{
        path:'/',display:'Home'
    },{
        path:'/',display:'Services'
    },{
        path:'/',display:'Courses'
    },{
        path:'/',display:'About us'
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
                               return( <li className='name_item'>{items.display}</li>)
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