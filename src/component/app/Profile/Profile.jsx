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
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
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


  const handleAddContactClick = () => {
    const { profileInfo, fields } = datas;
    const firstName = profileInfo.first_name;
    const lastName = profileInfo.last_name;
    let phoneNumber = '';
    let email = '';

    for (const field of fields) {
      if (field.type === 'Phone') {
        phoneNumber = field.number;
        break; // Stop after finding the first phone number
      }
    }

    for (const field of fields) {
      if (field.type === 'Email') {
        email = field.url;
        break; // Stop after finding the first email
      }
    }
    const contactData = {
      name: firstName + " " + lastName,
      phoneNumber: phoneNumber,
      email: email,
    };

    const contactString = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.name}
TEL:${contactData.phoneNumber}
EMAIL:${contactData.email}
END:VCARD`;

    const uri = `data:text/vcard;charset=utf-8,${encodeURIComponent(contactString)}`;

    // Check if it's a mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Open a new window with the URI, this may trigger the contact save on some devices
      window.open(uri, '_blank');
    } else {
      // Provide a message to users on non-mobile devices
      alert('This feature is available on mobile devices only.');
    }
  };



  function addToContacts() {
    if (!('contacts' in navigator)) {
      alert('Contacts API not supported in this browser');
      return;
    }

    // Request permission to access contacts
    navigator.contacts.requestPermission().then(() => {
      // Create a new contact
      const contact = navigator.contacts.create();

      // Set contact name based on profile info
      contact.name = new ContactName({
        formatted: `${datas.profileInfo.first_name} ${datas.profileInfo.last_name}`,
      });

      // Extract and add phone numbers from fields of type "Phone"
      const phoneNumbers = datas.fields
        .filter((field) => field.type === 'Phone')
        .map((field) => {
          return new ContactField('mobile', field.number, false);
        });

      if (phoneNumbers.length > 0) {
        contact.phoneNumbers = phoneNumbers;
      }

      // Extract and add email addresses from fields of type "Email"
      const emails = datas.fields
        .filter((field) => field.type === 'Email')
        .map((field) => {
          return new ContactField('work', field.url, false);
        });

      if (emails.length > 0) {
        contact.emails = emails;
      }

      // Save the contact
      contact.save().then(() => {
        alert('Contact saved successfully!');
      }).catch((error) => {
        alert('Failed to save contact: ' + error);
      });
    }).catch((error) => {
      alert('Permission denied: ' + error);
    });
  }
  return (
    <>
      {!datas && <MobileLoading />}
      {datas && (
        <div className="">
          <div className="max-w-[500px] w-full mx-auto ">
            {datas?.display?.design === "flat" && (
              <>
                <div
                  className="h-[400px] "
                  style={{ background: datas?.display?.primaryColor }}
                >
                  <img
                    className="h-[100%] w-full object-cover"
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
                  className=" w-full md:w-[381px] h-[300px]  relative rounded"
                  style={{ background: datas?.display?.primaryColor }}
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
                          fill={datas?.display?.primaryColor}
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
              className="mt-10  p-3 w-full md:w-[383px]"
              style={{
                borderLeft:
                  datas?.display?.design === "classic"
                    ? `3px solid ${datas?.display?.primaryColor}`
                    : "none",
              }}
            >
              <h2 className="text-3xl font-bold">
                {datas?.profileInfo?.prefix && datas?.profileInfo?.prefix + "."}{" "}
                {datas?.profileInfo?.first_name +
                  " " +
                  datas?.profileInfo?.last_name}
                <br />
                {datas?.profileInfo?.suffix + " "}
                <span className="font-semibold">
                  {datas?.profileInfo?.accreditations}
                </span>
              </h2>
              <h4 className="font-medium italic text-[#585858]">
                {datas?.profileInfo?.job_title}
              </h4>
              <h3 style={{ color: datas?.display?.primaryColor }}>
                {datas?.profileInfo?.department}
              </h3>
              <h3 className=" mb-2">{datas?.profileInfo?.company}</h3>
            </div>
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
                    <Content
                      bgColor={datas?.display?.primaryColor}
                      color={datas?.display?.primaryAccent}
                      item={item}
                    />
                  )}
                  {item?.type === "Website" && (
                    <Content
                      bgColor={datas?.display?.primaryColor}
                      color={datas?.display?.primaryAccent}
                      item={item}
                    />
                  )}
                  {item?.type === "Email" && (
                    <Content
                      bgColor={datas?.display?.primaryColor}
                      color={datas?.display?.primaryAccent}
                      item={item}
                    />
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
                    <Content
                      bgColor={datas?.display?.primaryColor}
                      color={datas?.display?.primaryAccent}
                      item={item}
                    />
                  )}
                  {item?.type === "Viber" && (
                    <Content
                      bgColor={datas?.display?.primaryColor}
                      color={datas?.display?.primaryAccent}
                      item={item}
                    />
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
                      style={{ backgroundColor: datas?.display?.primaryColor }}
                      className=" w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                    >
                      <FacebookIcon
                        style={{ color: datas?.display?.primaryAccent }}
                      />{" "}
                    </a>
                  )}
                  {item?.type === "Instagram" && (
                    <a
                      style={{ backgroundColor: datas?.display?.primaryColor }}
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
                      style={{ backgroundColor: datas?.display?.primaryColor }}
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
                      style={{ backgroundColor: datas?.display?.primaryColor }}
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
                      style={{ backgroundColor: datas?.display?.primaryColor }}
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
                      style={{ backgroundColor: datas?.display?.primaryColor }}
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
            <button onClick={handleAddContactClick} className=" text-white w-[200px]  h-[50px] md:w-[270px] md:h-[70px] md:px-5 fixed left-[50%] bottom-5 -translate-x-1/2 text-lg md:text-2xl rounded-full transition-all duration-300 hover:scale-125 font-bold" style={{ background: datas?.display?.secondaryColor, color: datas?.display?.secondaryAccent }}> <PermContactCalendarIcon /> SAVE CONTACT</button>
          </div>
          {/* <AddContactButton/> */}
        </div>
      )}
    </>
  );
};

export default Profile;
