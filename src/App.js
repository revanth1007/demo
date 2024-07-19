import React from 'react';

function App() {
  const circleStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '2px solid black',
    position: 'relative',
    overflow: 'hidden',
  };

  const halfCircleStyle = {
    width: '100%',
    height: '50%',
    borderBottom: '2px solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  const thirdCircleStyle = {
    flex: 1,
    border: '2px solid black',
  };

  const bottonSecound = {
    thirdCircleStyle,
    height: "50%",
    width: '100%',
    border: '2px solid black'
  }


  return (
    <div style={circleStyle}>
      <div style={halfCircleStyle}></div>
      <div style={halfCircleStyle}>
        <div style={thirdCircleStyle}></div>
        <div style={thirdCircleStyle}>
          <div ></div>
          <div ></div>
        </div>
        <div style={thirdCircleStyle}></div>
      </div>
    </div>
  );
}

export default App;
