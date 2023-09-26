import React from 'react';

const BackgroundDummy = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("/image-ui-itenary.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Sesuaikan tinggi sesuai kebutuhan Anda
  };

  return <div style={backgroundImageStyle}></div>;
}

export default BackgroundDummy;
