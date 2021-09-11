import React from 'react';

const buttonStyle = {
  border: '3px solid #F56C27',
  borderRadius: '0.5em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#F56C27',
  fontWeight: 'bold',
  margin: '0 10px 20px 10px',
  cursor: 'pointer'
};

const mediumButton = {
  ...buttonStyle,
  width: '100px',
  height: '100px'
}

const MenuItem = ({text, imgSource, ...props}) => {
  return (
    <div style={mediumButton}>
      <img src={imgSource} style={{width: '50px', height: '50px', marginBottom: '10px'}} />
      {text}
    </div>
  )
}

export default MenuItem;
