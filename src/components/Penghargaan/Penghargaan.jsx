import React, { useState } from 'react';
import styles from './Penghargaan.module.css';
import Sertif1 from '../../../assets/certificate/certificate1.jpg';
import Sertif2 from '../../../assets/certificate/certificate2.jpg';
import Sertif3 from '../../../assets/certificate/certificate3.jpg';
import Sertif4 from '../../../assets/certificate/certificate4.jpg';
import Sertif5 from '../../../assets/certificate/certificate5.jpg';
import Sertif6 from '../../../assets/certificate/certificate6.jpg';

export const Penghargaan = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
    setIsPopupActive(true);
  };

  const closePopup = () => {
    setIsPopupActive(false);
    setSelectedImage(null);
  };

  return (
    <section className={styles.container} id="achievement">
      <h2 className={styles.title}>ACHIEVEMENT</h2>
      <div className={styles.wrapcard}>
        <div className={styles.card} onClick={() => openPopup(Sertif1)}>
          <img src={Sertif1} alt="Certificate 1" />
        </div>
        <div className={styles.card} onClick={() => openPopup(Sertif2)}>
          <img src={Sertif2} alt="Certificate 1" />
        </div>
        <div className={styles.card} onClick={() => openPopup(Sertif3)}>
          <img src={Sertif3} alt="Certificate 1" />
        </div>
        <div className={styles.card} onClick={() => openPopup(Sertif4)}>
          <img src={Sertif4} alt="Certificate 1" />
        </div>
        <div className={styles.card} onClick={() => openPopup(Sertif5)}>
          <img src={Sertif5} alt="Certificate 1" />
        </div>
        <div className={styles.card} onClick={() => openPopup(Sertif6)}>
          <img src={Sertif6} alt="Certificate 1" />
        </div>
      </div>

      {isPopupActive && (
        <div className={`${styles.popup} ${isPopupActive ? styles.active : ''}`}>
          <img src={selectedImage} alt="Enlarged View" />
          <button className={styles.closeButton} onClick={closePopup}>
            X
          </button>
        </div>
      )}
    </section>
  );
};
