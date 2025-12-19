import { useState } from 'react'
import './App.css'
import EventPage from './pages/EventPage' // Make sure the path is correct

function App() {
  const events = [
    {
      name: 'IUPC',
      content: "Step into the thrilling world of ICPC-style programming with Cybros!",
    },
    {
      name: 'Hackathon',
      content: "Build, break, and innovate in this 24-hour sprint!",
    },
    {
      name: 'Code-In',
      content: "A beginner-friendly competition to start your journey.",
    }
  ];

  return (
    <div className="flex flex-col">
      {events.map((event, index) => (
        <EventPage key={index} eventData={event} />
      ))}
    </div>
  )
}

export default App