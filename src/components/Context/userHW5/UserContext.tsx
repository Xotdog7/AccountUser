import { type } from "@testing-library/user-event/dist/type";
import React, { createContext } from "react";
import { User } from "../../../types";

export type UserContextType = {
  user: User | null;
  login: boolean;
  logout: boolean;
  loginUser: (log: boolean) => void;
  logoutUser: (log: boolean) => void;
  checkUser: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);
