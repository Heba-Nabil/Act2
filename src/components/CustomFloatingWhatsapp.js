"use client";

import dynamic from "next/dynamic";

const DynamicFloatingWhatsApp = dynamic(
  () => import("react-floating-whatsapp").then((mod) => mod.FloatingWhatsApp),
  {
    ssr: false,
  }
);

const CustomFloatingWhatsapp = () => {
  return (
    <DynamicFloatingWhatsApp
      phoneNumber="+201282804809"
      allowEsc
      allowClickAway
      accountName="Seif Group"
      statusMessage="Typically replies within 1 hour"
      chatMessage={`Hello there! 🤝 \nHow can we help?`}
      placeholder="Type a message.."
      buttonStyle={{
        bottom: "3rem",
        width: 50,
        height: 50,
      }}
      // avatar="/images/avatar.webp"
      // darkMode
      // notificationSound
      notificationDelay={5}
      // notificationSoundSrc="/whatsapp_new_massage.mp3"
      // notificationLoop={1}
    />
  );
};

export default CustomFloatingWhatsapp;
