import './ApplicationItem.css';

export default function ApplicationItem({ name = "Application 1", totalSpend = 0 }) {
  return (
    <div className="application-item">
      <p className="application-item-name">{name}</p>
      <p>Total spend: ${totalSpend.toLocaleString()}</p>
    </div>
  );
}
