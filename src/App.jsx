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
      width: '100%',
      minHeight: '100vh',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      <EventPage eventData={event} />
    </div>
  );
}

export default App;