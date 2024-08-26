import ApplicationItem from "./ApplicationItem/ApplicationItem";
import applications from '../../../data.json';
import './ApplicationList.css';

export default function ApplicationList() {
  return (
    <div className="application-list">
      {applications.map((app, index) => (
        <ApplicationItem 
          key={index} 
          name={app.name} 
          totalSpend={app.spend} 
        />
      ))}
    </div>
  );
}
