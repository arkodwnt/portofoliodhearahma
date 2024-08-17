import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleDescription = () => setIsDescriptionExpanded(!isDescriptionExpanded);

  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} onClick={openModal} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.descriptionContainer}>
        <p className={`${styles.description} ${isDescriptionExpanded ? styles.expanded : ''}`}>{description}</p>
      </div>
      <div className={styles.bottomRow}>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        {description.length > 100 && (
          <button className={styles.learnMoreButton} onClick={toggleDescription}>
            {isDescriptionExpanded ? 'Show Less' : 'Learn More'}
          </button>
        )}
      </div>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};
