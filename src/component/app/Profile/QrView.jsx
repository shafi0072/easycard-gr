import React, { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
// import DottedQRCode from "../../app/Root/QrCodes/QrMain";

const QrView = ({ item, logo, value, data }) => {
  const [qrCodeWidth, setQRCodeWidth] = useState(383);
  console.log(item);

  useEffect(() => {
    const breakpoint = 768;

    const handleResize = () => {
      const newWidth =
        window.innerWidth < breakpoint ? window.innerWidth - 30 : 383; //
      setQRCodeWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      
      <div
        
        className="mt-5"
      >
        <QRCode
          {...{
            qrStyle: data?.qrStyle,
            fgColor: data?.fgColor,
            ecLevel: "M",
            value: value,
            size: data?.QrSize,
            bgColor: data?.bgColor,
            logoImage: data?.logo,
            logoPadding: 5,
            logoWidth: data?.logoSize,
            eyeRadius: [
              {
                outer:
                  (data?.outesEyeShape === "square" && 0) ||
                  (data?.outesEyeShape === "dots" && 50) ||
                  (data?.outesEyeShape === "round" && 6) ||
                  (data?.outesEyeShape === "flower" && [12, 12, 0, 16]) ||
                  (data?.outesEyeShape === "leaf" && [50, 0, 50, 0]),
                inner:
                  (data?.innerEyeShape === "square" && 0) ||
                  (data?.innerEyeShape === "dots" && 50) ||
                  (data?.innerEyeShape === "round" && 6) ||
                  (data?.innerEyeShape === "flower" && [12, 12, 0, 16]) ||
                  (data?.innerEyeShape === "leaf" && [50, 0, 50, 0]),
              },
              {
                outer:
                  (data?.outesEyeShape === "square" && 0) ||
                  (data?.outesEyeShape === "dots" && 50) ||
                  (data?.outesEyeShape === "round" && 6) ||
                  (data?.outesEyeShape === "flower" && [12, 12, 0, 16]) ||
                  (data?.outesEyeShape === "leaf" && [50, 0, 50, 0]),
                inner:
                  (data?.innerEyeShape === "square" && 0) ||
                  (data?.innerEyeShape === "dots" && 50) ||
                  (data?.innerEyeShape === "round" && 6) ||
                  (data?.innerEyeShape === "flower" && [12, 12, 0, 16]) ||
                  (data?.innerEyeShape === "leaf" && [50, 0, 50, 0]),
              },
              {
                outer:
                  (data?.outesEyeShape === "square" && 0) ||
                  (data?.outesEyeShape === "dots" && 50) ||
                  (data?.outesEyeShape === "round" && 6) ||
                  (data?.outesEyeShape === "flower" && [12, 12, 0, 16]) ||
                  (data?.outesEyeShape === "leaf" && [50, 0, 50, 0]),
                inner:
                  (data?.innerEyeShape === "square" && 0) ||
                  (data?.innerEyeShape === "dots" && 50) ||
                  (data?.innerEyeShape === "round" && 6) ||
                  (data?.innerEyeShape === "flower" && [12, 12, 0, 16]) ||
                  (data?.innerEyeShape === "leaf" && [50, 0, 50, 0]),
              },
            ],
            eyeColor: [
              // build eyeColor manually
              {
                outer: data?.outerEyeColor,
                inner: data?.innerEyeColor,
              },
              {
                outer: data?.outerEyeColor,
                inner: data?.innerEyeColor,
              },
              {
                outer: data?.outerEyeColor,
                inner: data?.innerEyeColor,
              },
            ],
          }}
        />
       
      </div>
    </div>
  );
};

export default QrView;
