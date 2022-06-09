import { useState } from "react";
import Select from "react-select";
import { roofTypes } from "../data/roofTypeData.js";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: "1px solid #a9c9e4",
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#a9c9e4" : "white",
  }),
  control: (provided) => ({
    ...provided,
    // backgroundColor: "#a9c9e4",
    border: "1px solid #a9c9e4",
  }),
  menu: (provided) => ({
    ...provided,
    position: "absolute",
    left: "29rem",
    top: "0",
    // bottom: `${window.innerHeight - 200}px`,
    width: "14rem",
  }),
};

export const RoofType = () => {
  const [county, setCounty] = useState([]);

  const handleChange = (e) => {
    setCounty(e);
  };

  return (
    <>
      <div className="flex  w-2/3 justify-center items-center border-2 border-slate-900 rounded p-2 my-4">
        <div className="  rounded">
          <FontAwesomeIcon className="px-2 w-9 h-9" icon={faUmbrella} />
        </div>

        <Select
          options={roofTypes}
          placeholder="Select your county of choice"
          //   isLoading={true}
          isClearable={true}
          isSearchable={true}
          styles={customStyles}
          className="w-full "
          onChange={handleChange}
        />
      </div>
      {county === null ? (
        ""
      ) : (
        <h4>
          You have selected <b>{county["label"]}</b>
        </h4>
      )}
    </>
  );
};
