import TransactionItem from "../TransactionItem/TransactionItem";

export default function TransactionHistory({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <TransactionItem {...item} />
        </li>
      ))}
    </ul>
  );
}
