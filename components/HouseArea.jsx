import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  faHouseCircleExclamation,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HouseArea = () => {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <FontAwesomeIcon
                        className="h-6 w-6 text-[#a9c9e4]"
                        icon={faHouseCircleExclamation}
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                      <Dialog.Title className="text-lg leading-9 font-medium text-gray-900">
                        Calculate the total area of your house
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="flex p-2 h-14 justify-start items-center">
                          <h1 className="text-gray-700 px-2">Height:</h1>
                          <input
                            type="number"
                            className="p-2 border-2 border-slate-600 rounded-md w-32"
                            // value={number1}
                            // onChange={(e) => setNumber1(+e.target.value)}
                            placeholder="0"
                          />
                        </div>
                        <div className="flex p-2 h-14 justify-start items-center">
                          <h1 className="text-gray-700 px-2 pr-3">Width:</h1>
                          <input
                            type="number"
                            className="p-2 border-2 border-slate-600 rounded-md w-32"
                            // value={number1}
                            // onChange={(e) => setNumber1(+e.target.value)}
                            placeholder="0"
                          />
                        </div>
                        <div className="flex p-2 h-14 justify-start items-center">
                          <h1 className="text-gray-700 px-2 pr-3">
                            <b>Total Area:</b>
                          </h1>
                          <p>""</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#a9c9e4] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded  border px-4 py-2 bg-white text-base font-medium border-slate-800 text-black hover:bg-red-400  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white border-slate-800 text-base font-medium text-black hover:bg-green-400 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Add
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
