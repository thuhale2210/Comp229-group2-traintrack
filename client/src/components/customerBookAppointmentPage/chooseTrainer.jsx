import { TrainerNameContext } from "../pages/customerBookAppointmentPage";
import axios from 'axios';
import React, { useContext, useState, useEffect } from "react";

const ChooseTrainer = ({ onTrainerChange }) => {
  const { setTrainerName } = useContext(TrainerNameContext);
  const [trainerList, setTrainerList] = useState([]);

  useEffect(() => {
    const trainers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/trainers");
        const options = response.data.map((trainer) => ({
          id: trainer._id,
          value: trainer.firstName
        }));
        setTrainerList(options);

      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };
    trainers();
  }, []);

  const handleTrainerChange = (event) => {
    const selectedTrainerName = event.target.value;
    const selectedTrainer = trainerList.find(trainer => trainer.value === selectedTrainerName);

    if (selectedTrainer) {
      onTrainerChange(selectedTrainerName);
      setTrainerName(selectedTrainerName);

      // Save the selected trainer's ID to localStorage
      localStorage.setItem('selectedTrainerId', selectedTrainer.id);
      console.log(selectedTrainer.id);
    }
  };

  return (
    <div className="m-5 h-full">
      <label className="font-bold">Choose a Trainer:</label>
      <div className="relative h-15 min-w-[200px] mt-3">
        <select
          onChange={handleTrainerChange}
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        >
          <option value="">Choose a Trainer</option>
          {trainerList.map((trainer) => (
            <option key={trainer.id} value={trainer.value}>
              {trainer.value}
            </option>
          ))}
        </select>
        <label
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
        >
        </label>
      </div>
    </div>
  );
};

export default ChooseTrainer;
