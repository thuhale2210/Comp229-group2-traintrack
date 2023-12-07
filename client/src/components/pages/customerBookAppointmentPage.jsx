import { React, useState, createContext } from "react";
import NavBar from '../customerNavBar'
import ChooseTrainer from '../customerBookAppointmentPage/chooseTrainer'
import Calendar from '../customerBookAppointmentPage/calendar'
import { Link } from "react-router-dom";
import { SecondButton } from '../components'

// Create a new context and export
export const TrainerNameContext = createContext();

// Create a Context Provider
const TrainerNameContextProvider = ({ children }) => {
  const [trainerName, setTrainerName] = useState(undefined);

  return (
    <TrainerNameContext.Provider value={{ trainerName, setTrainerName }}>
      {children}
    </TrainerNameContext.Provider>
  );
};

const BookAppointmentPage = () => {
  const [chosenTrainer, setChosenTrainer] = useState("");

  const handleTrainerChange = (trainerName) => {
    setChosenTrainer(trainerName);
  };

  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-col">
        <TrainerNameContextProvider>
          <div className="w-screen h-full flex mt-20 p-2">
            <div className="w-1/4 text-base h-5/6">
              <ChooseTrainer onTrainerChange={handleTrainerChange} />
              <div className="h-1/6 relative">
                <Link to='/home' className="left-0 bottom-0 start-0 ml-5 mb-5 absolute">
                  <SecondButton>Back</SecondButton>
                </Link>
              </div>
            </div>
            {chosenTrainer ? (
              <div className="w-3/4 mr-5 rounded-lg p-3 text-base overflow-y-scroll">
                <Calendar chosenTrainer={chosenTrainer} />
              </div>
            ) : (
              <div className="w-3/4 mr-5 rounded-lg p-5 text-base">
                Please choose a trainer to view the calendar
              </div>
            )}
          </div>
        </TrainerNameContextProvider>
      </div>
    </>
  )
}

export default BookAppointmentPage