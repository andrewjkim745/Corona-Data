import React from 'react'
import layout from '../../assets/layout.jpg'
import layout2 from '../../assets/layout2.jpg'
import layout3 from '../../assets/layout3.jpg'



export default function Features() {
    return (
<div class='container my-5'>
        <div class='row'>
            <div class='col-8 p-4'>
                <h1>Concept of component layout</h1>
                <img class='img-fluid' src={layout} alt='Layout'/>
            </div>
            <div class='col-4 p-4'>
            <h3>Layout will display map and graph</h3>
            <img class='img-thumbnail' src={layout2} alt='Layout2'/>
            <img class='img-thumbnail' src={layout3} alt='Layout3'/>
            </div>
        </div>
    </div>
    )
    
}