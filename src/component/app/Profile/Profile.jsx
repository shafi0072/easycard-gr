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
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Link from "next/link";
const Profile = ({ id }) => {
  const [datas, setData] = useState(null);
  

  const [ip, setIp] = useState({});
  const [device, setDevice] = useState({});
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
  
  console.log(datas)

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

      setDevice(osName);
    }
  }, []);

  const handleAddContactClick = () => {
    const { profileInfo, fields, display } = datas;
    const firstName = profileInfo.first_name;
    const lastName = profileInfo.last_name;
    const prefix = profileInfo.prefix;

    let mobile = "";
    let officeNumber = "";
    let faxNumber = "";
    let address = "";
    let email = "";
    let website = "";

    for (const field of fields) {
      if (field.type === "Phone" && field?.chooseLabel === "Mobile") {
        mobile = field.number;
      }
      if (field.type === "Address") {
        address = field.address;
      }
      if (field.type === "Website") {
        website = field.url;
      }
      if (field.type === "Phone" && field?.chooseLabel === "Office") {
        officeNumber = field.number;
      }
      if (field.type === "Phone" && field?.chooseLabel === "Fax") {
        faxNumber = field.number;
      }
      if (field.type === "Email") {
        email = field.url;
      }
    }

    const contactData = {
      name: firstName + " " + lastName,
    };

    // Decode the base64 image

    console.log({ profileInfo });
    debugger;

    const contactString = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.name}

