import React from 'react'
import '../Styles/Navbar.css'

export default function Navbar() { 
    return (
        <div className='Navbar'>
            <ul>
                <li href='/home'>
                    Home
                </li>
                <li href='/data'>
                    Data
                </li>
                <li href='/contact'>
                    Contact
                </li>
            </ul>

        </div>
    )
}