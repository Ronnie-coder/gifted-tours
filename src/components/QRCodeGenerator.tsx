// src/components/QRCodeGenerator.tsx
import React from 'react';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import { Share2 } from 'lucide-react';
import styles from './QRCodeGenerator.module.scss';

const QRCodeGenerator = () => {
  const clientName = "Gifted Tours";
  const phoneNumber = "+27762662143";
  const email = "giftedtourz@gmail.com";
  const website = "https://www.giftedtours.co.za/"; 
  const whatsappNumber = "+27810278801";

  const vCard = `BEGIN:VCARD\nVERSION:3.0\nN:Tours;Gifted;;;\nFN:${clientName}\nTEL;TYPE=CELL:${phoneNumber}\nEMAIL:${email}\nURL:${website}\nEND:VCARD`;

  const handleShare = () => {
    const shareData = {
      title: 'Gifted Tours Contact',
      text: `Here is the contact information for Gifted Tours:\nPhone: ${phoneNumber}\nWebsite: ${website}\n\nOr, start a chat on WhatsApp: https://wa.me/${whatsappNumber}`,
      url: website,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      // Fallback for browsers that don't support the Share API
      alert("Sharing is not supported on this browser. Please copy the details manually.");
    }
  };

  return (
    <div className={styles.qrContainer}>
      <Image 
        src="/assets/images/logo.jpg" 
        alt="Gifted Tours Logo" 
        width={60} height={60} 
        className={styles.logo}
      />
      <h3>Scan to Save Contact</h3>
      <div className={styles.qrCode}>
        <QRCodeSVG value={vCard} size={160} bgColor={"#ffffff"} fgColor={"#000000"} level={"H"} includeMargin={true}/>
      </div>
      <p>Point your camera at the code to instantly save our details.</p>
      
      <button className={styles.shareButton} onClick={handleShare}>
        <Share2 size={16} />
        Share Contact
      </button>
    </div>
  );
};

export default QRCodeGenerator;