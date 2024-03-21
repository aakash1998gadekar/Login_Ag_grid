import { createContext, useState } from "react";
import { FC, ReactNode, Dispatch, SetStateAction } from "react";

type DataType = {
  name: string;
  password: string;
}
// interface DataType  {
//   name: string;
//   password: string;
// }

interface LoginContextProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext<{
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}>({ data: { name: "", password: "" }, setData: () => {} });

export const LoginContextProvider: FC<LoginContextProviderProps> = ({
  children,
}) => {
  const initialData: DataType = { name: "", password: "" };
  const [data, setData] = useState(initialData);
  return (
    <LoginContext.Provider value={{ data, setData }}>
      {children}
    </LoginContext.Provider>
  );
};
