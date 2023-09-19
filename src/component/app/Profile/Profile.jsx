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
import Website from "./Website";
import LinkComponent from "./LinkComponent";
import { QRCode } from "react-qrcode-logo";

const Profile = ({ id }) => {
  const [datas, setData] = useState(null);

  const [ip, setIp] = useState({});
  const [device, setDevice] = useState({});
  const [active, setActive] = useState(true);
  useEffect(() => {
    fetch(`https://business-card-backend-2.vercel.app/cards/visit/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [id, datas]);
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

  useEffect(() => {
    setTimeout(() => {
      setActive(datas?.setting?.cardStatus);
    }, 1000);
  }, [datas]);
  return (
    <>
      {/* {!datas?._id && <MobileLoading />} */}

      {datas && datas?.setting?.cardStatus && (
        <div className="">
          <div className="max-w-full md:max-w-[383px] w-full mx-auto ">
            {datas?.display?.design === "flat" && (
              <>
                <div
                  className=" w-full md:w-[381px] h-[400px] pb-3 rounded-b-md"
                  style={{ background: datas?.display?.primaryColor }}
                >
                  {datas?.display?.ProfileImage !== null &&
                    datas?.display?.ProfileImage !== "null" &&
                    datas?.display?.ProfileImage && (
                      <img
                        className=" object-cover h-full w-full"
                        src={datas?.display?.ProfileImage}
                        alt=""
                      />
                    )}
                </div>
                <div className="my-6 px-1 w-full md:w-[80%] flex justify-center">
                  {datas?.display?.Logo !== null &&
                    datas?.display?.Logo !== "null" &&
                    datas?.display?.Logo && (
                      <img className="" src={datas?.display?.Logo} alt="logo" />
                    )}
                </div>
              </>
            )}
            {datas?.display?.design === "classic" && (
              <>
                <div
                  className=" w-full md:w-[381px] h-[300px]  relative rounded"
                  style={{ background: datas?.display?.primaryColor }}
                >
                  {datas?.display?.ProfileImage !== null &&
                    datas?.display?.ProfileImage !== "null" &&
                    datas?.display?.ProfileImage && (
                      <img
                        className="h-full w-full object-cover rounded"
                        src={datas?.display?.ProfileImage}
                        alt=""
                      />
                    )}
                  <div className="">
                    <div className="absolute  top-[72%]  z-10 w-full">
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
                    <div>
                      {datas?.display?.Logo !== null &&
                        datas?.display?.Logo !== "null" &&
                        datas?.display?.Logo && (
                          <img
                            className="absolute bottom-3 object-center right-2 z-50 w-[100px] h-[50px] top-2]"
                            src={
                              datas?.display?.Logo ? datas?.display?.Logo : ""
                            }
                            alt="logo"
                          />
                        )}
                    </div>
                  </div>
                </div>
              </>
            )}
            {datas?.display?.design === "pro" && (
              <div className=" w-full md:w-[381px]  pb-3 rounded-b-md">
                <div
                  className=" w-[100%] h-[400px]  rounded-md "
                  style={{ borderColor: color }}
                >
                  {datas?.display?.ProfileImage !== null &&
                  datas?.display?.ProfileImage !== "null" &&
                  datas?.display?.ProfileImage ? (
                    <img
                      className=" object-cover  h-full w-full"
                      src={
                        datas?.display?.ProfileImage
                          ? datas?.display?.ProfileImage
                          : ""
                      }
                      alt=""
                    />
                  ) : (
                    <div
                      className="w-[100%]  h-full"
                      style={{ background: "#fff" }}
                    ></div>
                  )}
                </div>
                <div
                  className="w-full md:w-[75%]  text-white mx-auto text-center  md:rounded-b-2xl py-[20px]"
                  style={{ background: datas?.display?.primaryColor }}
                >
                  <h2 className="text-[27px] text-white font-semibold roboto" style={{lineHeight: '30px'}}>
                    {datas?.profileInfo?.prefix &&
                      datas?.profileInfo?.prefix + "."}{" "}
                    {datas?.profileInfo?.first_name +
                      " " +
                      datas?.profileInfo?.last_name}
                    
                    <p className="flex justify-center items-center ">
                    <span className="block text-[27px]">{datas?.profileInfo?.suffix + " "}</span>
                    <span
                      className="  text-[18px] roboto ms-2"
                      style={{ fontWeight:300, lineHeight: '18px' }} 
                      >
                      {datas?.profileInfo?.accreditations && `(${datas?.profileInfo?.accreditations})`}
                    </span>
                    </p>
                  </h2>
                  <p className="mt-[10px] font-medium text-[18px]  roboto " style={{lineHeight: '24px'}}>
                    {datas?.profileInfo?.job_title}
                  </p>
                  <p className="">{datas?.profileInfo?.department}</p>
                  <p className="italic  roboto">
                    {datas?.profileInfo?.company}
                  </p>
                </div>
                {datas?.display?.Logo !== null &&
                  datas?.display?.Logo !== "null" &&
                  datas?.display?.Logo && (
                    <div className="mt-3 mx-8">
                      <img
                        className="w-full"
                        src={datas?.display?.Logo}
                        alt="logo"
                      />
                    </div>
                  )}
              </div>
            )}

            {datas?.display?.design !== "pro" && (
              <div className="px-3">
                <div
                  className="mt-3 w-full md:w-[383px]"
                  style={{
                    borderLeft:
                      datas?.display?.design === "classic"
                        ? `3px solid ${datas?.display?.primaryColor}`
                        : "none",
                    padding:
                      datas?.display?.design === "classic" ? "12px" : "0px",
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
                  <h3  style={{ color: datas?.display?.primaryColor}}>
                    {datas?.profileInfo?.department}
                  </h3>
                  <h3 className=" mb-0">{datas?.profileInfo?.company}</h3>
                </div>
              </div>
            )}

            <div className="mx-6 ">
              <div className=" w-full md:w-[383px]">
                {datas?.profileInfo?.introduction && (
                  <p className="italic text-[#69727d]">
                    {datas?.profileInfo?.introduction}
                  </p>
                )}
              </div>
              <div className="my-5">
                <FieldData userData={datas} />
              </div>

              <div className="my-5 w-full md:max-w-[383px]">
                {datas?.fields?.map((item, index) => (
                  <>
                    {item?.type === "Divider" && (
                      <div className="w-full h-[2px] bg-gray-400 mt-1 mb-6"></div>
                    )}
                    {item?.type === "Header" && (
                      <h2 className="pb-3 border-gray-400 mt-[20px] font-semibold text-2xl text-black roboto">
                        {item?.title}
                      </h2>
                    )}

                    {/* content */}

                    {item?.type === "Phone" && (
                      <Link href={`tel:${item.number}`}>
                        <Content
                          bgColor={datas?.display?.primaryColor}
                          color={datas?.display?.primaryAccent}
                          design={datas?.display?.design}
                          item={item}
                        />
                      </Link>
                    )}
                    {item?.type === "Website" && (
                      <Link
                        href={
                          item.url.slice(0, 4) !== "http" &&
                          item.url.slice(0, 5) !== "https"
                            ? `https://${item.url}`
                            : item.url
                        }
                      >
                        <Website
                          bgColor={datas?.display?.primaryColor}
                          color={datas?.display?.primaryAccent}
                          design={datas?.display?.design}
                          item={item}
                        />
                      </Link>
                    )}
                    {item?.type === "Email" && (
                      <Link href={`mailto:${item.url}`}>
                        <Content
                          bgColor={datas?.display?.primaryColor}
                          color={datas?.display?.primaryAccent}
                          design={datas?.display?.design}
                          item={item}
                        />
                      </Link>
                    )}
                    {item?.type === "Address" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        design={datas?.display?.design}
                        item={item}
                      />
                    )}
                    {item?.type === "Link" && (
                      <LinkComponent
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        design={datas?.display?.design}
                        item={item}
                      />
                    )}
                    {item?.type === "WhatsApp" && (
                      <Link href={`whatsapp://send?phone=${item.number}`}>
                        <Content
                          bgColor={datas?.display?.primaryColor}
                          color={datas?.display?.primaryAccent}
                          design={datas?.display?.design}
                          item={item}
                        />
                      </Link>
                    )}
                    {item?.type === "Viber" && (
                      <Link href={`viber://chat?number=${item.number}`}>
                        <Content
                          bgColor={datas?.display?.primaryColor}
                          color={datas?.display?.primaryAccent}
                          design={datas?.display?.design}
                          item={item}
                        />
                      </Link>
                    )}
                    {item?.type === "Skype" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        design={datas?.display?.design}
                        item={item}
                      />
                    )}
                    {item?.type === "Snapchat" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        design={datas?.display?.design}
                        item={item}
                      />
                    )}
                    {item?.type === "Signal" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        design={datas?.display?.design}
                        item={item}
                      />
                    )}
                    {item?.type === "Telegram" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        design={datas?.display?.design}
                        item={item}
                      />
                    )}
                    {item?.type === "Discord" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        design={datas?.display?.design}
                        item={item}
                      />
                    )}
                    {item?.type === "Slack" && (
                      <Content
                        bgColor={datas?.display?.primaryColor}
                        color={datas?.display?.primaryAccent}
                        design={datas?.display?.design}
                        item={item}
                      />
                    )}

                    {/* social media  */}

                    {item?.type === "Facebook" && (
                      <a
                        href={item?.url}
                        style={{
                          backgroundColor: "#1877f2",
                        }}
                        className=" w-[52px] h-[52px] mt-1.5 items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <FacebookIcon style={{ color: "white" }} />{" "}
                      </a>
                    )}
                    {item?.type === "Instagram" && (
                      <a
                        style={{
                          backgroundColor: "#c32aa3",
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-[52px] h-[52px] mt-1.5 items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <InstagramIcon style={{ color: "white" }} />
                      </a>
                    )}
                    {item?.type === "Twitter" && (
                      <a
                        style={{
                          backgroundColor: "#1da1f2",
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-[52px] mt-1.5 h-[52px] items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <TwitterIcon style={{ color: "white" }} />
                      </a>
                    )}
                    {item?.type === "LinkedIn" && (
                      <a
                        style={{
                          backgroundColor: "#0a66c2",
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-[52px] h-[52px] mt-1.5  items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <LinkedInIcon style={{ color: "white" }} />{" "}
                      </a>
                    )}
                    {item?.type === "Pinterest" && (
                      <a
                        style={{
                          backgroundColor: "#bd081c",
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-[52px] h-[52px] mt-1.5  items-center justify-center inline-flex rounded-full mr-2  "
                      >
                        <PinterestIcon style={{ color: "white" }} />
                      </a>
                    )}
                    {item?.type === "Tiktok" && (
                      <a
                        style={{
                          backgroundColor: "#010101",
                        }}
                        href={item?.url}
                        className="bg-[#EB531C] w-[52px] h-[52px] mt-1.5  items-center justify-center inline-flex rounded-full mr-2 "
                      >
                        <FaTiktok
                          className="inline  text-xl"
                          style={{ color: "white" }}
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
                        design={datas?.display?.design}
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
                        design={datas?.display?.design}
                      />
                    )}
                    {item?.type === "QR" && (
                      <QrView
                        item={item}
                        logo={"hyhy"}
                        value={item?.qr}
                        data={datas?.QrCode}
                      />
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="h-[50vh]"> 
            <div className="mx-6  relative  ">
              <h1 className="pb-2 border-gray-400 mt-3 font-semibold text-2xl text-black roboto">
                Η ΚΑΡΤΑ ΜΟΥ
              </h1>
              <div className="absolute -left-2 ">
                <QRCode
                  {...{
                    qrStyle: "dots",
                    fgColor: "#0053a2",
                    ecLevel: "M",
                    value: window?.location?.href,
                    size: 160,
                    bgColor: "#ffffff",

                    logoPadding: 0,
                    eyeRadius: [
                      {
                        outer: 50,

                        inner: 6,
                      },
                      {
                        outer: 50,

                        inner: 6,
                      },
                      {
                        outer: 50,
                        inner: 6,
                      },
                    ],
                    eyeColor: [
                      // build eyeColor manually
                      {
                        outer: "#0053a2",
                        inner: "#D40808",
                      },
                      {
                        outer: "#0053a2",
                        inner: "#D40808",
                      },
                      {
                        outer: "#0053a2",
                        inner: "#D40808",
                      },
                    ],
                  }}
                />
              </div>
            </div>
            </div>
            <button
              onClick={handleAddContactClick}
              className=" text-white w-[300px]  h-[50px] md:w-[350px] md:h-[70px] md:px-5 fixed left-[50%] bottom-5 -translate-x-1/2 text-lg md:text-2xl rounded-full transition-all duration-300 hover:scale-125 font-bold"
              style={{
                background: datas?.display?.secondaryColor,
                color: datas?.display?.secondaryAccent,
              }}
            >
              {" "}
              <PermContactCalendarIcon />ΑΠΟΘΗΚΕΥΣΗ ΕΠΑΦΗΣ
            </button>
          </div>
          {/* <AddContactButton/> */}
        </div>
      )}
    </>
  );
};

export default Profile;