N:${lastName};${firstName};${prefix};${profileInfo?.suffix}
NICKNAME:${lastName}
EMAIL;type=HOME,INTERNET:${email}
EMAIL;type=WORK,INTERNET:${email}
TEL;TYPE=CELL:${mobile}
TEL;TYPE=Mobile,VOICE:${mobile}
TEL;TYPE=Fax:${faxNumber}
TEL;TYPE=WORK:${officeNumber}
LABEL:Home address
ADR:;;${address}
TITLE:${profileInfo?.department}
ROLE:${profileInfo?.job_title}
ORG:${profileInfo?.company}
URL;type=WORK:${profileInfo?.website}
END:VCARD
`;

    const uri = `data:text/vcard;charset=utf-8,${encodeURIComponent(
      contactString
    )}`;

    // Check if it's a mobile device
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // Open a new window with the URI, this may trigger the contact save on some devices
      window.open(uri, "_blank");
    } else {
      // Provide a message to users on non-mobile devices
      alert("This feature is available on mobile devices only.");
    }
  };

  return (
    <>
      {!datas?._id && <MobileLoading />}
      {datas && (
        <div className="">
          <div className="max-w-[500px] w-full mx-auto ">
            {datas?.display?.design === "flat" && (
              <>
                <div
                  className=" w-full md:w-[381px] pb-3 rounded-b-md"
                  style={{ background: datas?.display?.primaryColor }}
                >
                  <img
                    className=" object-cover"
                    src={datas?.display?.ProfileImage}
                    alt=""
                  />
                </div>
                <div className="mt-5 px-1 w-full md:w-[80%] flex justify-center" >
                  <img
                    className=""
                    src={datas?.display?.Logo}
                    alt="logo"
                  />
                </div>
              </>
            )}
            {datas?.display?.design === "classic" && (
              <>
                <div
                  className=" w-full md:w-[381px] h-[300px]  relative rounded"
                  style={{ background: datas?.display?.primaryColor }}
                >
                  <img
                    className="h-full w-full object-cover rounded"
                    src={datas?.display?.ProfileImage}
                    alt=""
                  />
                  <div className="">
                    <div className="absolute  top-[72%]  z-10 w-full">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="88.28"
                        viewBox="0 0 381 88.28"
                      >
                        <path
                          id="wave"
                          d="M0,25.9V55.406c70.325,43.351,128.033,45.974,213.535-5.027S340.019,6.009,381,17.739v-7.65C286.9-26.122,210.5,45.427,151.305,63.278S52.111,68.378,0,25.9Z"
                          transform="translate(0 0)"
                          fill={datas?.display?.primaryColor}
                        />
                      </svg> */}
                      <svg
                        class="card-wavestyled__Wave-card__sc-4t6hon-0 daNA-Du WaveHeaderstyled__Divider-card__sc-1ootntz-2 BRgwB"
                        preserveAspectRatio="xMinYMax meet"
                        viewBox="0 0 246 57"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 214.7168,6.1113281 C 195.65271,5.9023124 172.37742,11.948182 137.87305,32.529297 110.16613,49.05604 86.980345,56.862784 65.015625,57 H 65 v 1 H 246 V 11.453125 C 236.0775,8.6129313 226.15525,6.2367376 214.7168,6.1113281 Z"
                          fill="#ffffff"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          d="M 0,35.773438 V 58 H 65 L 64.97852,57 C 43.192081,57.127508 22.605139,49.707997 0,35.773438 Z "
                          fill="#ffffff"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill={datas?.display?.primaryColor}
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="m 0,16.7221 v 19.052 C 45.4067,63.7643 82.6667,65.4583 137.873,32.5286 193.08,-0.401184 219.54,3.87965 246,11.4535 V 6.51403 C 185.24,-16.8661 135.913,29.331 97.6933,40.8564 59.4733,52.3818 33.6467,44.1494 0,16.7221 Z "
                        ></path>
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 ">
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
                    <div className="absolute -bottom-[6px] right-0  z-[5]">
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
                      className="absolute bottom-3 object-center right-2 z-50 w-[100px] h-[50px] top-2]"
                      src={datas?.display?.Logo}
                      alt=""
                    />
                  </div>
                </div>
              </>
            )}
            {
              datas?.display?.design === 'pro' && (
                <div className=" w-full md:w-[381px]   pb-3 rounded-b-md">
                  <img
                    className=" object-cover"
                    src={datas?.display?.ProfileImage}
                    alt=""
                  />
                  <div className="w-full md:w-[75%] text-white mx-auto text-center flex flex-col gap-y-2 pb-2 md:rounded-b-2xl" style={{ background: datas?.display?.primaryColor }}>
                    <h2 className="text-3xl text-white font-bold">
                      {datas?.profileInfo?.prefix &&
                        datas?.profileInfo?.prefix + "."}{" "}
                      {datas?.profileInfo?.first_name +
                        " " +
                        datas?.profileInfo?.last_name}
                      <br />
                      {datas?.profileInfo?.suffix + " "}
                      <span className="font-semibold">
                        {datas?.profileInfo?.accreditations}
                      </span>
                    </h2>
                    <h4 className="font-medium ">
                      {datas?.profileInfo?.job_title}
                    </h4>
                    <h3 >
                      {datas?.profileInfo?.department}
                    </h3>
                    <h3 className=" ">{datas?.profileInfo?.company}</h3>
                  </div>
                </div>
              )
            }
            {datas?.display?.Logo && <div className="mt-5 px-1 w-full md:w-[80%] flex justify-center" >
              <img
                className=""
                src={datas?.display?.Logo}
                alt="logo"
              />
            </div>}
            {datas?.display?.design !== 'pro' && <div className="px-3">
              <div
                className="mt-10   w-full md:w-[383px]"
                style={{
                  borderLeft:
                    datas?.display?.design === "classic"
                      ? `3px solid ${datas?.display?.primaryColor}`
                      : "none", padding: datas?.display?.design === "classic" ? "12px" : "0px"
                }}
              >
                {datas?.profileInfo?.first_name && (
                  <h2 className="text-3xl font-bold">
                    {datas?.profileInfo?.prefix &&
                      datas?.profileInfo?.prefix + "."}{" "}
                    {datas?.profileInfo?.first_name +
                      " " +
                      datas?.profileInfo?.last_name}
                    <br />
                    {datas?.profileInfo?.suffix + " "}
                    <span className="font-semibold">
                      {datas?.profileInfo?.accreditations}
                    </span>
                  </h2>
                )}
                <h4 className="font-medium italic text-[#585858]">
                  {datas?.profileInfo?.job_title}
                </h4>
                <h3 style={{ color: datas?.display?.primaryColor }}>
                  {datas?.profileInfo?.department}
                </h3>
                <h3 className=" mb-2">{datas?.profileInfo?.company}</h3>
              </div>
            </div>}
            <div className="px-3">
              <div className="mt-12 w-full md:w-[383px]">
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
                      <Link href={`tel:${item.number}`}>
                        <Content
                          bgColor={datas?.display?.primaryColor}
                          color={datas?.display?.primaryAccent}
                          item={item}
                        />
                      </Link>
                    )}
                    {item?.type === "Website" && (
                      <Link href={item.url.slice(0,4) !== "http" && item.url.slice(0,5) !== "https"?`https://${item.url}`:item.url} >
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                      </Link>
                    )}
                    {item?.type === "Email" && (
                      <Link href={`mailto:${item.url}`}>
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                      </Link>
                    )}
                    {item?.type === "Address" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                    )}
                    {item?.type === "Link" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                    )}
                    {item?.type === "WhatsApp" && (
                      <Link href={`whatsapp://send?phone=${item.number}`}>
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                      </Link>
                    )}
                    {item?.type === "Viber" && (
                     <Link href={`viber://chat?number=${item.number}`}>
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                     </Link>
                    )}
                    {item?.type === "Skype" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                    )}
                    {item?.type === "Snapchat" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                    )}
                    {item?.type === "Signal" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                    )}
                    {item?.type === "Telegram" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                    )}
                    {item?.type === "Discord" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                    )}
                    {item?.type === "Slack" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        item={item}
                      />
                    )}

                    {/* social media  */}

                    {item?.type === "Facebook" && (
                      <a
                        href={item?.url}
                        style={{
                          backgroundColor: datas?.display?.primaryColor,
                        }}
                        className=" w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <FacebookIcon
                          style={{ color: datas?.display?.primaryAccent }}
                        />{" "}
                      </a>
                    )}
                    {item?.type === "Instagram" && (
                      <a
                        style={{
                          backgroundColor: datas?.display?.primaryColor,
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <InstagramIcon
                          style={{ color: datas?.display?.primaryAccent }}
                        />
                      </a>
                    )}
                    {item?.type === "Twitter" && (
                      <a
                        style={{
                          backgroundColor: datas?.display?.primaryColor,
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <TwitterIcon
                          style={{ color: datas?.display?.primaryAccent }}
                        />
                      </a>
                    )}
                    {item?.type === "LinkedIn" && (
                      <a
                        style={{
                          backgroundColor: datas?.display?.primaryColor,
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <LinkedInIcon
                          style={{ color: datas?.display?.primaryAccent }}
                        />{" "}
                      </a>
                    )}
                    {item?.type === "Pinterest" && (
                      <a
                        style={{
                          backgroundColor: datas?.display?.primaryColor,
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <PinterestIcon
                          style={{ color: datas?.display?.primaryAccent }}
                        />
                      </a>
                    )}
                    {item?.type === "Tiktok" && (
                      <a
                        style={{
                          backgroundColor: datas?.display?.primaryColor,
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2 "
                      >
                        <FaTiktok
                          className="inline  text-xl"
                          style={{ color: datas?.display?.primaryAccent }}
                        />
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
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                      />
                    )}
                    {item?.type === "Notes" && (
                      <div className="my-5">
                        <p className="italic">{item?.notes}</p>
                      </div>
                    )}
                    {item?.type === "Date" && (
                      <DateView
                        item={item}
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                      />
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
            <button
              onClick={handleAddContactClick}
              className=" text-white w-[200px]  h-[50px] md:w-[270px] md:h-[70px] md:px-5 fixed left-[50%] bottom-5 -translate-x-1/2 text-lg md:text-2xl rounded-full transition-all duration-300 hover:scale-125 font-bold"
              style={{
                background: datas?.display?.secondaryColor,
                color: datas?.display?.secondaryAccent,
              }}
            >
              {" "}
              <PermContactCalendarIcon /> SAVE CONTACT
            </button>
          </div>
          {/* <AddContactButton/> */}
        </div>
      )}
    </>
  );
};

export default Profile;
