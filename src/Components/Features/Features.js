import React from 'react'
import layout from '../../assets/layout.jpg'
import layout2 from '../../assets/layout2.jpg'
import layout3 from '../../assets/layout3.jpg'



export default function Features() {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-8 p-5'>
                    <h1>Concept of component layout</h1>
                    <img className='img-fluid' src={layout} alt='Layout' />
                </div>
                <div className='col-4 p-5'>
                    <img className='img-thumbnail' src={layout2} alt='ideas' />
                    <img className='img-thumbnail' src={layout3} alt='posts' />
                </div>
            </div>
        </div>
    )

}