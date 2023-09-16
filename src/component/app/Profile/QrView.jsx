import React, { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
// import DottedQRCode from "../../app/Root/QrCodes/QrMain";

const QrView = ({ item, logo, value }) => {
  const [qrCodeWidth, setQRCodeWidth] = useState(383);
  console.log(item)

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
  console.log(value);
  return (
    <div>
      <div
        // style={{
        //   width: `${item?.width}%`,
        // }}
        className={`mt-5 flex  ${
          item?.align === "left"
            ? "justify-start"
            : item?.align === "center"
            ? "justify-center"
            : "justify-end"
        }`}
      >
        {/* <DottedQRCode value={item?.url} /> */}

        <QRCode
          fgColor="#0053A2"
          eyeRadius={3}
          qrStyle="dots"
          logoImage={logo}
          logoWidth={60}
          size={item.width}
          value={value}
        />
      </div>
    </div>
  );
};

export default QrView;
