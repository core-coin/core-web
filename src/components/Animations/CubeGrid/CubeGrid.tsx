import styles from './CubeGrid.module.scss';

const SmallCube = () => (
  <div className={styles['animate-cubegrid-cube']}>
    <div className={styles['animate-cubegrid-front']} />
    <div className={styles['animate-cubegrid-left']} />
    <div className={styles['animate-cubegrid-top']} />
  </div>
);

const CubeSection = () => (
  <section className={styles['animate-cubegrid-container']}>
    {Array.from({ length: 27 }, (_, i) => (
      <SmallCube key={i} />
    ))}
  </section>
);

export const CubeGrid = () => {
  return (
    <>
      <CubeSection />
      <CubeSection />
    </>
  );
};
