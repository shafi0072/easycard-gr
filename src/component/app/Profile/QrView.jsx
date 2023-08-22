import React from "react";
import { QRCode } from "react-qrcode-logo";
// import DottedQRCode from "../../app/Root/QrCodes/QrMain";

const QrView = ({ item, logo, value }) => {
  return (
    <div>
      <div
        // style={{
        //   width: `${item?.width}%`,
        // }}
        className={`mt-5 flex ${
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
          size={383}
          value={value}
        />
      </div>
    </div>
  );
};

export default QrView;
