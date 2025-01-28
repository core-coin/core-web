import styles from './CubeGradient.module.scss';

export const CubeGradient = () => {
  return (
    <div className={styles['animate-cubegradient-cube']}>
      <div className={styles['animate-cubegradient-top']}></div>
      <div className={styles['animate-cubegradient-bottom']}></div>
      <div className={styles['animate-cubegradient-sides']}>
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={styles['animate-cubegradient-side']}
            style={{ '--animate-cubegradient-i': index } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};
