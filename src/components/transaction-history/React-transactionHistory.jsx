import styles from './React-transactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles['table-box']}>
      <thead>
        <tr>
          <th className={styles['table-head']}>Type</th>
          <th className={styles['table-head']}>Amount</th>
          <th className={styles['table-head']}>Currency</th>
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
