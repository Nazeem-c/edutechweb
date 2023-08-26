import React from 'react'
import './Plans.css'

function Plans() {
    const PricingData = [{
        title : "Regular mamber",
        price: "$0",
        period:"/month",
        color: '#fff',
        features:[
            'unlimited access',
            'Customer Support',
            'Personal mentor',
            'Standard Options',
            '5 classes per week',
        ]

    },{
        title : "Premiuim mamber",
        price: "$200",
        period:"/month",
        color: '#6f55f2',
        features:[
            'unlimited access',
            'Customer Support',
            'Personal mentor',
            'Standard Options',
            '5 classes per week',
        ]},{
            title : "Standard mamber",
            price: "$100",
            period:"/month",
            color: '#fff',
            features:[
                'unlimited access',
                'Customer Support',
                'Personal mentor',
                'Standard Options',
                '5 classes per week',
            ]}];
            
  return (
    <div className="container">
        <div className="pricing-top">
            <div className="section_title">
            <h2>Premium Plans</h2>
            <p >Unlock the tech services from our premium packages</p>
            </div>
           
        </div>
        <div className="pricing-wrapper">
            { PricingData.map((obj,index)=>{
                return(<div className="pricing_item" key={index}>
                <div className="pricingcard_top" style={{background:obj.color}}>
                    <h2 className="section_title">{obj.title}</h2>
                    <h2 className="pricing_section_title">{obj.price} <span>{obj.period}</span></h2>
                </div>
                <div className="service">
                    <ul>
                        
                        { 
                         PricingData.map((feature,index)=> {
                            return(<li key={index}>
                                {feature.features}
                                
                                </li>)
                        })}
                    </ul>
                    <button className='register_button'>
                        Join now
                    </button>
                </div>
            </div>)
            })}
            
        </div>
    </div>
  )
}

export default Plans