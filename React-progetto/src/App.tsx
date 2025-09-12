import React from "react";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="page">
      <div className="container" role="region" aria-label="Wireframe demo">
        <aside className="sidebar" aria-label="Sidebar">
          <div className="sidebar-item">Image 1</div>
          <div className="sidebar-item">Image 2</div>
          <div className="sidebar-item">Image 3</div>
        </aside>

        <main className="main" aria-label="Main content">
          <div className="fake-img">BIG IMAGE</div>
        </main>

        <section className="bottom" aria-label="Bottom thumbnails">
          <div className="box">Image 1</div>
          <div className="box">Image 2</div>
          <div className="box">Image 3</div>
        </section>
      </div>
    </div>
  );
}

export default App;
