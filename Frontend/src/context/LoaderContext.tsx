import React, { createContext, useState } from "react";

export const LoaderContext = createContext();

const LoaderContextProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoaderContext.Provider>
  );
};
export default LoaderContextProvider;
