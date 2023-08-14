import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';


function SecondPage() {
  const contentStyles = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '42px',
    lineHeight: '1.1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    fontFamily: 'Inter',
  };

  const videoContainerStyles = {
display: "flex",
 justifyContent : "center",
 alignItems : 'center',
  };


  const timerContainerStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const timerTextStyles = {
    fontSize: '18px',
    fontWeight: 'normal',
    marginBottom: '10px',
  };

  const timerValueStyles = {
    fontSize: '36px',
    fontWeight: 'bold',
  };

  const [countdown, setCountdown] = useState(43212); // Total seconds: 12 hours, 00 minutes, 12 seconds
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        setIsTimerCompleted(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  // useEffect(() => {
  //   if (isTimerCompleted) {
  //     loadInlineWidget({
  //       url: 'https://calendly.com/your-calendly-link', // Replace with your Calendly link
  //       parentElement: document.getElementById('calendly-container'), // Replace with the appropriate container
  //     });
  //   }
  // }, [isTimerCompleted]);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return (
    <div>
      <main>
      <div style={contentStyles}>
          <p>
            <strong>How To Make $10,000+ Per Month Using a
              <br />
              NEW Simple Skill Called "TikTok Organic"
              <br />
              WITHOUT Upfront Costs, Ads, Inventory, Or
              <br />
              Showing Your Face...
            </strong>
          </p>
        </div>
        {/* Embed Vimeo video */}
         {/* Video Player */}
         <div style={videoContainerStyles}>
  <ReactPlayer
    url="https://www.example.com/dummy-video.mp4"
    width="840px"
    height="420px"
    controls
    playing
  />
</div>
        {/* Countdown Timer */}
        <div style={timerContainerStyles}>
          <p style={timerTextStyles}>Next Step Will Unlock When Timer Hits Zero</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px' }}>
              <div style={timerValueStyles}>{hours}</div>
              <div>HOUR</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px' }}>
              <div style={timerValueStyles}>{minutes}</div>
              <div>MINUTE</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px' }}>
              <div style={timerValueStyles}>{seconds}</div>
              <div>SECONDS</div>
            </div>
          </div>
        </div>
        {/* Calendly Container */}
        <div id="calendly-container" style={{ marginTop: '40px', textAlign: 'center' }}></div>
      </main>
    </div>
  );
}

export default SecondPage;
