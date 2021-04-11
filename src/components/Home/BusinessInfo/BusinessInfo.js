import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
const infosData = [
  {
    title: "Opening Hours",
    description: "We open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit our location",
    description: "Dhanmondi  Dhaka-1207",
    icon: faMapMarkerAlt,
    background: "dark",
  },
  {
    title: "Contact us now",
    description: "Mobile-019232992517",
    icon: faPhoneVolume,
    background: "primary",
  },
];
console.log(infosData);
const BusinessInfo = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default BusinessInfo;
