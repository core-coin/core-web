import styles from './SwitchingCubes.module.scss';

const CubeFace = () => (
  <div className={styles['animate-switchingcubes-face']}>
    {Array.from({ length: 4 }, (_, i) => (
      <div key={i} className={styles['animate-switchingcubes-inner']} />
    ))}
  </div>
);

const Cube = () => (
  <div className={styles['animate-switchingcubes-cube']}>
    {Array.from({ length: 6 }, (_, i) => (
      <CubeFace key={i} />
    ))}
  </div>
);

export const SwitchingCubes = () => {
  return (
    <div className={styles['animate-switchingcubes-assembly']}>
      {Array.from({ length: 7 }, (_, i) => (
        <div key={i} className={styles['animate-switchingcubes-positioner']}>
          <Cube />
        </div>
      ))}
    </div>
  );
}; 
