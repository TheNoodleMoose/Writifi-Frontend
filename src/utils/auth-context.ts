import { createContext } from "react";

export default createContext({
  token: "",
  userId: "",
  login: (token: string, userId: string) => {},
  logout: (token: string, userId: string) => {}
});
