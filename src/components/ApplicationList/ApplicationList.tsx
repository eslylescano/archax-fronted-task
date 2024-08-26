import ApplicationItem from "./ApplicationItem/ApplicationItem";
import './ApplicationList.css';
export default function ApplicationList() {
  return (
    <div className="application-list">
      <ApplicationItem/>
      <ApplicationItem/>
      <ApplicationItem/>
      <ApplicationItem/>
    </div>
  )
}
