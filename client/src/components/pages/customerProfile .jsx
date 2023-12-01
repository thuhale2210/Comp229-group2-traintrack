import React from "react";
import NavBar from "../customerNavBar";
import TempAvatar from "../../images/temp_avatar.png";
import Footer from "../footer";
import logout from "../../images/logout.png";

const CustomerProfile = () => {
  return (
    <>
      <NavBar/>
      <div className="pt-8 px-[130px]">
        <h3 className="pt-20 font-bold  text-3xl">Profile</h3>
      </div>
      <div className="pt-5 px-[150px] flex items-center">
        <div className="flex items-center space-x-4 p-10">
          <img
            src={TempAvatar}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover"
          />
          <span className="font-semibold text-gray-800 text-xl">Joe Smith</span>
        </div>
      </div>
      <div className="pt-5 px-[150px]">
        <span className="font-bold text-3xl">Edit your profile</span>
      </div>
      <div className="pt-5 px-[150px] flex flex-wrap space-x-10">
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Name</span>
            <div className="w-100">
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="shadow  placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Age</span>
            <div className="w-100">
              <input
                type="number"
                id="age"
                name="age"
                className="shadow placeholder:text-black bg-gray-300 border-black border  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your age"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Email</span>
            <div className="w-100">
              <input
                type="email"
                name="email"
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Phone Number</span>
            <div className="w-100">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone number"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
            </div>
          </div>
          <div className="mt-[40px] mb-6">
            <span className="font-bold text-2xl">Set your fitness goal</span>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Trainings to complete</span>
            <div className="w-100">
              <input
                type="number"
                id="trainingdays"
                name="trainingdays"
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Number of trainings"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Targeted weight loss (in kg)</span>
            <div className="w-100">
              <input
                type="number"
                id="trainingdays"
                name="trainingdays"
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Targeted weight loss"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Weight</span>
            <div className="w-100 flex space-x-10">
              <input
                type="number"
                id="weight"
                name="weight"
                className="shadow placeholder:text-black bg-gray-300 border-black border border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your weight"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />

              <select className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>lbs</option>
                <option>Kg</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Height</span>
            <div className="w-100 flex space-x-10">
              <input
                type="text"
                id="height"
                name="height"
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your height"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
              <select className="shadow  placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>in</option>
                <option>Ft</option>
                <option>cm</option>
                <option>m</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Neck Circumference</span>
            <div className="w-100 flex space-x-10">
              <input
                type="text"
                id="neck_circ"
                name="neck_circ"
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your neck circumference"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
              <select className="shadow  placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>in</option>
                <option>cm</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Waist Circumference</span>
            <div className="w-100 flex space-x-10">
              <input
                type="text"
                id="waist_circ"
                name="waist_circ"
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your waist circumference"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
              <select className="shadow  placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>in</option>
                <option>cm</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">Hip Circumference</span>
            <div className="w-100 flex space-x-10">
              <input
                type="text"
                id="hip_circ"
                name="hip_circ"
                className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your hip circumference"
                style={{ flex: "1 0" }} // Ensure the input takes the remaining space
              />
              <select className="shadow placeholder:text-black bg-gray-300 border-black border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>in</option>
                <option>cm</option>
              </select>
            </div>
          </div>
        </div>
        <div className="fixed bottom-20 right-20 flex-1 space-x-4 items-center">
          <button className="p-[10px] w-[200px] rounded-[20px] bg-[#D9D9D9]">
            Save all changes
          </button>
          <span className="font-bold">Logout</span>
          <button className="p-2 rounded-full bg-[#D9D9D9]">
            <img src={logout} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerProfile;
