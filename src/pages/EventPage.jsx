
import React from 'react';
import './EventPage.css';
import group4 from '../assets/Group 4.png';

const EventPage = ({ eventData }) => {
  return (
    <div className="event-page">

      <div className="event-content-wrapper">
        {/* Top Header */}
        <div className="top-header">
          <div className="top-left-logo">
            <img src={group4} alt="Logo" style={{ width: '80px', height: 'auto' }} />
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
        <svg className="geometry-overlay" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          {/* Left Side Tech Box */}
          <g>
            {/* The Square Box (Connection Point) */}
            <rect x="580" y="340" width="20" height="20" stroke="white" strokeWidth="2" fill="none" />

            {/* Main Path: Square -> Horiz -> Diag -> Horiz -> Diag -> Vert -> Horiz(Gap)Horiz -> Vert */}
            <path d="M 580 350 H 500 L 450 400 H 200 L 150 450 V 750 H 250 M 350 750 H 450 V 650" stroke="white" strokeWidth="2" fill="none" />
          </g>
        </svg>

        {/* Central Visual */}
        <div className="central-visual">
          <img
            src="https://studentsgymkhana.lnmiit.ac.in/Gymkhana_website/CLUBS/scitech/images/quiz.ico"
            alt="Event Theme"
            className="black-planet"
          />
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <div className="event-number">01</div>
          <div className="control-pill">
            <span>&#10094;</span>
            <span>&#10095;</span>
          </div>
        </div>

        {/* Bottom Section: Text (Left) and Cards (Right) */}
        <div className="absolute bottom-10 left-12 right-12 flex flex-row items-end justify-between z-20">
          {/* Left Text Content */}
          <div className="text-content">
            <h3 className="tagline">SHIFT THE VISION</h3>
            <h1 className="event-title font-nebula">{eventData ? eventData.name : 'QUIZZINGA'}</h1>
          </div>

          {/* Bottom Right Cards */}
          <div className="flex flex-row gap-4 ">
            <div className="card-outline"></div>
            <div className="card-outline"></div>
            <div className="card-outline"></div>
            <div className="card-outline"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventPage;