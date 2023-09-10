import React from "react";

const Image = ({ item }) => {
  
  return (
    <>
      {item?.image && (
        <div
          className={`
            my-5 w-full  relative h-[300px] flex
            ${
              item?.align === "left"
                ? "justify-start"
                : item?.align === "center"
                ? "justify-center"
                : "justify-end"
            }
            `}
        >
          
          <img
            className="h-[250px] object-cover rounded"
            src={item?.image}
            alt=""
            style={{
              width: `${item?.width}%`,
            }}
          />
          
        </div>
      )}
    </>
  );
};

export default Image;
