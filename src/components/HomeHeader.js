import React from 'react';

const HomeHeader = ({userName, ipc, ...props}) => { 
  return (
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#F56C27',
        alignItems: 'center',
      }}>
      <span style={{fontSize: '1.2em'}}>Olá, {userName}</span>
      <span style={{fontSize: '1.5em'}}><strong>IPC: {ipc || 0}</strong></span>
    </div>
  );
};

export default HomeHeader;
