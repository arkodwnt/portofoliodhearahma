import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dherra</h1>
        <p className={styles.description}>Digital marketer | SEO Copywriter | Marketing Content Creator | Graphic Designer | Social Media Specialist | Photographer</p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhearahma53@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageUrl('hero/profil.png')} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
