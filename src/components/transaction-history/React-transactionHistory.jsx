import './React-transactionHistory.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className="table-box">
      <thead>
        <tr>
          <th className="table-head">Type</th>
          <th className="table-head">Amount</th>
          <th className="table-head">Currency</th>
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
