import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
export default function Header() {

    const navigate = useNavigate()
    const getCookieUser = localStorage.getItem("userInfo");
    const userInfo = getCookieUser ? JSON.parse(getCookieUser) : null;
    console.log(userInfo, "userInfo")

    const handleLogout = () => {
        localStorage.clear("userInfo");
        navigate("/Login")
        window.location.reload()
    };
    return (
        <>

            <header>
                {/* <!--? Header Start --> */}
                <div class="header-area">
                    <div class="main-header header-sticky">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                {/* <!-- Logo --> */}
                                <div class="col-xl-2 col-lg-2 col-md-1">
                                    <div class="logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-xl-10 col-lg-10 col-md-10">
                                    <div class="menu-main d-flex align-items-center justify-content-end">
                                        {/* <!-- Main-menu --> */}
                                        <div class="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/About/">About</Link></li>
                                                    <li><Link to="/Doctors/">Doctors</Link></li>
                                                    <li><Link to="/Department/">Department</Link></li>
                                                    {userInfo?.role === 1 ?  <li> <Link to={"/AdminDashboard"} className="nav-item nav-link">Admin Dashboard</Link></li> : ""}

                                                    {userInfo ?
                                                        <li><Link onClick={handleLogout} >Logout</Link></li>


                                                        : <>
                                                            <li> <Link to="/Login" >Login</Link></li>
                                                            <li><Link to="/Register" >Registration</Link></li>

                                                        </>
                                                    }

                                                </ul>
                                            </nav>
                                        </div>
                                        <div class="header-right-btn f-right d-none d-lg-block ml-30">
                                            <Link to="/Contact/" class="btn header-btn">Contact us</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Mobile Menu --> */}
                                <div class="col-12">
                                    <div class="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Header End --> */}
            </header>

        </>
    )
}
