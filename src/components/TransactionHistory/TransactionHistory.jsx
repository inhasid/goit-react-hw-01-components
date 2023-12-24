import styles from "./transactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    const transactionHistory = items.map(item => (
        <tr className={styles.table_row} key={item.id}>
            <td className={styles.table_data}>{item.type}</td>
            <td className={styles.table_data}>{item.amount}</td>
            <td className={styles.table_data}>{item.currency}</td>
        </tr>
    ));

    return (
        <table className={styles.transaction_history}>
            <thead className={styles.transact_thead}>
                <tr className={styles.table_row}>
                    <th className={styles.table_header}>Type</th>
                    <th className={styles.table_header}>Amount</th>
                    <th className={styles.table_header}>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.transact}>{transactionHistory}</tbody>

        </table>
    );
};

export default TransactionHistory;