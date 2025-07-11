import React, {
  useContext, useState
} from 'react'
import { Link, useNavigate } from 'react-router-dom';


import SummaryApi from '../common';

import { toast } from 'react-toastify';
export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  // const { fetchUserDetails } = useContext(Context)


  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const dataApi = await dataResponse.json()
    console.log(dataApi, "dataApi")

    if (dataApi.success) {
      toast.success(dataApi.message)
      localStorage.setItem("userInfo", JSON.stringify(dataApi.data))
      navigate('/')
      window.location.reload()
      // fetchUserDetails()

    }

    if (dataApi.error) {
      toast.error(dataApi.message)
    }

  }
  return (
    <>
      {/* <!--? Hero Start --> */}
      <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap hero-cap2 text-center">
                  <h2>Login Now</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
      <div class="row mx-5">
        <div class="col-12">
          <h2 class="contact-title">Get in Touch</h2>
        </div>
        <div class="col-lg-8">
          <form class="form-contact" onSubmit={handleSubmit} onChange={handleOnChange}>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control valid" type="email" 
                  placeholder="Email"
                  name="email"
               />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <input class="form-control" id="password" type="password" placeholder="Enter password"
                  name='password'
                 />
                </div>
              </div>
            </div>
            <div class="form-group mt-3">
              <button type="submit" class="button boxed-btn">Login Now</button>
            </div>
          </form>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-home"></i></span>
            <div class="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
            <div class="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-email"></i></span>
            <div class="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
