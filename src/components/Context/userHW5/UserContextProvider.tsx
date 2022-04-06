import React, { FC, useState } from "react";
import { users } from "../../../mock";
import { PropsChildren, User } from "../../../types";
import { UserContext } from "./UserContext";

const UserContextProvider: FC<PropsChildren> = ({ children }) => {
  const [user, userState] = useState<User | null>(users);

  const [login, loginState] = useState<boolean>(false);
  const [logout, logoutState] = useState<boolean>(false);

  
  const loginUser = (log: boolean) => {
    loginState(log);
  };
  const logoutUser = (log: boolean) => {
    logoutState(log);
  };
  const checkUser = ()=>{
    if(!!users)userState(null)
    else userState(user);
  }

  console.log("UserContextProvider ", login);

  return (
    <UserContext.Provider
      value={{ loginUser, logoutUser, user, login, logout, checkUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
