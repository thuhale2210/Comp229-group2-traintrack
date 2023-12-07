import React, { useState, useRef } from "react";
import NavBar from "../customerNavBar";
import TempAvatar from "../../images/temp_avatar.png";
import LogOut from "../../images/logout.png";

const CustomerHome = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [noofTraining, setNoOfTraining] = useState("")
  const [weightLoss, setWeightLoss] = useState("")
  const [weight, setWeight] = useState("")
  const [weightUnit, setWeightUnit] = useState("lbs")
  const [height, setHeight] = useState("")
  const [heightUnit, setHeightUnit] = useState("in")
  const [neckCirc, setNeckCirc] = useState("")
  const [neckCircUnit, setNeckCircUnit] = useState("in")
  const [waistCirc, setWaistCirc] = useState("")
  const [waistCircUnit, setWaistCircUnit] = useState("in")
  const [hipCirc, setHipCirc] = useState("")
  const [hipCircUnit, setHipCircUnit] = useState("in")
  const [uploadedImage, setUploadedImage] = useState(TempAvatar);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFormSubmit = () => {

    const formData = { name, age, email, phone, noofTraining, weightLoss, weight, weightUnit, height, heightUnit, neckCirc, neckCircUnit, waistCirc, waistCircUnit, hipCirc, hipCircUnit }
    const updatedFormData = {
      name,
      age,
      email,
      phone,
      noofTraining,
      weightLoss,
      weight,
      weightUnit,
      height,
      heightUnit,
      neckCirc,
      neckCircUnit,
      waistCirc,
      waistCircUnit,
      hipCirc,
      hipCircUnit,
    };
    setName(name);
    setAge(age);
    setEmail(email);
    setPhone(phone);
    setNoOfTraining(noofTraining);
    setWeightLoss(weightLoss);
    setWeight(weight);
    setWeightUnit(weightUnit);
    setHeight(height);
    setHeightUnit(heightUnit);
    setNeckCirc(neckCirc);
    setNeckCircUnit(neckCircUnit);
    setWaistCirc(waistCirc);
    setWaistCircUnit(waistCircUnit);
    setHipCirc(hipCirc);
    setHipCircUnit(hipCircUnit);
    console.log(formData)
  }
  return (
    <>
      <NavBar />
      <body className="overflow-auto bg-gray-200">
        <div className="pt-8 px-[130px]">
          <h3 className="pt-20 font-bold underline text-3xl">Profile:</h3>
        </div>
        <div className="pt-5 px-[150px] flex items-center">
          <div className="flex items-center space-x-4 p-10">
            <img
              src={uploadedImage}
              alt="Proile Picture"
              className="rounded-full w-32 h-32 object-cover"
              onClick={handleImageClick}
            />
            <span className="font-semibold text-gray-800 text-xl">Joe Smith</span>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </div>
        <div className="pt-5 px-[150px]">
          <span className="font-bold text-3xl underline cursor-default">Your profile:</span>
        </div>
        <div className="pt-5 px-[150px] flex flex-wrap space-x-10">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold cursor-default">Name: Joe Smith</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold cursor-default">Age: 20</span>

            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold cursor-default">Email: joe@gmail.com</span>

            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold cursor-default">Phone Number: +12321234567</span>

            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold cursor-default">Weight: 75 kg</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold cursor-default">Height: 150 cm</span>
            </div>
            <div className="mt-[40px] mb-6">
              <span className="font-bold text-2xl underline cursor-default">Your fitness goal:</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold cursor-default">Trainings to complete: 3</span>

            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold cursor-default">Targeted weight loss (in kg): 20</span>

            </div>
          </div>

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
            <div className="mt-[40px] mb-6">
              <span className="font-bold text-2xl underline">Set your fitness goal:</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold">Trainings to complete:</span>
              <div className="w-10">
                <input
                  type="number"
                  id="trainingdays"
                  name="trainingdays"
                  value={noofTraining}
                  className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white"
                  placeholder="Number of trainings"
                  style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                  onChange={e => setNoOfTraining(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-bold">Targeted weight loss (in kg):</span>
              <div className="w-10">
                <input
                  type="number"
                  id="weightLoss"
                  name="weightLoss"
                  value={weightLoss}
                  className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white"
                  placeholder="Targeted weight loss"
                  style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                  onChange={e => setWeightLoss(e.target.value)}
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

                <select value={weightUnit} onChange={e => setWeightUnit(e.target.value)} className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white">
                  <option value="lbs">lbs</option>
                  <option value="kg">Kg</option>
                </select>
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
                <select value={heightUnit} onChange={e => setHeightUnit(e.target.value)} className="shadow  placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-fuchsia-500 focus:bg-[#FF4B2B] focus:text-white focus:placeholder:text-white">
                  <option value="in">in</option>
                  <option value="ft">Ft</option>
                  <option value="cm">cm</option>
                  <option value="m">m</option>
                </select>
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
          </div>

        </div>
      </body>
    </>
  );
};

export default CustomerHome;

