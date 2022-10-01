import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { reset } = useForm();
  const [county, setCounty] = useState("");
  const [RoofType, setRoofType] = useState("");
  const [finishes, setFinishes] = useState("");

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [HouseArea, setHouseArea] = useState(0);

  //   rooms
  const [floors, setFloors] = useState(0);
  const [rooms, setRooms] = useState(0);
  // const [bedrooms, setBedrooms] = useState(0);
  // const [bathrooms, setBathrooms] = useState(0);
  // const [total, setTotal] = useState(0);

  // Function called on submit that sends form data to email
  const onSubmit = async (data) => {
    // Destrcture data object
    const { phone_number, name, email } = data;
    const Roof_Type = RoofType["value"];
    const Selected_County = county["value"];
    const Selected_finishes = finishes["value"];

    try {
      const templateParams = {
        name,
        email,
        phone_number,
        Selected_County,
        Roof_Type,
        HouseArea,
        height,
        width,
        floors,
        rooms,
        Selected_finishes,
      };

      await emailjs.send(
        "service_xiy4c3c",
        "template_ni7n54x",
        templateParams,
        "user_zc0r7H2t7iUZnigbSC0Mb"
      );
      // Clear form
      //   console.log(HouseArea);
      reset();
      toastifySuccess;
      //   <ToastContainer />;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DataContext.Provider
      value={{
        onSubmit,
        setRoofType,
        setCounty,
        setHouseArea,
        HouseArea,
        setHeight,
        setWidth,
        height,
        width,
        floors,
        setFloors,
        rooms,
        setRooms,
        setFinishes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
