import React, { useState, useRef } from "react";
import NavBar from "../customerNavBar";
import TempAvatar from "../../images/temp_avatar.png";
import Footer from "../footer";
import LogOut from "../../images/logout.png";
const CustomerHome = () => {
  const [name , setName] = useState("")
  const [age,setAge] = useState()
  const [email,setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [noofTraining, setNoOfTraining]= useState("")
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
    
    const formData = {name,age,email,phone,noofTraining, weightLoss,weight ,weightUnit,height,heightUnit,neckCirc,neckCircUnit,waistCirc,waistCircUnit,hipCirc, hipCircUnit }
    console.log(formData)
  }
  return (
    <>
      <NavBar />
      <div className="pt-8 px-[130px]">
        <h3 className="pt-20 font-bold  text-3xl">Profile</h3>
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
        <span className="font-bold text-3xl">Edit your profile</span>
      </div>
      <div className="pt-5 px-[150px] flex flex-wrap space-x-10">
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Name</span>
            <div className="w-[300px]">
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                className="shadow w-full placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Age</span>
            <div className="w-[300px]">
              <input
                type="number"
                id="age"
                name="age"
                value={age}
                className="shadow w-full placeholder:text-black bg-gray-300 border-black border  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your age"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Email</span>
            <div className="w-[300px]">
              <input
                type="email"
                name="email"
                value={email}
                className="shadow w-full placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e=>setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Phone Number</span>
            <div className="w-[300px]">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                className="shadow w-full placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone number"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e=>setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-[40px] mb-6">
            <span className="font-bold text-2xl">Set your fitness goal</span>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Trainings to complete</span>
            <div className="w-[300px]">
              <input
                type="number"
                id="trainingdays"
                name="trainingdays"
                value={noofTraining}
                className="shadow w-full placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Number of trainings"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e=>setNoOfTraining(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Targeted weight loss (in kg)</span>
            <div className="w-[300px]">
              <input
                type="number"
                id="weightLoss"
                name="weightLoss"
                value={weightLoss}
                className="shadow w-full placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Targeted weight loss"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e=>setWeightLoss(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Weight</span>
            <div className="w-[400px] flex space-x-10">
              <input
                type="number"
                id="weight"
                name="weight"
                value={weight}
                className="shadow w-full placeholder:text-black bg-gray-300 border-black border border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your weight"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e=> setWeight(e.target.value)}
              />

              <select value={weightUnit} onChange={e=>setWeightUnit(e.target.value)} className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="lbs">lbs</option>
                <option value="kg">Kg</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Height</span>
            <div className="w-[400px] flex space-x-10">
              <input
                type="text"
                id="height"
                name="height"
                value={height}
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your height"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e=>setHeight(e.target.value)}

              />
              <select value={heightUnit} onChange={e=>setHeightUnit(e.target.value)} className="shadow  placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="in">in</option>
                <option value="ft">Ft</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Neck Circumference</span>
            <div className="w-[400px] flex space-x-10">
              <input
                type="text"
                id="neck_circ"
                name="neck_circ"
                value={neckCirc}
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your neck circumference"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e=>setNeckCirc(e.target.value)}
              />
              <select value={neckCircUnit} onChange={e=>setNeckCircUnit(e.target.value)} className="shadow  placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="in">in</option>
                <option value="cm">cm</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Waist Circumference</span>
            <div className="w-[400px] flex space-x-10">
              <input
                type="text"
                id="waist_circ"
                name="waist_circ"
                value={waistCirc}
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your waist circumference"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e=>setWaistCirc(e.target.value)}
              />
              <select value={waistCircUnit} onChange={e=>setWaistCircUnit(e.target.value)} className="shadow  placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value='in'>in</option>
                <option value='cm'>cm</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Hip Circumference</span>
            <div className="w-[400px] flex space-x-10">
              <input
                type="text"
                id="hip_circ"
                name="hip_circ"
                value={hipCirc}
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your hip circumference"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
                onChange={e=>setHipCirc(e.target.value)}
              />
              <select value={hipCircUnit} onChange={e=>setHipCircUnit(e.target.value)} className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value='in'>in</option>
                <option value='cm'>cm</option>
              </select>
            </div>
          </div>
        </div>
        <div className="fixed bottom-20 right-20 flex-1 space-x-4 items-center">
          <button className="p-[10px] w-[200px] rounded-[20px] bg-[#D9D9D9]" onClick={handleFormSubmit}>
            Save all changes
          </button>
          <span className="font-bold">Logout</span>
          <button className="p-2 rounded-full bg-[#D9D9D9]">
            <img src={LogOut} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerHome;
