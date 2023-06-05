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
            {qrCode.image && <img src={`data:image/png;base64, ${qrCode.image}`} alt="QR Code" />}
            {qrCode.reviews && (
              <ul>
                {qrCode.reviews.split('|').map((review: string, index: number) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QRCodes;
