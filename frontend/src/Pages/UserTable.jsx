import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import Swal from "sweetalert2";
import axios from 'axios';

function UserTable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const dataaa = await axios.get(SummaryApi.allUser.url);
      console.log(dataaa)
      setData(dataaa.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteHandler = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`${SummaryApi.deleteSingleUser.url}${id}`);
          getAllUsers();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="bg-light p-4 rounded shadow-sm">
        <h3 className="text-center mb-4">Registered Users</h3>
        <div className="table-responsive">
          <table className="table table-bordered table-striped text-center mb-0">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Registered On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="text-capitalize">User</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => deleteHandler(user?._id)} className="btn btn-sm btn-outline-danger rounded-pill">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {data?.length === 0 && (
            <p className="text-center mt-3 text-muted">No users found.</p>
          )}
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default UserTable;
