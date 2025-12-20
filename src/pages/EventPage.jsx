import React from 'react';
import './EventPage.css';
import group4 from '../assets/Group 4.png';
import quizzinga from '../assets/quizzinga.png';

const EventPage = ({ eventData }) => {
  return (
    <div className="event-page">
      <div className="event-content-wrapper">
        {/* Top Header */}
        <div className="top-header">
          <div className="top-left-logo">
            <img src={group4} alt="Logo" style={{ width: '150px', height: 'auto' }} />
          </div>
          <div className="top-right-logo">
            {/* Audio Visualizer Animation */}
            <div className="sound-wave">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        {/* Geometric Overlay Lines */}
        <svg
          viewBox="0 0 1800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="geometry-overlay"
        >
          <path
            d="M493.298 16.9008H419.596L323.112 109.306L53.762 109.306L1.50002 155.508V318.5H102.004M493.298 16.9008V33.585H533.5V1.50001H493.298V16.9008ZM189.107 318.5L344.553 318.5V141.391"
            stroke="white"
            strokeWidth="3"
          />
          {/* Pinned Description using foreignObject */}
          <foreignObject x="40" y="145" width="280" height="170">
            <div className="tech-box-inner">
              <p>
                Where curiosity meets competition. Join us for mind-bending quizzes,
                challenging trivia, and intellectual battles that test your knowledge
                across technology, science, and beyond.
              </p>
            </div>
          </foreignObject>
        </svg>

        {/* Central Visual */}
        <div className="central-visual">
          <img
            src={quizzinga}
            alt="Quiz Tech Logo"
            className="black-planet"
          />
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <div className="event-number">01</div>
          <div>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 331 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                maxWidth: 'clamp(150px, 20vw, 250px)',
                display: 'block'
              }}
            >
              <path
                d="M25 41.5L18.5649 51.7204C17.3495 53.6508 17.5947 56.1591 19.161 57.8176L25 64M306.5 41.5L312.638 51.8585C313.747 53.7298 313.519 56.1035 312.074 57.7293L306.5 64"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M89.5 9.5H43.697C39.1473 9.5 34.8435 11.565 31.9965 15.1139L7.70103 45.4001C3.22404 50.981 3.31183 58.947 7.91074 64.4279L32.0039 93.1417C34.854 96.5383 39.0608 98.5 43.4947 98.5H89.5M89.5 9.5L90.4958 8.23268C93.3395 4.61332 97.6876 2.5 102.291 2.5H237.438C242.423 2.5 247.027 5.17138 249.5 9.5M89.5 9.5H249.5M249.5 9.5H282.825C287.074 9.5 291.124 11.3021 293.968 14.4588L321.246 44.7303C326.474 50.5326 326.375 59.3761 321.018 65.0598L293.941 93.7883C291.107 96.7953 287.158 98.5 283.025 98.5H249.5M89.5 98.5L90.4958 99.7673C93.3395 103.387 97.6876 105.5 102.291 105.5H237.438C242.423 105.5 247.027 102.829 249.5 98.5M89.5 98.5H249.5"
                stroke="white"
                strokeWidth="5"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Section: Text (Left) and Cards (Right) */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(1.5rem, 4vw, 2.5rem)',
          left: 'clamp(1.5rem, 5vw, 3rem)',
          right: 'clamp(1.5rem, 5vw, 3rem)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          zIndex: 20,
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Left Text Content */}
          <div className="text-content">
            <h3 className="tagline">SHIFT THE VISION</h3>
            <h1 className="event-title font-nebula">{eventData ? eventData.name : 'QUIZZINGA'}</h1>
          </div>

          {/* Bottom Right Cards */}
          <div>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 385 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                maxWidth: 'clamp(200px, 25vw, 385px)',
                height: 'auto'
              }}
            >
              <path
                d="M0.5 123.5V0.5H15.5621L26.9552 17.3785H61.9069L69.4379 0.5H84.5V123.5H0.5Z"
                stroke="white"
              />
              <path
                d="M100.5 123.5V0.5H115.562L126.955 17.3785H161.907L169.438 0.5H184.5V123.5H100.5Z"
                stroke="white"
              />
              <path
                d="M200.5 123.5V0.5H215.562L226.955 17.3785H261.907L269.438 0.5H284.5V123.5H200.5Z"
                stroke="white"
              />
              <path
                d="M300.5 123.5V0.5H315.562L326.955 17.3785H361.907L369.438 0.5H384.5V123.5H300.5Z"
                stroke="white"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventPage;