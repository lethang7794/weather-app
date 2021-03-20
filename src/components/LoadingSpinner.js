import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoadingSpinner = () => {
  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={styles}>
      <Loader type='ThreeDots' color='white' height={80} width={80} />
    </div>
  );
};

export default LoadingSpinner;
