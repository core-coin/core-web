import styles from './CubeExpand.module.scss';

const Block = () => (
  <div className={styles['animate-cubeexpand-scale3d']}>
    <div className={styles['animate-cubeexpand-reverse']}>
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className={styles['animate-cubeexpand-face']} />
      ))}
    </div>
  </div>
);

export const CubeExpand = () => {
  return (
    <div className={styles['animate-cubeexpand-wrapper']}>
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className={styles['animate-cubeexpand-group']}>
          <Block />
          <div className={styles['animate-cubeexpand-expand']}>
            <Block />
          </div>
        </div>
      ))}
    </div>
  );
};
