import React from 'react'

const EventPage = ({ eventData }) => {
  return (
    // min-h-screen ensures it takes at least the full height of the device
    <div className="min-h-screen w-full flex flex-col items-center justify-center border-b border-gray-700 p-8">
      <h1 className="text-6xl font-bold mb-4">{eventData.name}</h1>
      <p className="text-xl text-center max-w-2xl">
        {eventData.content}
      </p>
    </div>
  );
};

export default EventPage