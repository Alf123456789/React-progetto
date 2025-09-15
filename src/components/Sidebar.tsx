import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar bg-light p-3">
      <h3 className="h5 mb-3 text-secondary">Gallery Sidebar</h3>
      <div className="sidebar-item bg-white p-3 mb-2 rounded shadow-sm">
        <div className="image-placeholder bg-secondary bg-opacity-25 p-4 rounded text-center">
          <span className="text-muted">Image 1</span>
        </div>
      </div>
      <div className="sidebar-item bg-white p-3 mb-2 rounded shadow-sm">
        <div className="image-placeholder bg-info bg-opacity-25 p-4 rounded text-center">
          <span className="text-muted">Image 2</span>
        </div>
      </div>
      <div className="sidebar-item bg-white p-3 rounded shadow-sm">
        <div className="image-placeholder bg-success bg-opacity-25 p-4 rounded text-center">
          <span className="text-muted">Image 3</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;