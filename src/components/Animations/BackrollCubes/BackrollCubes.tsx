import styles from './BackrollCubes.module.scss';

export const BackrollCubes = () => {
  return (
    <div className={styles['animate-backrollcubes-assembly']}>
      {Array.from({ length: 25 }, (_, i) => (
        <div key={i} className={styles['animate-backrollcubes-cube']}>
          {Array.from({ length: 6 }, (_, j) => (
            <div key={j} className={styles['animate-backrollcubes-cube__face']} />
          ))}
        </div>
      ))}
    </div>
  );
}; 
