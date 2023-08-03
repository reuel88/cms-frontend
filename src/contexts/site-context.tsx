"use client";

import { createContext, useContext } from "react";

const SiteContext = createContext();

export function useSite() {
  return useContext(SiteContext);
}

export function SiteProvider({ children, metadata, menus }) {
  return (
    <SiteContext.Provider value={{ metadata, menus }}>
      {children}
    </SiteContext.Provider>
  );
}

export default SiteContext;
