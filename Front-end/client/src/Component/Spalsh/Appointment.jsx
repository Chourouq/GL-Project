import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';
import { BsCalendar, BsPerson, BsPhone, BsChat, BsClock } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

const Appointment = ({ close }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [disabledPeriods, setDisabledPeriods] = useState([]);
    const navigate = useNavigate();
    const periods = ['8:00-9:30','10:00-11:30','13:00-14:30','15:00-16:30'];

    const handleSubmit = (event) => {
        event.preventDefault();
        const fullName = event.target.elements.fullName.value;
        const phoneNumber = event.target.elements.phoneNumber.value;
        const problemDescription =
            event.target.elements.problemDescription.value;

        console.log('Form submitted with data:', {
            selectedDate,
            selectedPeriod,
            fullName,
            phoneNumber,
            problemDescription,
        });
    };

    const isDateDisabled = (date, disabledDays) => {
        return disabledDays.includes(date.getDay());
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);

        // Example logic to disable 'Evening' if selected date is a Monday
        const disabledPeriodsForDate = date.getDay() === 1 ? ['8:00-9:30','13:00-14:30'] :[];
        setDisabledPeriods(disabledPeriodsForDate);
        setSelectedPeriod('');

    };
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <form
                className="relative max-w-lg w-full flex flex-col border-t-2 justify-center items-center shadow-lg bg-white rounded-3xl p-4"
                onSubmit={handleSubmit}
            >
                <button
                    className="flex absolute top-2 right-2"
                    onClick={close}
                >
                    <FaTimes />
                </button>
                <h1 className="text-blue-800 text-2xl font-bold pb-3">
                    Rendez-vous
                </h1>
                <center className="mb-4 relative">
                    <label
                        htmlFor="date"
                        className="absolute top-2 left-4 z-50 text-md text-blue-900"
                    >
                        <BsCalendar className="inline-block mr-2" />
                    </label>
                    <DatePicker
                        id="date"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        filterDate={(date) => isDateDisabled(date, [0,1, 2,3,4])}
                        className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl"
                        placeholderText="Sélectionner une date"
                    />
                </center>
                {selectedDate && (
                    <div className="mb-4 w-full relative">
                        <label
                            htmlFor="date"
                            className="absolute top-2 left-4 z-50 text-md text-blue-900"
                        >
                            <BsClock className="inline-block mr-2" />
                        </label>
                        <select
                            id="period"
                            name="period"
                            className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full"
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                        >
                            <option value="" disabled>
                                Sélectionner une période
                            </option>
                            {periods.map((period) => (
                                <option
                                    key={period}
                                    value={period}
                                    disabled={disabledPeriods.includes(period)}
                                >
                                    {period}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <div className="mb-4 w-full relative">
                    <label
                        htmlFor="fullName"
                        className="absolute  top-2 left-4 text-md text-blue-900"
                    >
                        <BsPerson className="inline-block mr-2" />
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-4 w-full relative">
                    <label
                        htmlFor="phoneNumber"
                        className="absolute top-2 left-4 text-md text-blue-900"
                    >
                        <BsPhone className="inline-block mr-2" />
                    </label>
                    <input
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl  w-full"
                        placeholder="Votre numéro de téléphone"
                    />
                </div>
                <div className="mb-4 w-full relative">
                    <label
                        htmlFor="problemDescription"
                        className="absolute top-2 left-4 text-md text-blue-900"
                    >
                        <BsChat className="inline-block mr-2" />
                    </label>
                    <textarea
                        id="problemDescription"
                        name="problemDescription"
                        rows="4"
                        className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full"
                        placeholder="Description du problème"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="cursor-pointer font-medium bg-blue-900 text-center text-[12px] text-white rounded-full py-3 px-6 hover:scale-105"
                    onClick={()=>navigate(0)}
                >
                    Planifier un rendez-vous
                </button>
            </form>
        </div>
    );
};

export default Appointment;
