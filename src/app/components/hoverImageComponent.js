"use client";

import React, { useState } from "react";
import styles from "../../styles/HoverImageComponent.module.css";

const HoverImageComponent = () => {
  const [hoveredImage, setHoveredImage] = useState("/images/fitnes1.png"); // Default image

  const handleMouseEnter = (imageName) => {
    setHoveredImage(imageName);
  };

  const handleMouseLeave = () => {
    setHoveredImage("/images/fitnes1.png"); // Reset to default image
  };

  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${hoveredImage})`,
        }}
      >
        {/* Buttons at the bottom */}
        <div className={styles.overlay}>
          <div
            className={styles.button}
            onMouseEnter={() => handleMouseEnter("/images/fitnes2.png")}
            onMouseLeave={handleMouseLeave}
          >
            <h3>Signature Classes</h3>
            <p>New and Unlimited Classes exclusive to Equinox. Designed for the individual.</p>
          </div>
          <div
            className={styles.button}
            onMouseEnter={() => handleMouseEnter("/images/fitnes3.png")}
            onMouseLeave={handleMouseLeave}
          >
            <h3>Personal Training</h3>
            <p>Precision-backed 1:1 Personal Training with EFTI-certified coaches.</p>
          </div>
          <div
            className={styles.button}
            onMouseEnter={() => handleMouseEnter("/images/fitnes1.png")}
            onMouseLeave={handleMouseLeave}
          >
            <h3>Authentic Pilates</h3>
            <p>Studio Pilates sessions with 1:1 instruction to tone your core.  nmnnnnnmnm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverImageComponent;
