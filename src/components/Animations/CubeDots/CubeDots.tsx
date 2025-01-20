import styles from './CubeDots.module.scss';

export const CubeDots = () => {
	return (
		<div className={styles['animate-cubedots-wrapper']}>
			<div className={styles['animate-cubedots-content']}>
				<div className={styles['animate-cubedots-cube']}>
					<div className={`${styles['animate-cubedots-side']} ${styles['animate-cubedots-side--front']}`}></div>
					<div className={`${styles['animate-cubedots-side']} ${styles['animate-cubedots-side--right']}`}></div>
					<div className={`${styles['animate-cubedots-side']} ${styles['animate-cubedots-side--back']}`}></div>
					<div className={`${styles['animate-cubedots-side']} ${styles['animate-cubedots-side--left']}`}></div>
					<div className={`${styles['animate-cubedots-side']} ${styles['animate-cubedots-side--top']}`}></div>
					<div className={`${styles['animate-cubedots-side']} ${styles['animate-cubedots-side--bottom']}`}></div>
				</div>
				<div className={styles['animate-cubedots-shadow']}></div>
			</div>
		</div>
	);
};
