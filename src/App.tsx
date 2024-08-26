import "./App.css";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import BusinessCapabilityTree from "./components/BusinessCapabilityTree/BusinessCapabilityTree";
import FilterSlider from "./components/FilterSlider/FilterSlider";
import useData from './hooks/useData';

function App() {
  const { filteredData, minSpend, maxSpend, handleFilterChange } = useData();

  return (
    <>
      <div className="main">
        <div className="main-sidebar">
          <h3 className="main-sidebar-title">Navigation</h3>
          <BusinessCapabilityTree />
          <div className="main-sidebar-divider"></div>
          <FilterSlider minSpend={minSpend} maxSpend={maxSpend} onChange={handleFilterChange}/>
        </div>
        <div className="main-divider"></div>
        <div className="main-content">
          <ApplicationList applications={filteredData}/>
        </div>
      </div>
    </>
  );
}

export default App;
