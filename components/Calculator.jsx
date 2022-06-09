import { CountySelect } from "./CountySelect";
import { HouseArea } from "./HouseArea";
import { useState } from "react";
import { faHouse, faHouseFloodWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NumberOdfRooms } from "./NumberOdfRooms";

export const Calculator = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CountySelect />
      <div className="w-1/5">
        <div className="flex justify-center items-center border rounded bg-[#a9c9e4] p-2">
          <div className=" rounded">
            <FontAwesomeIcon className="px-2 w-9 h-9" icon={faHouse} />
          </div>

          <button
            class="w-full rounded bg-[#a9c9e4] border border-gray-300 text-gray-500"
            onClick={() => setOpen(!open)}
          >
            Click to calculate the total area of your house
          </button>
        </div>
        {open ? <HouseArea /> : ""}
        <h4 className="text-center">Total House Area is : {}</h4>
      </div>

      <div className="w-1/5">
        <div className="flex justify-center items-center border rounded bg-[#a9c9e4] p-2">
          <div className=" rounded">
            <FontAwesomeIcon
              className="px-2 w-9 h-9"
              icon={faHouseFloodWater}
            />
          </div>

          <button
            class="w-full rounded bg-[#a9c9e4] border border-gray-300 text-gray-500"
            onClick={() => setOpen(!open)}
          >
            Click to select the total number rooms
          </button>
        </div>
        {open ? <NumberOdfRooms /> : ""}
        <h4 className="text-center">Total House Area is : {}</h4>
      </div>
    </>
  );
};
