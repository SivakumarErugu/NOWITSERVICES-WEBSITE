'use client';

import { useContext } from "react";
import { NowitContext } from "./NowitContext";

export const useNowit = () => {
  const ctx = useContext(NowitContext);

  if (!ctx) {
    throw new Error("useNowit must be used inside NowitContextProvider");
  }

  return ctx;
};
