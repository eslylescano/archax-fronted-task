import React from 'react';
import ApplicationItem from "./ApplicationItem/ApplicationItem";
import './ApplicationList.css';

interface Application {
  id: string;
  name: string;
  spend: number;
  BCAP1?: string;
  BCAP2?: string;
  BCAP3?: string;
}

interface ApplicationListProps {
  applications: Application[];
}

const ApplicationList: React.FC<ApplicationListProps> = ({ applications }) => {
  return (
    <div className="application-list">
      {applications.map((app) => (
        <ApplicationItem 
          key={app.id} 
          name={app.name} 
          totalSpend={app.spend} 
        />
      ))}
    </div>
  );
}

export default ApplicationList;
