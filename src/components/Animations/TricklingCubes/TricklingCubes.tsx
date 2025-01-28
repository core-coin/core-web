import styles from './TricklingCubes.module.scss';

const Cube = () => (
  <div className={styles['animate-tricklingcubes-cube']} />
);

const SwitchingCube = () => (
  <div className={styles['animate-tricklingcubes-switch-out']}>
    <div className={styles['animate-tricklingcubes-mover']}>
      <div className={styles['animate-tricklingcubes-switch-in']}>
        <Cube />
      </div>
    </div>
  </div>
);

export const TricklingCubes = () => {
  return (
    <div className={styles['animate-tricklingcubes-assembly']}>
      {Array.from({ length: 5 }, (_, i) => (
        <Cube key={`static-${i}`} />
      ))}
      {Array.from({ length: 5 }, (_, i) => (
        <SwitchingCube key={`switching-${i}`} />
      ))}
    </div>
  );
}; 
