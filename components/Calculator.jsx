import { CountySelect } from "./CountySelect";
import { HouseArea } from "./HouseArea";
import { useState } from "react";
import { faHouse, faHouseFloodWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NumberOfRooms } from "./NumberOfRooms";
import { RoofType } from "./RoofType";
import { RegistrationForm } from "./RegistrationForm";

export const Calculator = () => {
  return (
    <div className="shadow-2xl lg:w-1/3 lg:mx-auto mx-3 my-9">
      <h1 className="font-semibold text-2xl text-gray-900 text-center">
        Construction Cost Details
      </h1>
      <CountySelect />
      <RoofType />
      <HouseArea />
      <NumberOfRooms />
    </div>
  );
};


