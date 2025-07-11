import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import SummaryApi from '../common'
import { toast } from 'react-toastify'
export default function Contact() {
  const [data, setData] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await axios.post(SummaryApi.createContactUs.url, data, {
        headers: {
          "content-type": "application/json"
        },
      }).then((res) => {
        if (res.data.status == 200) {
          setData(res.data.body)
          navigate("/")
          toast.success(`Message sent successfully to admin`)
        } else {
          toast.error(res.data.message)

        }

      })
    } catch (error) {
      console.log(error)
    }
  }
// ...................
  return (
    <>
      {/* <!--? Hero Start --> */}
      <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap hero-cap2 text-center">
                  <h2>Contact Us</h2>
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
          <form class="form-contact" onChange={handleChange} onSubmit={handleSubmit}>

            <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control valid" id="name" type="text" placeholder="Enter your name"
                  name="name"
                  required/>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control valid" id="email" type="email"  placeholder="Email"
                  name="email"
                 />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control"  id="phone" type="text" placeholder="Enter Number"
                  name="phone"
                 />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" id="subject" type="text" placeholder="Enter Subject"
                  name="subject"
                 />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <textarea class="form-control w-100" id="message" cols="30" rows="5" placeholder=" Enter Message"
                  name="message"
                ></textarea>
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
