import { createContext, useState } from "react";
export const Context = createContext();


const Mycontext = ({children}) => {
  const [state,setState] = useState(true);
  return (
    <Context.Provider value={{state,setState}}>{children}</Context.Provider>
  )
}

export default Mycontext
