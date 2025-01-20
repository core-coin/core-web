import { useEffect, useRef } from 'react';
import styles from './CubeOrbit.module.scss';

export const CubeOrbit = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return;

    const cubes = container.querySelectorAll(`.${styles['animate-cubeorbit-cube']}`);
    const increase = (Math.PI * 2) / cubes.length;
    let angle = 0;

    cubes.forEach((cube) => {
      const x = 200 * Math.cos(angle) + 200;
      const y = 200 * Math.sin(angle) + 200;
      (cube as HTMLElement).style.left = `${x}px`;
      (cube as HTMLElement).style.top = `${y}px`;
      angle += increase;
    });
  }, []);

  return (
    <div className={styles['animate-cubeorbit-wrapper']} ref={wrapperRef}>
      {Array.from({ length: 8 }, (_, i) => (
        <ul key={i} className={styles['animate-cubeorbit-cube']}>
          {Array.from({ length: 6 }, (_, j) => (
            <li key={j} className={styles['animate-cubeorbit-face']} />
          ))}
        </ul>
      ))}
    </div>
  );
};
