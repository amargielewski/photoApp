import { useContext } from "react";

//context
import { LayoutContext } from "../context/LayoutContext";

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw Error(
      "useLayoutContext must be used inside an LayoutContextProvider"
    );
  }

  return context;
};
