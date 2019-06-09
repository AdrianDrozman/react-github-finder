import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return <div style={container}>
      <img src={spinner} alt="Loading" style={{width:'400px'}}/>
      </div>;
};

const container={
    width:'100%',
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

export default Spinner;
