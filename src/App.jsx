import FlavonoidsTable from "./components/FlavonoidsTable";
import GammaTable from "./components/GammaTable";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <div>
        <Header />
      </div>

      {/* Main Content Container */}
      <div className="container">
        {/* Flavonoids Table Section */}
        <div className="flavoTable">
          {/* Table Title for Flavonoids Table */}
          <div className="table-title">Flavonoids Table</div>
          {/* FlavonoidsTable Component */}
          <FlavonoidsTable />
        </div>

        {/* Gamma Table Section */}
        <div className="gammaTable">
          {/* Table Title for Gamma Table */}
          <div className="table-title">Gamma Table</div>
          {/* GammaTable Component */}
          <GammaTable />
        </div>
      </div>
    </div>
  );
}

export default App;
