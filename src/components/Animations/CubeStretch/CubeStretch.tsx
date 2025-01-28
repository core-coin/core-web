import styles from './CubeStretch.module.scss';

export const CubeStretch = () => {
  return (
    <div className={styles['animate-cubestretch-wrapper']}>
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className={styles['animate-cubestretch-cube']}>
          <div className={styles['animate-cubestretch-vis']} />
        </div>
      ))}
    </div>
  );
}; 
