
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompoCss.css'

import { Link } from "react-router-dom"


function NavbarAll() {
    return (
        <>
            <nav class="navbar navbar-expand-md  navbar-all fixed-top hover-underline-menu">
                <div class="navbar-collapse collapse  ">
                    <ul class="navbar-nav mr-auto menu align-center">
                        <h1>Contact Manager</h1>
                    </ul>
                </div>

                <div className='text-white'>
                    <ul class="navbar-nav  text-right flex-right text-white menu align-center">
                        <li class="nav-item">
                            <Link to="/" className='src-contact underline-from-center'>AddContact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contactlist" className='src-contact underline-from-center'>ContactList</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>


        </>
    );
}

export default NavbarAll;




