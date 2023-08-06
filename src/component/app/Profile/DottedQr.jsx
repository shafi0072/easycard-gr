import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

const DottedQRCode = ({ value, size, level, includeMargin, pattern }) => {
  const qrCodeRef = useRef(null);

  useEffect(() => {
    generateQRCode();
  }, [value, size, level, includeMargin, pattern]);

  const generateQRCode = () => {
    const options = {
      width: size,
      height: size,
      margin: includeMargin ? 4 : 0,
      errorCorrectionLevel: level,
    };

    switch (pattern) {
      case "Square":
        options.toSJISFunc = (codePoint) => {
          return String.fromCharCode(codePoint & 0xff);
        };
        break;
      case "Dots":
        options.toSJISFunc = (codePoint) => {
          return String.fromCharCode(codePoint & 0x01);
        };
        break;
      case "Rounded":
        options.toSJISFunc = (codePoint) => {
          return String.fromCharCode(codePoint & 0xff) + String.fromCharCode((codePoint >> 8) & 0xff);
        };
        break;
      case "Diamond":
        options.toSJISFunc = (codePoint) => {
          return String.fromCharCode(codePoint & 0x01) + String.fromCharCode((codePoint >> 8) & 0x01);
        };
        break;
      default:
        break;
    }

    const qrCanvas = qrCodeRef.current;
    QRCode.toCanvas(qrCanvas, value, options, (error) => {
      if (error) console.error(error);
    });
  };

  return <canvas ref={qrCodeRef} />;
};

export default DottedQRCode;
