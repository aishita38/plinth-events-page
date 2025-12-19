import React from 'react';
import EventPage from './pages/EventPage';
import bgImage from './assets/bg.png';

function App() {
  const event = {
    name: 'QUIZZINGA',
    content: "Step into the thrilling world of ICPC-style programming with Cybros!"
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100vw',
      height: '100vh', // Fixed height for single page
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden' // Prevent scrolling for single page
    }}>
      <EventPage eventData={event} />
    </div>
  );
}

export default App;