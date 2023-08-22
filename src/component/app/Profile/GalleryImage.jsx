import React from "react";

const GalleryImage = ({ item }) => {
  console.log(item);
  // const saveImage =
  //   newFeilds?.fields?.galary?.length > 0
  //     ? newFeilds?.fields?.galary
  //     : userCardData?.fields?.galary?.length > 0
  //     ? userCardData?.fields?.galary
  //     : [];
  return (
    <div>
      {item?.image?.length > 0 && (
        <>
         
          <div className="grid grid-cols-12 gap-[10px]">
            {item?.image
              ?.toReversed()
              ?.slice(0, 10)
              ?.map((item, index) => (
                <div key={index} className="col-span-6">
                  <img
                    src={item}
                    className="w-full h-[100px] object-cover rounded"
                    alt=""
                  />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryImage;
