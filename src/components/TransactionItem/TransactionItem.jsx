export default function TransactionItem({ type, amount, currency }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{type}</th>
          <th>{amount}</th>
          <th>{currency}</th>
        </tr>
      </thead>
    </table>
  );
}
