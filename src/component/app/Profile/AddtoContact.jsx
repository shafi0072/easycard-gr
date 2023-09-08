import React from 'react';

function AddContactButton() {
  const handleAddContactClick = () => {
    const contactData = {
      name: 'John Doe',
      phoneNumber: '1234567890',
      email: 'johndoe@example.com',
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

  return (
    <button onClick={handleAddContactClick}>Add Contact</button>
  );
}

export default AddContactButton;


const datas =  {
  profileInfo:{
    first_name: "Md Abdullah",
    last_name:"Al safi"
  },

  fields:[
    {
      id:1,
      number:'+8801727768266',
      ext:'123456',
      internationalNumber: false,
      chooseLabel: "Mobile",
      type: "Phone"
    },
    {
      id:2,
      number:'+8801727768267',
      ext:'123456',
      internationalNumber: false,
      chooseLabel: "work",
      type: "Phone"
    },
    {
      id: 3,
      label: "My Portfolio",
      labelPleaceholder: "Display URL",
      pleaceholder: "www.yourwebsite.gr",
      type: "Website",
      url: "www.abdullahalsafi.me"
    },
    {
      id: 4,
      label: "sa",
      llabelPleaceholder: "Label",
      pleaceholder: "example@email.com",
      type: "Email",
      url: "safi29317@gmaul.com"
    }
  ]
}
