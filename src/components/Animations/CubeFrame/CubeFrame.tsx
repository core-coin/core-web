import styles from './CubeFrame.module.scss';

export const CubeFrame = () => {
  return (
    <div className={styles['animate-cubeframe-cubes']}>
      {Array.from({ length: 7 }, (_, i) => (
        <div key={i} className={styles['animate-cubeframe-cube']}>
          <div className={styles['animate-cubeframe-x']}></div>
          <div className={styles['animate-cubeframe-y']}></div>
          <div className={styles['animate-cubeframe-z']}></div>
        </div>
      ))}
    </div>
  );
}; 
