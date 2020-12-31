import React from 'react'
import './HeaderCom.style.css' 
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-5 mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Dental Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="#">Contact Us</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}