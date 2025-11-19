import { useState } from 'react';
import styles from "./Icon.module.css";

function Icon({ image, imageClicked, alt }) {
  const [isClicked, click] = useState(false);

  const handleClick = () => {
    click(!isClicked);
  };

  return (
    <img
      src={isClicked ? imageClicked : image}
      className={styles.button}
      alt={alt}
      onClick={handleClick}
    />
  );
}

export default Icon;