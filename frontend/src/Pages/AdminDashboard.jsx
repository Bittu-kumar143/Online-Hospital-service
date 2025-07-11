import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const [count, setCount] = useState(0)

  const getItemsCount = async () => {
      try {
          const result = await axios.get(SummaryApi.countForDashboard.url)
          console.log(result,"result")
          setCount(result.data)
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {
      getItemsCount()
  }, [])
  return (
    <div
    className="container-fluid py-6 wow bounceInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="p-5 bg-light rounded">
        <div className="row g-4">
          <div className="col-12 text-center">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
              Admin Panel
            </small>
            <h1 className="display-5 mb-0">Welcome, Admin!</h1>
            <p className="mt-3 mb-4">
              Manage user data, contact messages, and services here.
            </p>
          </div>
  
          {/* All four cards in a single row */}
          <div className="col-md-6 col-lg-6">
          <Link to={"/UserTable"}>

            <div className="border border-primary p-4 rounded text-center bg-white shadow-sm">
              <i className="fas fa-users fa-2x text-primary mb-3"></i>
              <h4>Registered Users</h4>
              <p>Manage all user accounts and details.</p>
              <button className="btn btn-outline-primary rounded-pill">Users {count?.users}</button>
            </div>
          </Link>
          </div>
          
         <div className="col-md-6 col-lg-6">
         <Link to={"/ContactUsTable"}>
            <div className="border border-primary p-4 rounded text-center bg-white shadow-sm">
              <i className="fas fa-envelope-open-text fa-2x text-primary mb-3"></i>
              <h4>Contact Messages</h4>
              <p>View messages sent by users.</p>
              <button className="btn btn-outline-primary rounded-pill">Contacts {count?.contactUs}</button>
            </div>
         </Link>
          </div>
          
          {/* <div className="col-md-6 col-lg-4">
           <Link to={"/OrderTable"}>
           <div className="border border-primary p-4 rounded text-center bg-white shadow-sm">
              <i className="fas fa-tools fa-2x text-primary mb-3"></i>
              <h4>Orders</h4>
              <p>Manage user orders and details.</p>
              <button className="btn btn-outline-primary rounded-pill">Orders {count?.orders}</button>
            </div>
           </Link>
          </div> */}
  
          {/* <div className="col-md-6 col-lg-3">
            <div className="border border-primary p-4 rounded text-center bg-white shadow-sm">
              <i className="fas fa-box-open fa-2x text-primary mb-3"></i>
              <h4>Products</h4>
              <p>Edit or manage available products.</p>
              <button className="btn btn-outline-primary rounded-pill">Products {count?.products}</button>
            </div>
          </div> */}
  
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default AdminDashboard;
