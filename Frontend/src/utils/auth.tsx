import { SetStateAction, createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: string }) => {
  const [user, setUser] = useState(null);

  const login = (user: SetStateAction<null>) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
