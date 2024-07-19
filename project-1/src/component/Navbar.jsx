import React from 'react'
import { useState } from 'react'
import Data from './Data'
import Apiproduct from './Apiproduct'


function Navbar() {

    const [data,setdata] = useState([])

    const handleclick=()=>{
        fetch('https://mock-server-app-ss14.onrender.com/womendata')
        .then(res=>res.json())
        .then((res)=>{
            setdata(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleclick2=()=>{
        fetch('https://mock-server-app-1-9jyi.onrender.com/products')
        .then(res=>res.json())
        .then((res)=>{
            setdata(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    return (
    <div>
          <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="index.html" className="logo">
                            <img src="https://themewagon.github.io/hexashop/assets/images/logo.png"/>
                        </a>
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="index.html" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="index.html">Men's</a></li>
                            <li onClick={handleclick}><a>Women's</a></li>
                            <li onClick={handleclick2}><a>Kid's</a></li>
                            <li className="submenu">
                                <a >Pages</a>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li ><a>Products</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:;">Features</a>
                                <ul>
                                    <li><a href="#">Features Page 1</a></li>
                                    <li><a href="#">Features Page 2</a></li>
                                    <li><a href="#">Features Page 3</a></li>
                                    <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                </ul>
                            </li>
                            <li className="scroll-to-section"><a href="index.html">Explore</a></li>
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>

<Data/>
<Apiproduct arr={data}/>

    </div>
  )
}

export default Navbar
