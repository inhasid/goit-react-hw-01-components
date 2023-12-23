import styles from "./statistics.module.css";

const Statistics = ({ title, stats }) => {
    const elements = stats.map(stat => (
        <li className={styles.item} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
    ));

    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.list}>{elements}</ul>
        </section>
    );
};

export default Statistics;