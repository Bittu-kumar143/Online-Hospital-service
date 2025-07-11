import React,{useState,createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const AuthContext = createContext(); 

export default function AuthProvider(props) {
    const navigate=useNavigate()
    const [userToken,setUserToken]=useState(null)
    const [userData,setUserData]=useState(null)
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,login start.....................
  const UserLogin=(formdata)=>{
    try{
    axios({
        method:"post",
        url:"http://localhost:3001/loginnow",
        data:formdata
    }).then((res)=>{
        if(res.data.status="success"){
          console.log(res.data)
          setUserToken(res.data.token)
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("usermail", res.data.usermail);
          sessionStorage.setItem('userid',res.data.userdata._id);
          navigate("/")
        }
    })
    }
    catch(err){
        console.log(err)
    }
  }
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,login end..................

// ..............................card functionality........
// ..............................end card functionality

// ..............................logout.....................
const Logout =()=>{
  try{
    setUserToken(null)
    sessionStorage.removeItem('usermail');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userid');
    navigate("/login")
  }
  catch(err){
    console.log(err)
  }
}
// .........................................................
  return (
    <AuthContext.Provider value={{userToken,UserLogin,userData,Logout}}>
      {props.children}
    </AuthContext.Provider>
  )
}
