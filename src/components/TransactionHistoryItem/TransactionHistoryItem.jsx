export default function TransactionHistoryItem({ transaction }) {
  const { type, amount, currency } = transaction;

  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
