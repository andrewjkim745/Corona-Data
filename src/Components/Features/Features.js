import React from 'react'
import layout from '../../assets/layout.jpg'
import layout2 from '../../assets/layout2.jpg'
import layout3 from '../../assets/layout3.jpg'



export default function Features() {
    <div class='container'>
        <div class='row'>
            <div class='col-8'>
                <h1>Concept of component layout</h1>
                <img src={layout} alt='Layout'/>
            </div>
            <div class='col-4'>
            <h1>Layout will display map and graph</h1>
            <img src={layout2} alt='Layout2'/>
            <img src={layout3} alt='Layout3'/>
            </div>
        </div>
    </div>
}