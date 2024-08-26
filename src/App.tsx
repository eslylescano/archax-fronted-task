import "./App.css";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import BusinessCapabilityTree from "./components/BusinessCapabilityTree/BusinessCapabilityTree";
import FilterSlider from "./components/FilterSlider/FilterSlider";

function App() {
  return (
    <>
        <div className="main">
          <div className="main-sidebar">
            <h3 className="main-sidebar-title">Navigation</h3>
            <BusinessCapabilityTree />
            <div className="main-sidebar-divider"></div>
            <FilterSlider />
          </div>
          <div className="main-divider"></div>
          <div className="main-content">
            <ApplicationList />
          </div>
        </div>
    </>
  );
}

export default App;
