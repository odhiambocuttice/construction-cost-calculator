import { useState } from "react";
import Select from "react-select";
import { countiesOfKenya } from "../data/countiesData.js";

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
    left: "25rem",
    top: "0",
    // bottom: `${window.innerHeight - 200}px`,
    width: "14rem",
  }),
};

export const Calculator = () => {
  const [county, setCounty] = useState();

  const handleChange = (e) => {
    setCounty(e.label);
  };

  return (
    <>
      <Select
        options={countiesOfKenya}
        placeholder="Select your county of choice"
        //   isLoading={true}
        isClearable={true}
        isSearchable={true}
        styles={customStyles}
        className="w-1/5 "
        onChange={handleChange}
      />
      {county ? (
        <h1>
          You have selected <p>{county}</p>
        </h1>
      ) : (
        <p>Nothing selected</p>
      )}
    </>
  );
};
