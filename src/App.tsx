import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ThumbnailGallery from "./components/ThumbnailGallery";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <Header />

      {/* Layout con sidebar e contenuto principale */}
      <div className="container-fluid pt-3 main-content">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <div className="d-flex flex-column h-100">
              <MainContent />
              {/* Gallery in basso */}
              <ThumbnailGallery />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default App;
