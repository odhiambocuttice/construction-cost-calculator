import { useState } from "react";
import Select from "react-select";
import { countiesOfKenya } from "../data/countiesData.js";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
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
    backgroundColor: "#a9c9e4",
  }),
  menu: (provided) => ({
    ...provided,
    position: "absolute",
    left: "21rem",
    top: "0",
    // bottom: `${window.innerHeight - 200}px`,
    width: "14rem",
  }),
};

export const CountySelect = () => {
  const [county, setCounty] = useState([]);

  const handleChange = (e) => {
    setCounty(e);
  };

  return (
    <>
      <div className="flex w-1/5 justify-center items-center border rounded bg-[#a9c9e4] p-2">
        <div className=" bg-[#a9c9e4] rounded">
          <FontAwesomeIcon className="px-2 w-9 h-9" icon={faMapLocationDot} />
        </div>

        <Select
          options={countiesOfKenya}
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
          You have selected <b>{county["label"]}</b> county
        </h4>
      )}
    </>
  );
};
