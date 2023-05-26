import { useEffect, useState } from "react";
import { Dimensions } from "react-native-web";

const useWiWidth = (size) => {
  const [width, setWidth] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      setWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return {
    windowSize: width,
    widthIn: size === undefined ? false : size && width <= size,
  };
};
export default useWiWidth;
