import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  faHouseCircleExclamation,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const HouseArea = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState(false);

  const [totalArea, setTotalArea] = useState(0);

  function calculateTotal() {
    setTotalArea(height * width);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <>
      <div className="w-2/3 flex my-6 justify-center items-center border-2 hover:bg-blue-200 border-slate-500 rounded p-2">
        <div className=" rounded">
          <FontAwesomeIcon className="px-2 w-9 h-9" icon={faHouse} />
        </div>

        <button
          class="w-full text-base text-gray-500"
          onClick={() => setOpen(!open)}
        >
          Calculate the total area of your house
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 overflow-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto rounded-full bg-blue-200 flex-shrink-0 flex items-center justify-center h-12 w-12  sm:mx-0 sm:h-10 sm:w-10">
                    <FontAwesomeIcon
                      className="h-6 w-6"
                      icon={faHouseCircleExclamation}
                    />
                  </div>
                  <div className="flex items-center justify-center h-12 mx-2 py-2">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Calculate the total area of your house
                    </h3>
                  </div>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mt-2">
                    <div className="flex p-2 h-14 justify-start items-center">
                      <h1 className="text-gray-700 px-2">Height:</h1>
                      <input
                        type="number"
                        className="p-2 border-2 border-slate-600 rounded-md w-32"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="0"
                      />
                    </div>
                    <div className="flex p-2 h-14 justify-start items-center">
                      <h1 className="text-gray-700 px-3">Width:</h1>
                      <input
                        type="number"
                        className="p-2 border-2 border-slate-600 rounded-md w-32"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="0"
                      />
                    </div>
                    <div className="border-2 border-slate-900 w-1/5 p-6 fixed right-1/4 top-1/3">
                      <p className="text-sm leading-5 text-gray-500 text-center">
                        {totalArea}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded  border px-4 py-2 bg-white text-base font-medium border-slate-800 text-black hover:bg-red-400  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white border-slate-800 text-base font-medium text-black hover:bg-green-400 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={calculateTotal}
                    >
                      Total Area
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
