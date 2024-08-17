import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl('about/profil.jpg')} alt="Me sitting with a laptop" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Dhea Rahmawati</h3>
              <br />
              <p>
                Hallo, I'm Dhea Rahmawati. Recent graduate with degree in marketing management with GPA 3.87, Cumlaude predicate at Politeknik App Jakarta. Have skills in marketing, social media marketing, public relations, digital
                marketing, copywriting, and have good verbal and written communication skills. Have an interest and career in the field of social media marketing and digital marketing. I'm quick learner who always seeking to learn more and
                develop skill. I'm open to new experiences and ready to adapt to the dynamic world of work to enchance the company reputation with attitude and inovations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
