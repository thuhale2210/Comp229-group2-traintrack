import React, { useState, useRef, useEffect } from "react";
import NavBar from "../customerNavBar";
import { HoverButton } from "../components";
import LogOut from "../../images/logout.png";
import axios from 'axios';
import { Link } from "react-router-dom";

const CustomerProfile = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [uploadedImage, setUploadedImage] = useState("");

  useEffect(() => {
    // Fetch the ID from sessionStorage
    const customerId = sessionStorage.getItem('userId');

    // Make an API call to get the name based on the ID
    axios.get(`http://localhost:4000/customer/${customerId}/name`)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        console.error('Error fetching name:', error);
      });
  }, []);

  const handleFormSubmit = () => {
    const formData = { name, age, email, phone, weight, height }
    const updatedFormData = {
      name,
      age,
      email,
      phone,
      weight,
      height
    };
    setName(name);
    setAge(age);
    setEmail(email);
    setPhone(phone);
    setWeight(weight);
    setHeight(height);
    console.log(formData)
  }

  const handleLogOut = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }

  return (
    <>
      <NavBar />
      <div className="w-screen h-screen">
        <h3 className="pt-20 mt-7 font-bold text-2xl">Profile</h3>
        <div className="border rounded-xl mx-20 my-5 flex bg-white shadow-md">
          {/* Left Column */}
          <div className="flex flex-col w-1/3 items-center p-20 my-20 border-r">
            <img
              src={uploadedImage ? uploadedImage : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"}
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover"
            />
            <span className="font-bold text-gray-800 text-lg pt-7">{name}</span>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap w-2/3 space-x-10 flex-1">
            <div className="flex-1 p-10">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-bold text-left w-1/3">Name</td>
                    <td className="py-4 px-2 text-left w-2/3">{name}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-bold text-left w-1/3">Gender</td>
                    <td className="py-4 px-2 text-left w-2/3">To be updated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-bold text-left w-1/3">Age</td>
                    <td className="py-4 px-2 text-left w-2/3">To be updated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-bold text-left w-1/3">Email</td>
                    <td className="py-4 px-2 text-left w-2/3">To be updated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-bold text-left w-1/3">Phone Number</td>
                    <td className="py-4 px-2 text-left w-2/3">To be updated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-bold text-left w-1/3">Weight</td>
                    <td className="py-4 px-2 text-left w-2/3">To be updated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-bold text-left w-1/3">Height</td>
                    <td className="py-4 px-2 text-left w-2/3">To be updated</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end mt-5">
                <Link to="/profile/edit"><HoverButton>
                  Edit Your Information
                </HoverButton></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end bottom-0 right-0 absolute mr-5 mb-5">
          <span className="font-bold py-2 cursor-pointer">Log Out &nbsp;</span>
          <button className="p-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-primary-red">
            <img
              src={LogOut}
              className="w-6 h-6 right-0 object-cover"
              alt="Log Out"
              onClick={handleLogOut}
            />
          </button>

        </div>
      </div>
    </>
  );
};

export default CustomerProfile;

