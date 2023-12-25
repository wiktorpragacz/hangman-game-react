import { createContext, useContext, useState } from "react";

export type UserQuessContext = {
  userQuess: string;
  setUserQuess: React.Dispatch<React.SetStateAction<string>>;
  blunders: number;
  setBlunders: React.Dispatch<React.SetStateAction<number>>;
  win: boolean;
  setWin: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserQuessContext = createContext<UserQuessContext>(
  {} as UserQuessContext
);

const UserQuessProvider = ({ children }: { children: React.ReactNode }) => {
  const [userQuess, setUserQuess] = useState<string>("");
  const [blunders, setBlunders] = useState(-2);
  const [win, setWin] = useState(false);

  return (
    <UserQuessContext.Provider
      value={{ userQuess, setUserQuess, blunders, setBlunders, win, setWin }}
    >
      {children}
    </UserQuessContext.Provider>
  );
};

export const useUserQuess = () => useContext(UserQuessContext);

export default UserQuessProvider;
