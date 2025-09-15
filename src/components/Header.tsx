import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 shadow">
      <div className="container">
        <h1 className="h3 mb-0">Il Mio Sito React</h1>
        <p className="mb-0">Con Bootstrap e componenti responsive</p>
      </div>
    </header>
  );
};

export default Header;