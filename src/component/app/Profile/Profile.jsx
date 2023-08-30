import React, { useEffect, useState } from "react";
import MobileLoading from "../../core/MobileLoading";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaTiktok } from "react-icons/fa";
import FieldData from "./FieldData";
import DottedQRCode from "./DottedQr";
import Content from "./Content";
import Image from "./Image";
import GalleryImage from "./GalleryImage";
import YouTube from "./Video";
import Pdf from "./Pdf";
import DateView from "./DateView";
import QrView from "./QrView";
import Video from "./Video";
const Profile = ({ id }) => {
  const [datas, setData] = useState(null);
  console.log(datas);
  const [ip, setIp] = useState({});
  const [device, setDevice] = useState({});
  console.log("ip:", ip, "divice:", device);
  useEffect(() => {
    fetch(`https://business-card-backend-2.vercel.app/cards/visit/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [id, datas]);
  // console.log(datas);
  const color = "#000";

  useEffect(() => {
    async function fetchIPAddress() {
      try {
        const response = await fetch("https://ipinfo.io?token=705202d8ba22fe");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching IP address:", error);
        return null;
      }
    }

    // Call the function to get IP address information
    fetchIPAddress().then((ipInfo) => {
      if (ipInfo) {
        setIp(ipInfo);
        // Now you can use the ipInfo object to access IP-related information
      }
    });
  }, []);

  useEffect(() => {
    if (id) {
      fetch(
        `https://business-card-backend-2.vercel.app/cards/anylatics/${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            view: 1,
            ipAddress: ip.ip,
            type: "view",
            device: device,
            country: ip.country,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  }, [id, ip, device]);

  useEffect(() => {
    if (typeof window === undefined) {
      return null;
    } else {
      const userAgent = navigator.userAgent;

      // Get the browser's name and version
      const browserName = navigator.appName;
      const browserVersion = navigator.appVersion;

      // Get the operating system name and version
      const osName = navigator.platform;

      // Display the gathered information
      console.log("User Agent:", userAgent);
      console.log("Browser Name:", browserName);
      console.log("Browser Version:", browserVersion);
      console.log("Operating System:", osName);
      setDevice(osName);
    }
  }, []);

  return (
    <>
      {!datas && <MobileLoading />}
      {datas && (
        <div className="">
          <div className="max-w-[500px] w-full mx-auto px-3">
            {datas?.display?.desgine === "flat" && (
              <>
                <div
                  className="h-[400px] "
                  style={{ background: datas?.display?.color }}
                >
                  <img
                    className="h-[95%] w-full object-cover"
                    src={datas?.display?.ProfileImage}
                    alt=""
                  />
                </div>
                <div className="mt-5">
                  <img
                    className="md:w-3/4 mx-auto"
                    src={datas?.display?.Logo}
                    alt=""
                  />
                </div>
              </>
            )}
            {datas?.display?.design === "classic" && (
              <>
                <div
                  className=" w-[381px] h-[300px]  relative rounded"
                  style={{ background: datas?.display?.color }}
                >
                  <img
                    className="h-full w-full object-cover rounded"
                    src={datas?.display?.ProfileImage}
                    alt=""
                  />
                  <div className="">
                    <div className="absolute  top-[72%]  z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="381"
                        height="88.28"
                        viewBox="0 0 381 88.28"
                      >
                        <path
                          id="wave"
                          d="M0,25.9V55.406c70.325,43.351,128.033,45.974,213.535-5.027S340.019,6.009,381,17.739v-7.65C286.9-26.122,210.5,45.427,151.305,63.278S52.111,68.378,0,25.9Z"
                          transform="translate(0 0)"
                          fill={datas?.display?.color}
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="96"
                        height="32.781"
                        viewBox="0 0 96 32.781"
                      >
                        <path
                          id="wave-left"
                          d="M0,35.773V68.554H96l-.032-1.475C63.791,67.267,33.386,56.325,0,35.773Z"
                          transform="translate(0 -35.773)"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div className="absolute -bottom-[6px] right-0 z-[5]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="285"
                        height="81.75"
                        viewBox="0 0 285 81.75"
                      >
                        <path
                          id="wave-right"
                          d="M300.742,6.114c-30.018-.329-66.667,9.2-121,41.617C136.118,73.767,99.61,86.065,65.025,86.281H65v1.575H350V14.529C334.376,10.055,318.753,6.312,300.742,6.114Z"
                          transform="translate(-65 -6.106)"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <img
                      className="absolute bottom-3 right-0 z-50 w-[100px]"
                      src={datas?.display?.Logo}
                      alt=""
                    />
                  </div>
                </div>
              </>
            )}

            <div
              className="mt-10 border-4 border-dotted p-3 w-full md:w-[383px]"
              style={{ borderColor: datas?.display?.color }}
            >
              <h2 className="text-xl font-extrabold">
                {datas?.profileInfo?.prefix && datas?.profileInfo?.prefix + "."}{" "}
                {datas?.profileInfo?.first_name +
                  " " +
                  datas?.profileInfo?.last_name}
              </h2>
              <h3 className="font-bold my-2">
                {datas?.profileInfo?.department}
              </h3>
              <h3
                className="font-bold mb-2"
                style={{ color: datas?.display?.color }}
              >
                {datas?.profileInfo?.company}
              </h3>
              <h4 className="font-medium italic text-[#585858]">
                {datas?.profileInfo?.job_title}
              </h4>
            </div>
            <div className="mt-2 w-full md:w-[383px]">
              <p className="italic text-[#69727d]">
                {datas?.profileInfo?.introduction}
              </p>
            </div>
            <div className="my-5">
              <FieldData userData={datas} />
            </div>

            <div className="my-5 w-full md:w-[383px]">
              {datas?.fields?.map((item, index) => (
                <>
                  {item?.type === "Divider" && (
                    <div className="w-full h-[2px] bg-gray-400 mt-3 mb-6"></div>
                  )}
                  {item?.type === "Header" && (
                    <h2 className="text-xl font-semibold mt-6">
                      {item?.title}
                    </h2>
                  )}

                  {/* content */}

                  {item?.type === "Phone" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Website" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Email" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Address" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Link" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "WhatsApp" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Viber" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Skype" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Snapchat" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Signal" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Telegram" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Discord" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}
                  {item?.type === "Slack" && (
                    <Content color={datas?.display?.color} item={item} />
                  )}

                  {/* social media  */}

                  {item?.type === "Facebook" && (
                    <a
                      href={item?.url}
                      style={{ backgroundColor: datas?.display?.color }}
                      className=" w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                    >
                      <FacebookIcon style={{ color: "#fff" }} />{" "}
                    </a>
                  )}
                  {item?.type === "Instagram" && (
                    <a
                      style={{ backgroundColor: datas?.display?.color }}
                      href={item?.url}
                      className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                    >
                      <InstagramIcon style={{ color: "#fff" }} />
                    </a>
                  )}
                  {item?.type === "Twitter" && (
                    <a
                      style={{ backgroundColor: datas?.display?.color }}
                      href={item?.url}
                      className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                    >
                      <TwitterIcon style={{ color: "#fff" }} />
                    </a>
                  )}
                  {item?.type === "LinkedIn" && (
                    <a
                      style={{ backgroundColor: datas?.display?.color }}
                      href={item?.url}
                      className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                    >
                      <LinkedInIcon style={{ color: "#fff" }} />{" "}
                    </a>
                  )}
                  {item?.type === "Pinterest" && (
                    <a
                      style={{ backgroundColor: datas?.display?.color }}
                      href={item?.url}
                      className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                    >
                      <PinterestIcon style={{ color: "#fff" }} />
                    </a>
                  )}
                  {item?.type === "Tiktok" && (
                    <a
                      style={{ backgroundColor: datas?.display?.color }}
                      href={item?.url}
                      className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2 "
                    >
                      <FaTiktok className="inline text-white text-xl" />
                    </a>
                  )}
                  {/* images */}
                  {item?.type === "Image" && <Image item={item} />}
                  {item?.type === "Galary" && <GalleryImage item={item} />}

                  {/* videos */}
                  {item?.type === "Youtube" && <Video item={item} />}
                  {item?.type === "Vimeo" && <Video item={item} />}
                  {item?.type === "Wistia" && <Video item={item} />}
                  {/* more details  */}
                  {item?.type === "Pdf" && (
                    <Pdf
                      item={item}
                      email={datas?.email}
                      color={datas?.display?.color}
                    />
                  )}
                  {item?.type === "Notes" && (
                    <div className="my-5">
                      <p className="italic">{item?.notes}</p>
                    </div>
                  )}
                  {item?.type === "Date" && (
                    <DateView item={item} color={datas?.display?.color} />
                  )}
                  {item?.type === "QR" && (
                    <QrView
                      item={item}
                      logo={datas?.display?.Logo}
                      value={item?.qr}
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
