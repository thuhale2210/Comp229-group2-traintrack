import React, { useState, useRef, useEffect } from "react";
import NavBar from "../customerNavBar";
import { HoverButton } from "../components";
import LogOut from "../../images/logout.png";
import axios from 'axios';

const CustomerEditProfile = () => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState()
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [uploadedImage, setUploadedImage] = useState("");
    const fileInputRef = useRef(null);

    useEffect(() => {
        // Fetch the ID from sessionStorage
        const customerId = sessionStorage.getItem('userId');
    
        // Make an API call to get the name based on the ID
        axios.get(`http://localhost:4000/customer/${customerId}/profile`)
          .then((response) => {
            setName(response.data.fullName);
            setGender(response.data.gender);
            setAge(response.data.age);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setWeight(response.data.weight);
            setHeight(response.data.height);
          })
          .catch((error) => {
            console.error('Error fetching name:', error);
          });
    
        
        
      }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleSaveChanges = () => {
        const customerId = sessionStorage.getItem('userId');
    
        const updatedProfile = {
            firstName: name.split(' ')[0], // Assuming name format is "First Last"
            lastName: name.split(' ')[1],
            gender, // Assuming gender is already set in state
            age,
            email,
            phone,
            weight,
            height
        };
    
        axios.put(`http://localhost:4000/customer/${customerId}/update`, updatedProfile)
            .then((response) => {
                console.log('Profile updated successfully:', response.data);
                window.location.href = '/profile'; // Redirect to profile page after successful update
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
                // Handle error state or display a message to the user
            });
    };

    const handleLogOut = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }

    return (
        <>
            <NavBar />
            <div className="w-screen h-screen">
                <h3 className="pt-20 mt-7 font-bold text-2xl">Edit your Profile</h3>
                <div className="border rounded-xl mx-20 my-5 flex bg-white shadow-md">
                    {/* Left Column */}
                    <div className="flex flex-col w-1/3 items-center p-20 my-20 border-r">
                        <img
                            src={uploadedImage ? uploadedImage : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"}
                            alt="Profile"
                            className="rounded-full w-48 h-48 object-cover"
                            onClick={handleImageClick}
                        />
                        <span className="font-bold text-gray-800 text-lg pt-7">{name}</span>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            className="hidden cursor-pointer"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-wrap w-2/3 space-x-10 flex-1">
                        <div className="flex-1 p-10">
                            <table className="w-full border-collapse">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-2 px-2 font-bold text-left w-1/3">Name</td>
                                        <td className="py-2 px-2 text-left w-2/3">
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={name}
                                                className="w-full placeholder:text-primary-gray rounded py-2 px-3 text-gray-700 leading-snug focus:outline-none focus:shadow-outline focus:border-red-500 focus:bg-white focus:text-gray-900"
                                                style={{ flex: "1 0" }}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    {/* <tr className="border-b">
                                        <td className="py-2 px-2 font-bold text-left w-1/3">Gender</td>
                                        <td className="py-2 px-2 text-left w-2/3">
                                            <div className="relative h-15 min-w-[200px] mt-3">
                                                <select
                                                    onChange={e => setGender(e.target.value)}
                                                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                                <label
                                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                                                >
                                                </label>
                                            </div>
                                        </td>
                                    </tr> */}
                                    <tr className="border-b">
                                        <td className="py-2 px-2 font-bold text-left w-1/3">Age</td>
                                        <td className="py-2 px-2 text-left w-2/3">
                                            <input
                                                type="number"
                                                id="age"
                                                name="age"
                                                value={age}
                                                className="w-full placeholder:text-primary-gray rounded py-2 px-3 text-gray-700 leading-snug focus:outline-none focus:shadow-outline focus:border-red-500 focus:bg-white focus:text-gray-900"
                                                placeholder="Enter your age"
                                                style={{ flex: "1 0" }}
                                                onChange={e => setAge(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-2 font-bold text-left w-1/3">Email</td>
                                        <td className="py-2 px-2 text-left w-2/3">
                                            <input
                                                id="email"
                                                type="text"
                                                placeholder="Enter your email"
                                                value={email}
                                                className="w-full placeholder:text-primary-gray rounded py-2 px-3 text-gray-700 leading-snug focus:outline-none focus:shadow-outline focus:border-red-500 focus:bg-white focus:text-gray-900"
                                                style={{ flex: "1 0" }}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-2 font-bold text-left w-1/3">Phone Number</td>
                                        <td className="py-2 px-2 text-left w-2/3">
                                            <input
                                                id="phonenumber"
                                                type="number"
                                                placeholder="Enter your phone number"
                                                value={phone}
                                                className="w-full placeholder:text-primary-gray rounded py-2 px-3 text-gray-700 leading-snug focus:outline-none focus:shadow-outline focus:border-red-500 focus:bg-white focus:text-gray-900"
                                                style={{ flex: "1 0" }}
                                                onChange={e => setPhone(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-2 font-bold text-left w-1/3">Weight</td>
                                        <td className="py-2 px-2 text-left w-2/3">
                                            <input
                                                type="number"
                                                id="weight"
                                                name="weight"
                                                value={weight}
                                                className="w-full placeholder:text-primary-gray rounded py-2 px-3 text-gray-700 leading-snug focus:outline-none focus:shadow-outline focus:border-red-500 focus:bg-white focus:text-gray-900"
                                                placeholder="Enter your weight"
                                                style={{ flex: "1 0" }}
                                                onChange={e => setWeight(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-2 font-bold text-left w-1/3">Height</td>
                                        <td className="py-2 px-2 text-left w-2/3">
                                            <input
                                                type="number"
                                                id="height"
                                                name="height"
                                                value={height}
                                                className="w-full placeholder:text-primary-gray rounded py-2 px-3 text-gray-700 leading-snug focus:outline-none focus:shadow-outline focus:border-red-500 focus:bg-white focus:text-gray-900"
                                                placeholder="Enter your height"
                                                style={{ flex: "1 0" }}
                                                onChange={e => setHeight(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="flex justify-end mt-5">
                                <HoverButton
                                    onClick={handleSaveChanges}>
                                    <span>Save changes</span>
                                </HoverButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end bottom-0 right-0 absolute mr-5 mb-5">
                    <span className="font-bold pt-2 cursor-pointer">Logout &nbsp;</span>
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

export default CustomerEditProfile;

