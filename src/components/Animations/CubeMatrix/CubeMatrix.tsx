import styles from './CubeMatrix.module.scss';

export const CubeMatrix = () => {
  return (
    <div className={styles['animate-cubematrix-container']}>
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i} className={styles['animate-cubematrix-cube']} />
      ))}
    </div>
  );
};
