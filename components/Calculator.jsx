import { CountySelect } from "./CountySelect";
import { HouseArea } from "./HouseArea";
import { NumberOfRooms } from "./NumberOfRooms";
import { RoofType } from "./RoofType";
import { Finishes } from "./Finishes";

export const Calculator = () => {
  return (
    <div className="shadow-2xl lg:w-1/3 lg:mx-auto mx-3 my-2 mt-5">
      <h1 className="font-semibold text-2xl text-gray-900 text-center">
        Construction Cost Details
      </h1>
      <CountySelect />
      <HouseArea />
      <NumberOfRooms />
      <Finishes />
      <RoofType />
    </div>
  );
};


