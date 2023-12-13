import React, { useState } from 'react';
import ChooseFocusArea from './chooseFocusArea';

const AppointmentForm = ({ chosenDateTime, trainerName, setChosenFocusArea, setChosenSpecialRequest }) => {
    const [focusArea, setFocusArea] = useState(null);
    const [specialRequest, setSpecialRequest] = useState(null);

    // Handle focus area change
    const handleFocusAreaChange = (focusArea) => {
        setFocusArea(focusArea);
        setChosenFocusArea(focusArea);
        console.log(focusArea);

    };

    // Handle special request change
    const handleSpecialRequestChange = (request) => {
        setSpecialRequest(request);
        setChosenSpecialRequest(request);
    };

    return (
        <form>
            <div>
                <p className='pb-2 font-bold'>From:</p><p className='border rounded-lg p-2'>{chosenDateTime.start}</p>
                <p className='py-2 font-bold'>To:</p><p className='border rounded-lg p-2'>{chosenDateTime.end}</p>
            </div>
            <div className="flex mt-3">
                <div className='mr-20 w-[300px]'>
                    <p className='py-2 font-bold'>Trainer:</p>
                    <p className="w-full border rounded-lg p-2">{trainerName}</p>
                </div>
                <div className='py-2'>
                    <label className='py-2 font-bold'>Focus Area:</label>
                    <ChooseFocusArea onChange={handleFocusAreaChange} />
                </div>
            </div>
            <div className='mt-3'>
                <label className='py-2 font-bold'>Special Request (optional):</label>
                <textarea
                    value={specialRequest}
                    onChange={(e) => handleSpecialRequestChange(e.target.value)}
                    className='border rounded-lg w-full h-12 p-2'
                    placeholder="Enter your special request"
                />
            </div>
        </form>
    );
};

export default AppointmentForm;