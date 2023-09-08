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
