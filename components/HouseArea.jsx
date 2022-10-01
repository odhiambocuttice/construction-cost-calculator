import { useState, useContext } from "react";
import { faHouseCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DataContext } from "../context/DataContext";

export const HouseArea = () => {
  const [open, setOpen] = useState(false);

  const {
    setHouseArea,
    HouseArea,
    setHeight,
    height,
    width,
    setWidth,
    floors,
    setFloors,
  } = useContext(DataContext);

  function calculateTotal() {
    setHouseArea(height * width * floors);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }

  return (
    <div className="mx-6 lg:mx-auto text-lg font-light flex justify-center items-center my-2">
      <div className="lg:w-1/2 w-full flex justify-center items-center border border-gray-900 rounded p-2  hover:text-white bg-gradient-to-r from-purple-700 to-pink-600">
        <button className="" onClick={() => setOpen(!open)}>
          Click to calculate the total area of HOUSE in square meters
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 overflow-auto ">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div
              className="inline-block align-bottom bg-[#F4F7FA] rounded-lg shadow-xl transform transition-all sm:align-middle"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-[#F4F7FA] px-4 rounded-xl">
                <div className="flex items-center justify-center ">
                  <div className="absolute top-[-40px] mx-auto rounded-full  bg-gradient-to-r from-purple-700 to-pink-600 flex-shrink-0 flex items-center justify-center h-20 w-20 ">
                    <FontAwesomeIcon
                      className="h-10 w-10 text-gray-900"
                      icon={faHouseCircleExclamation}
                    />
                  </div>
                  <h3
                    className="text-lg font-semibold text-gray-900 mt-10"
                    id="modal-headline"
                  >
                    Calculate the total area of your house
                  </h3>
                </div>
                <div className="mt-3 text-center">
                  <div className="flex items-center justify-start flex-col">
                    <div className="flex p-2 justify-start items-center ml-12 ">
                      <h1 className="px-3">Number of Floors:</h1>
                      <input
                        type="number"
                        className="p-2 border-2 border-slate-600 rounded-md w-1/4 text-center"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                        placeholder="0"
                      />
                    </div>

                    <div className="flex p-2 justify-center items-center">
                      <h1 className="px-3">Width:</h1>
                      <input
                        type="number"
                        className="p-2 border-2 border-slate-600 rounded-md w-1/3 text-center"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="0"
                      />
                    </div>

                    <div className="flex p-2 justify-center items-center">
                      <h1 className="px-2">Length:</h1>
                      <input
                        type="number"
                        className="p-2 border-2 border-gray-900 rounded-md w-1/3 text-center"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="0"
                      />
                    </div>

                    <div className="p-2 w-full rounded-xl flex justify-center items-center ml-4">
                      <h1 className="px-3">Total Area:</h1>
                      <p className="border-2 border-gray-900 rounded-md text-center p-2 w-1/3 bg-white">
                        {HouseArea} m²
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-full  border px-4 py-2 bg-white text-base font-medium border-gray-900 text-black  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-full border shadow-sm px-4 py-2 my-2 lg:my-0 bg-gradient-to-r from-purple-700 to-pink-600 border-gray-900 text-base font-medium text-black"
                      onClick={calculateTotal}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
