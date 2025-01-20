import styles from './CubeAssembly.module.scss';

export const CubeAssembly = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.assembly}>
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className={styles.item}>
            <div />
          </div>
        ))}
      </div>
    </div>
  );
}; 
