import { createContext, useState } from "react";

export const AppContext = createContext();

export function ContextHOC({ children }) {
  let [name, setName] = useState("James");
  let [pets, setPets] = useState(["Amy the Dog", "Midori the Cat"]);

  let myValueObj = {
    name,
    pets,
    setName,
    setPets,
  };
  return (
    <AppContext.Provider value={myValueObj}>{children}</AppContext.Provider>
  );
}
