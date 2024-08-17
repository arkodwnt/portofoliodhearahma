import React from 'react';

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhearahma53@gmail.com" className={styles.contactBtn}>
            E-mail
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/dhea-rahmawati/">linkedin.com</a>
        </li>
      </ul>
    </footer>
  );
};
