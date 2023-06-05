import React, { useEffect, useState } from 'react';
import { fetchQRCodes } from '../api';

const QRCodes: React.FC = () => {
  const [qrCodes, setQRCodes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchQRCodes();
        return data;
      } catch (error) {
        console.error('Error fetching QR codes:', error);
      }
    };

    fetchData();
  }, []);

  const decodeBase64Image = (base64Image: string) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return null;

    const image = new Image();
    image.src = base64Image;

    context.drawImage(image, 0, 0);

    const dataUrl = canvas.toDataURL('image/png');
    return dataUrl;
  };

  return (
    <div>
      <h2>QR Codes</h2>
      <ul>
        {qrCodes.map((qrCode) => (
          <li key={qrCode.id}>
            <p>Location: {qrCode.location}</p>
            <p>{decodeBase64Image(qrCode.image)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QRCodes;
