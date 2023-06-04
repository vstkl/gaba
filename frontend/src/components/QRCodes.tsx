import React, { useEffect, useState } from 'react';
import { fetchQRCodes } from '../api';

const QRCodes: React.FC = () => {
  const [qrCodes, setQRCodes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchQRCodes();
        setQRCodes(data);
      } catch (error) {
        console.error('Error fetching QR codes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>QR Codes</h2>
      <ul>
        {qrCodes.map((qrCode) => (
          <li key={qrCode.id}>
            <p>Location: {qrCode.location}</p>
            <img src={qrCode.qrCode} alt="QR Code" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QRCodes;
