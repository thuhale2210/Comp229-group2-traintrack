import { React, useState, createContext } from "react";
import NavBar from '../customerNavBar'
import ChooseTrainer from '../customerBookAppointmentPage/chooseTrainer'
import Calendar from '../customerBookAppointmentPage/calendar'

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
        {/* <div className="text-sm font-bold items-center mt-20 py-5">
          Hello user, it's nice to see you again!<br/>First, please choose a trainer to view their availablity. Then, you can book an appointment with them!
        </div> */}
        <TrainerNameContextProvider>
          <div className="w-screen h-full flex mt-20 p-2">
            <div className="w-1/4 text-base h-3/4">
              <ChooseTrainer onTrainerChange={handleTrainerChange} />
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