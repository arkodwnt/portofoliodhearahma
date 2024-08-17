import React from 'react';
import CertificateCard from './CertificateCard';

const Certificate = () => {
  const containerStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  return (
    <div style={containerStyle}>
      <CertificateCard imageSrc="path_to_your_certificate_image1.jpg" title="Judul Gambar 1" />
      <CertificateCard imageSrc="path_to_your_certificate_image2.jpg" title="Judul Gambar 2" />
      <CertificateCard imageSrc="path_to_your_certificate_image3.jpg" title="Judul Gambar 3" />
    </div>
  );
};

export default Certificate;
