
import './BusinessCapabilityTreeItem.css';
interface BusinessCapabilityTreeItemProps {
  id: string;
  label: string;
  expanded: boolean;
  children?: React.ReactNode;
  onToggle: (id: string) => void;
}

const BusinessCapabilityTreeItem: React.FC<BusinessCapabilityTreeItemProps> = ({ id, label, expanded, children, onToggle }) => {
  return (
    <li>
      <span
        className={`caret ${expanded ? 'caret-down' : ''}`}
        onClick={() => onToggle(id)}
      >
        {label}
      </span>
      <ul className={`nested ${expanded ? 'active' : ''}`}>
        {children}
      </ul>
    </li>
  );
};

export default BusinessCapabilityTreeItem;
