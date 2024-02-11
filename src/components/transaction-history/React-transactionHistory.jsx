import styles from './React-transactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.tableBox}>
      <thead>
        <tr>
          <th className={styles.tableHead}>Type</th>
          <th className={styles.tableHead}>Amount</th>
          <th className={styles.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
