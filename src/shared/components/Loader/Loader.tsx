import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{ width: '100vw', height: '80vh' }}
        wrapperClass="loader"
        visible={true}
      />
    </div>
  );
};

export default Loader;
