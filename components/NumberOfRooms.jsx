import { useState } from "react";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NumberOfRooms = () => {
  const [floors, setFloors] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [open, setOpen] = useState(false);

  const [total, setTotal] = useState(0);

  function calculateTotal() {
    setTotal(floors + rooms + bedrooms + bathrooms);
  }

  return (
    <>
      <div className="flex justify-center items-center border-2 border-slate-500 rounded p-2  w-2/3 hover:bg-blue-200">
        <div className=" rounded">
          <FontAwesomeIcon className="px-2 w-9 h-9" icon={faCheckSquare} />
        </div>

        <button
          className="w-full rounded text-gray-500"
          onClick={() => setOpen(!open)}
        >
          Click to select the total number rooms
        </button>
      </div>
      {/* <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white border-slate-800 text-base font-medium text-black hover:bg-green-400 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Total Rooms
      </button> */}
      {open && (
        // <div className="fixed inset-0 z-50 overflow-auto">
        <div className="flex lg:left-[1250px] lg:top-1/2 lg:absolute flex-col justify-center text-base shadow-xl items-start m-4 p-6 font-semibold text-left rounded max-w-xs">
          <h1 className="text-gray-600 my-3 mx-auto font-light">
            Please specify the number of rooms
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
              className="inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white border-slate-800 text-base font-medium text-black hover:bg-green-400 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Total Rooms
            </button>

            <h2 className="p-3 ml-7">{total}</h2>
          </div>
        </div>
        // </div>
      )}
    </>
  );
};
