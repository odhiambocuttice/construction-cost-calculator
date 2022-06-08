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
    left: "400px",
    top: "0",
    // bottom: `${window.innerHeight - 200}px`,
    width: "14rem",
  }),
};

export const Calculator = () => {
  console.log(countiesOfKenya);
  return (
    <Select
      options={countiesOfKenya}
      placeholder="Select your county of choice"
      //   isLoading={true}
      isClearable={true}
      isSearchable={true}
      className="w-1/5 "
      styles={customStyles}
    />
  );
};
