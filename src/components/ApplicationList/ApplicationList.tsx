import React from 'react';
import ApplicationItem from "./ApplicationItem/ApplicationItem";
import './ApplicationList.css';
import { Application } from '../../types/types';

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
