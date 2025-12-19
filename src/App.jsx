import React from 'react';
import EventPage from './pages/EventPage';
import bgImage from './assets/full_bg.png';

function App() {
  const events = [
    { name: 'IUPC', content: "Step into the thrilling world of ICPC-style programming with Cybros!" },
    { name: 'HACKATHON', content: "Build the future in this 24-hour innovation sprint." },
    { name: 'CTF', content: "Capture the Flag security competition." } // Added a 3rd to demo 1/3 splits effectively
  ];

  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100vw',
      minHeight: '100vh',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: '100% 100%', // Stretching to fit total height
      backgroundAttachment: 'scroll', // Scrolls with content
      backgroundRepeat: 'no-repeat'
    }}>
      {events.map((event, index) => (
        <EventPage key={index} eventData={event} />
      ))}
    </div>
  );
}

export default App;