import styles from "./Image.module.css"

function Image({ src, use }) {

    var returnValue;
    
  if (use === "top") {
    returnValue = (
      <img src={src} className={styles.top} />
        );
    } else if (use === "bottom") {
        returnValue = (
          <img src={src} className={styles.bottom} />
        );
    } else if (use === "left") {
        returnValue = (
          <img src={src} className={styles.left} />
        );
    } else if (use === "right") {
        returnValue = (
          <img src={src} className={styles.right} />
        );
    } else {
        returnValue = (
          <img src={src} className={styles.mid} />
        );
    }

    return returnValue;
}

export default Image;