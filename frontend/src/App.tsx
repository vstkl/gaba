import React from 'react';
import QRCodes from './components/QRCodes';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>QR Code Viewer</h1>
      <QRCodes />
    </div>
  );
};

export default App;