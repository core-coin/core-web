import styles from './TunnelBall.module.scss';

export const TunnelBall = () => {
  return (
    <div className={styles['animate-tunnelball-wrapper']}>
      <div className={styles['animate-tunnelball-container']}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={styles['animate-tunnelball-wall']}>
            <div className={styles['animate-tunnelball-surface']}></div>
            <div className={styles['animate-tunnelball-surface']}></div>
            <div className={styles['animate-tunnelball-left']}></div>
            <div className={styles['animate-tunnelball-top']}></div>
          </div>
        ))}
        <div className={styles['animate-tunnelball-ball-container']}>
          <div className={styles['animate-tunnelball-ball']}></div>
        </div>
      </div>
    </div>
  );
}; 
