import applications from '../../../data.json';
import ApplicationItem from "./ApplicationItem/ApplicationItem";
import './ApplicationList.css';

interface Application {
  name: string;
  spend: number;
}

const ApplicationList: React.FC = () => {
  return (
    <div className="application-list">
      {applications.map((app: Application, index: number) => (
        <ApplicationItem 
          key={index} 
          name={app.name} 
          totalSpend={app.spend} 
        />
      ))}
    </div>
  );
}

export default ApplicationList;
