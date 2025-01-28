import styles from './CubeShift.module.scss';

export const CubeShift = () => {
  return (
    <div className={`${styles['animate-cubeshift-logo']} ${styles['animate-cubeshift-animate']}`}>
      <div className={styles['animate-cubeshift-cube']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles['animate-cubeshift-cube']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}; 
