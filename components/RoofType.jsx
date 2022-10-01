import { useContext } from "react";
import Select from "react-select";
import { motion } from "framer-motion";

import { roofTypes } from "../data/roofTypeData.js";
import { DataContext } from "../context/DataContext";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid rgb(17 24 39)",
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "rgb(17 24 39)" : "white",
    paddingBottom: "4px",
    paddingTop: "4px",
  }),

  control: (provided) => ({
    ...provided,
    border: "1px solid rgb(17 24 39)",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "4px",
  }),
};

export const RoofType = () => {
  const { setRoofType } = useContext(DataContext);

  const handleChange = (e) => {
    setRoofType(e);
  };

  let easing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.8, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easing,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="flex  justify-center items-center rounded p-1 lg:mx-auto my-2 mx-3"
    >
      <motion.div variants={fadeInUp} className="lg:w-1/2 w-full mb-4">
        <Select
          options={roofTypes}
          placeholder="Select Roof Type"
          //   isLoading={true}
          isClearable={true}
          isSearchable={true}
          styles={customStyles}
          className="text-lg font-light"
          onChange={handleChange}
        />
      </motion.div>
    </motion.div>
  );
};
