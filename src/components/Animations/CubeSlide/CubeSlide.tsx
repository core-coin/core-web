import styles from './CubeSlide.module.scss';

export const CubeSlide = () => {
  return (
    <div className={styles['animate-cubeslide-container']}>
      {[1, 2, 3].map((index) => (
        <div key={index} className={styles['animate-cubeslide-holder']}>
          <div className={styles['animate-cubeslide-box']}></div>
        </div>
      ))}
    </div>
  );
}; 
