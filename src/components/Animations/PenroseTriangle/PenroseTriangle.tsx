import styles from './PenroseTriangle.module.scss';

export const PenroseTriangle = () => {
  return (
    <div className={styles['animate-penrosetriangle-container']}>
      <div className={styles['animate-penrosetriangle-platform']}>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className={styles['animate-penrosetriangle-cube']} />
        ))}
      </div>
    </div>
  );
}; 
