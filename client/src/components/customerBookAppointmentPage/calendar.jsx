import React, { useState, useContext } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import AppointmentDetails from './appointmentDetails';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';
import { TrainerNameContext } from "../pages/customerBookAppointmentPage";

const localizer = momentLocalizer(moment);

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [chosenDateTime, setChosenDateTime] = useState(null);
    const [isSlotSelectionEnabled, setSlotSelectionEnabled] = useState(true);
    const { trainerName } = useContext(TrainerNameContext);

    const handleSelectSlot = (slotInfo) => {
        // Prevent double booking
        if (!isSlotSelectionEnabled) return;

        // Setup current date time
        const currentDateTime = moment();

        // Check if the selected slot is in the past
        if ((slotInfo) && (moment(slotInfo.start) > currentDateTime)) {
            const newEvent = {
                start: slotInfo.start,
                end: slotInfo.end,
            title: 'New Appointment',
            };
            const updatedEvents = events.filter((event) => event !== selectedSlot);
            setEvents([...updatedEvents, newEvent]);
            setChosenDateTime({
                start: moment(slotInfo.start).format('LLL'),
                end: moment(slotInfo.endha).format('LLL'),
            });

            // Set the selected slot
            setSelectedSlot(slotInfo);

            // Disable double booking if the user has already booked an appointment
            setSlotSelectionEnabled(false);
        } else {
            // Reset the selected slot and chosen date time
            setChosenDateTime(null);
            setSelectedSlot(null);
            window.alert('You cannot book an appointment in the past!');
            setSlotSelectionEnabled(true);
        }
    };

    // Reset the selected slot and chosen date time when the user changes the appointment
    const handleChangeAppointment = () => {
        setSelectedSlot(null);
        setChosenDateTime(null);
        window.location.reload();
    };

    return (
        <div>
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={handleSelectSlot}
                selectable
                min={new Date(moment().set({ hour: 6, minute: 0, second: 0, millisecond: 0 }))}
                max={new Date(moment().set({ hour: 23, minute: 0, second: 0, millisecond: 0 }))}
                defaultView="week"
                views={['week']}
            />
            {chosenDateTime && (
                <div className='mt-3'>
                    <AppointmentDetails
                        chosenDateTime={chosenDateTime}
                        onChangeAppointment={handleChangeAppointment}
                        trainerName={trainerName}
                    />
                </div>
            )}
        </div>
    );
};

export default Calendar;
