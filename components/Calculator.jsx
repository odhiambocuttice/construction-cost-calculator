import { CountySelect } from "./CountySelect";
import { HouseArea } from "./HouseArea";
import { useState } from "react";
import { faHouse, faHouseFloodWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NumberOfRooms } from "./NumberOfRooms";
import { RoofType } from "./RoofType";
import { RegistrationForm } from "./RegistrationForm";

export const Calculator = () => {
  const [open, setOpen] = useState(false);
  const [openRoom, setOpenRoom] = useState(false);

  return (
    <>
      <CountySelect />
      <RoofType />
      <HouseArea />
      <NumberOfRooms />
      <div className="w-full mx-auto h-1 bg-slate-900 mt-2"></div>
      <RegistrationForm />
    </>
  );
};


