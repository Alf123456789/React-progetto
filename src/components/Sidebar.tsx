import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar bg-light p-3">
      <h3 className="h5 mb-3 text-secondary">Gallery Sidebar</h3>

      {/* Immagine 1 */}
      <div className="sidebar-item bg-white p-2 mb-2 rounded shadow-sm">
        <img
          src="/images/Natura1.jpg"
          alt="Natura 1"
          className="img-fluid rounded"
        />
      </div>

      {/* Immagine 2 */}
      <div className="sidebar-item bg-white p-2 mb-2 rounded shadow-sm">
        <img
          src="/images/Natura2.jpg"
          alt="Natura 2"
          className="img-fluid rounded"
        />
      </div>

      {/* Immagine 3 */}
      <div className="sidebar-item bg-white p-2 rounded shadow-sm">
        <img
          src="/images/Natura3.jpg"
          alt="Natura 3"
          className="img-fluid rounded"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
