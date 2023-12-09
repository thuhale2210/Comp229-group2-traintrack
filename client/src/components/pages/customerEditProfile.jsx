import React, { useState, useRef, useEffect } from "react";
import NavBar from "../customerNavBar";
import { SecondButton } from "../components";
import LogOut from "../../images/logout.png";
import axios from 'axios';

const CustomerEditProfile = () => {
    const [name, setName] = useState("")
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
        axios.get(`http://localhost:4000/customer/${customerId}/name`)
            .then((response) => {
                setName(response.data.name);
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
    const handleChanges = () => {
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
                <h3 className="pt-20 my-7 font-bold text-2xl">Edit your Profile</h3>
                <div className="border rounded-xl mx-20 my-10 flex bg-white shadow-md">
                    {/* Left Column */}
                    <div className="flex flex-col w-1/3 items-center p-20 mt-20 border-r">
                        <img
                            src={uploadedImage ? uploadedImage : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"}
                            alt="Profile"
                            className="rounded-full w-32 h-32 object-cover"
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
                                        <td className="py-4 px-2 font-bold text-left w-1/3">Name</td>
                                        <td className="py-4 px-2 text-left w-2/3">
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={name}
                                                className="placeholder:text-primary-gray rounded py-2 px-3 text-gray-700 leading-snug focus:outline-none focus:shadow-outline focus:border-red-500 focus:bg-white focus:text-gray-900"
                                                style={{ flex: "1 0" }}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 px-2 font-bold text-left w-1/3">Gender</td>
                                        <td className="py-4 px-2 text-left w-2/3">To be updated</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 px-2 font-bold text-left w-1/3">Age</td>
                                        <td className="py-4 px-2 text-left w-2/3">
                                            <input
                                                type="number"
                                                id="age"
                                                name="age"
                                                value={age}
                                                className="placeholder:text-primary-gray rounded py-2 px-3 text-gray-700 leading-snug focus:outline-none focus:shadow-outline focus:border-red-500 focus:bg-white focus:text-gray-900"
                                                placeholder="Enter your age"
                                                style={{ flex: "1 0" }}
                                                onChange={e => setAge(e.target.value)}
                                            />
                                        </td>
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

                            <div className="flex justify-end mt-8">
                                <SecondButton
                                onClick={handleChanges}>
                                    <span>Save changes</span>
                                </SecondButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 
                <div className="flex-1 border-black border p-10 -mt-28 mb-12 h-auto">
                    <h3 className="font-bold text-3xl mb-3 underline">Edit your Profile:</h3>
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="font-bold">Name:</span>
                        <div className="w-10">
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                className="shadow  placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white"
                                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="font-bold">Age:</span>
                        <div className="w-10">
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={age}
                                className="shadow placeholder:text-black bg-gray-300 border-black border  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white"
                                placeholder="Enter your age"
                                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                                onChange={e => setAge(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="font-bold">Email:</span>
                        <div className="w-10">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white"
                                placeholder="Enter your email"
                                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="font-bold">Phone Number:</span>
                        <div className="w-[210px] flex space-x-10">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white"
                                placeholder="Enter your phone number"
                                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="font-bold">Weight:</span>
                        <div className="w-[400px] flex space-x-10">
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={weight}
                                className="shadow w-full placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white"
                                placeholder="Enter your weight"
                                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                                onChange={e => setWeight(e.target.value)}
                            />

                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="font-bold">Height:</span>
                        <div className="w-[400px] flex space-x-10">
                            <input
                                type="text"
                                id="height"
                                name="height"
                                value={height}
                                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white"
                                placeholder="Enter your height"
                                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                                onChange={e => setHeight(e.target.value)}

                            />
                        </div>
                    </div>
                    <div className="mb-10 flex-1 space-x-4 items-center justify-end">
                        <button className="p-[10px] w-[200px] rounded-[20px] bg-[#D9D9D9] hover:border-cyan-900 hover:bg-[#FF4B2B] hover:text-white focus:placeholder:text-white hover:font-bold" onClick={handleFormSubmit}>
                            Save all changes
                        </button>
                        <div className="flex justify-end">
                            <span className="font-bold pt-2 cursor-pointer">Logout</span>
                            <button className="p-2 rounded-full bg-[#D9D9D9] hover:bg-orange-400">
                                <img src={LogOut} />
                            </button>
                        </div>
                    </div>
                </div> */}

                <div className="flex justify-end mr-10 mb-10">
                    <span className="font-bold pt-2 cursor-pointer">Logout &nbsp;</span>
                    <button className="p-2 rounded-full bg-[#D9D9D9] hover:bg-orange-400">
                        <img
                            src={LogOut}
                            className="w-6 h-6 bottom-0 right-0"
                            alt="Log Out"
                            onClick={handleLogOut} />
                    </button>
                </div>

            </div>
        </>
    );
};

export default CustomerEditProfile;

