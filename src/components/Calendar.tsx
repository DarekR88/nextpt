"use client";

import React, { useState } from 'react';

const CalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [mobileView, setMobileView] = useState<boolean>(false);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(e.target.value));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDateTime(new Date(selectedDate.toDateString() + ' ' + e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedDateTime) {
      alert(`Selected Date and Time: ${selectedDateTime}`);
    }
  };

  return (
    <div className="container mx-auto max-w-[1200px]">
      {mobileView ? (
        <form className="mt-8" onSubmit={handleSubmit}>
          <label className="block text-white">Date:</label>
          <input
            type="date"
            className="w-full bg-transparent border-b border-white text-white mt-2 p-2"
            onChange={handleDateChange}
          />
          <label className="block text-white mt-4">Time:</label>
          <input
            type="time"
            className="w-full bg-transparent border-b border-white text-white mt-2 p-2"
            onChange={handleTimeChange}
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      ) : (
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-4">Calendar</h2>
          <p className="mb-2">Selected Date: {selectedDate.toDateString()}</p>
          {/* Render calendar for desktop view */}
          <div className="grid grid-cols-7 gap-2">
            {[...Array(15)].map((_, i) => {
              const currentDate = new Date();
              currentDate.setDate(currentDate.getDate() + i);
              return (
                <div
                  key={i}
                  className={`p-2 text-center ${
                    currentDate.toDateString() === selectedDate.toDateString() ? 'bg-blue-500' : ''
                  }`}
                >
                  {currentDate.toDateString()}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => setMobileView(!mobileView)}
      >
        {mobileView ? 'Switch to Calendar View' : 'Switch to Form View'}
      </button>
    </div>
  );
};

export default CalendarComponent;