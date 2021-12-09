import { createContext, useReducer } from "react";

export const LayoutContext = createContext();

const layoutReducer = (state, action) => {
  switch (action.type) {
    case "LOCK_BODY_SCROLL":
      return { ...state, lockBodyScroll: action.payload };

    default:
      return state;
  }
};

export const LayoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(layoutReducer, {
    lockBodyScroll: false,
  });

  return (
    <LayoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
