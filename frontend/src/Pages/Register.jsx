import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import SummaryApi from '../common';
export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""

  })
  const navigate = useNavigate()

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



    const dataResponse = await fetch(SummaryApi.signUP.url, {
      method: SummaryApi.signUP.method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const dataApi = await dataResponse.json()
    console.log(dataApi);
    if (dataApi.success) {
      toast.success(dataApi.message)
      navigate("/login")
    }

    if (dataApi.error) {
      toast.error(dataApi.message)
    }



  }
  // ..............................................
  return (
    <>
      {/* <!--? Hero Start --> */}
      <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap hero-cap2 text-center">
                  <h2>Register Now</h2>
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
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control valid" id="name" type="text" placeholder="Enter your name"
                    name="name"
                    required />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control valid" id="email" type="email" placeholder="Email"
                    name="email"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control"  id="phone" type="number" placeholder="Enter Number"
                    name="phone"
                  />
                </div>
              </div>
             
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" id="password" type="password" placeholder="Enter password"
                    name="password"
                  />
                </div>
              </div>

            </div>
            <div class="form-group mt-3">
              <button type="submit" class="button button-contactForm boxed-btn">Send</button>
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
