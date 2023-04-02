import React, { createContext, useState, useEffect } from "react";
import { getImmobile } from "@/utils/fechtMethods";

export const ImmobileContext = createContext();

export const ImmobileProvider = ({ children }) => {
  const [allImmobile, setAllImmobile] = useState([]);

  useEffect(() => {
    getImmobile().then((data) => setAllImmobile(data));
  }, []);

  return (
    <ImmobileContext.Provider value={{ allImmobile }}>
      {children}
    </ImmobileContext.Provider>
  );
};
