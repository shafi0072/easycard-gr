import React from "react";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

const Pdf = ({item,email,bgColor,color,design}) => {
  const filename = `${email?.slice(0, 6)}-document.pdf`;

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = `${item?.pdf}`;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className={`${!item?.pdf ?  'hidden' : 'block mt-5' } `}>
      {item?.pdf  &&(
        <div className="mt-5">
         
          <div className="flex gap-3 items-center">
            <div style={{ backgroundColor: bgColor }} className={`flex justify-center items-center ${design === "pro"?
             "w-[42px] h-[42px]":"w-[50px] h-[50px]"} p-2 rounded-full`}>
              <PictureAsPdfOutlinedIcon sx={{ color: color }} />
            </div>
            <button onClick={downloadPdf} title="click to download pdf">
              {" "}
              <h2 className="text-xl">See My Experience</h2>
            </button>
          </div>
        </div>
      )}
      </div>

    </>
  );
};

export default Pdf;
