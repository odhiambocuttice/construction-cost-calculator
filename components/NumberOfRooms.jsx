import { useState, useContext } from "react";

import { DataContext } from "../context/DataContext";

export const NumberOfRooms = () => {
  // const [floors, setFloors] = useState(0);
  // const [rooms, setRooms] = useState(0);
  // const [bedrooms, setBedrooms] = useState(0);
  // const [bathrooms, setBathrooms] = useState(0);
  const [open, setOpen] = useState(false);

  // const [total, setTotal] = useState(0);

  const {
    floors,
    setFloors,
    rooms,
    setRooms,
    bedrooms,
    setBedrooms,
    bathrooms,
    setBathrooms,
    total,
    setTotal,
  } = useContext(DataContext);

  function calculateTotal() {
    setTotal(floors + rooms + bedrooms + bathrooms);
  }

  return (
    <div className="w-full mx-auto text-lg font-light flex justify-center items-center my-6 flex-col ">
      <div className="lg:w-1/2 mx-6  flex justify-center items-center border border-gray-900 rounded p-2  hover:text-white bg-gradient-to-r from-purple-700 to-pink-600 mb-6">
        <button className="" onClick={() => setOpen(!open)}>
          Click to calculate the total number of ROOMS
        </button>
      </div>

      {open && (
        <div className="flex lg:top-1/3 lg:absolute flex-col justify-center text-base font-light shadow-xl items-start m-4 p-6 text-left rounded max-w-xs bg-white lg:mt-20 mt-0">
          <h1 className="text-gray-900 my-3 mx-auto font-semibold text-center">
            Please specify the number of rooms for the house
          </h1>

          <div className="flex p-2 h-14 justify-start items-center ">
            <h1 className="text-gray-700 px-2 pr-3 ">Number of floors:</h1>
            <input
              className="p-2 border-2 border-slate-600 rounded-md w-32"
              type="number"
              placeholder="0"
              value={floors}
              onChange={(e) => setFloors(+e.target.value)}
            />
          </div>

          <div className="flex p-2 h-14 justify-start items-center">
            <h1 className="text-gray-700 px-2 pr-3">Number of rooms:</h1>
            <input
              className="p-2 border-2 border-slate-600 rounded-md w-32"
              type="number"
              placeholder="0"
              value={rooms}
              onChange={(e) => setRooms(+e.target.value)}
            />
          </div>

          <div className="flex p-2 h-14 justify-start items-center">
            <h1 className="text-gray-700 px-2 pr-3">Number of bedrooms:</h1>
            <input
              className="p-2 border-2 border-slate-600 rounded-md w-32"
              type="number"
              placeholder="0"
              value={bedrooms}
              onChange={(e) => setBedrooms(+e.target.value)}
            />
          </div>

          <div className="flex p-2 h-14 justify-start items-center">
            <h1 className="text-gray-700 px-2 pr-3">Number of bathrooms:</h1>
            <input
              className="p-2 border-2 border-slate-600 rounded-md w-32"
              type="number"
              placeholder="0"
              value={bathrooms}
              onChange={(e) => setBathrooms(+e.target.value)}
            />
          </div>

          <div className="flex justify-start items-center">
            <button
              onClick={calculateTotal}
              className="inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 border-slate-800 text-base font-medium text-black"
            >
              Total Rooms
            </button>

            <h2 className="p-3 ml-7">{total}</h2>
          </div>
        </div>
      )}
    </div>
  );
};
