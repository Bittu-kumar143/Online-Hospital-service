import Header from "./Comonent/Header";
import Footer from "./Comonent/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Doctors from "./Pages/Doctors";
import Department from "./Pages/Department";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Element from "./Pages/Element";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AuthProvider from "./Context/AuthContext";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminDashboard from "./Pages/AdminDashboard";
import UserTable from "./Pages/UserTable";
import ContactUsTable from "./Pages/ContactUsTable";

function App() {
  return (
    <>
     <Router>
      <AuthProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About/" element={<About/>}/>
        <Route path="/Doctors/" element={<Doctors/>}/>
        <Route path="/Department/" element={<Department/>}/>
        <Route path="/blog/" element={<Blog/>}/>
        <Route path="/BlogDetails/" element={<BlogDetails/>}/>
        <Route path="/Element/" element={<Element/>}/>
        <Route path="/Contact/" element={<Contact/>}/>
        <Route path="/Register/" element={<Register/>}/>
        <Route path="/login/" element={<Login/>}/>
        <Route path="/AdminDashboard/" element={<AdminDashboard/>}/>
        <Route path="/UserTable/" element={<UserTable/>}/>
        <Route path="/ContactUsTable/" element={<ContactUsTable/>}/>
      </Routes>
      <Footer/>
      </AuthProvider>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
