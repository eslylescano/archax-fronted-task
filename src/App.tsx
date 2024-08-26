import "./App.css";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import BusinessCapabilityTree from "./components/BusinessCapabilityTree/BusinessCapabilityTree";
import FilterSlider from "./components/FilterSlider/FilterSlider";

function App() {
  return (
    <>
      <div className="App">
        <div className="main-content">
          <div className="sidebar">
            <BusinessCapabilityTree />
            <FilterSlider />
          </div>
          <div className="content">
            <ApplicationList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
