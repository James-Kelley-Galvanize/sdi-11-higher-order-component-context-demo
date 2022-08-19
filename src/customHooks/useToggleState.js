import { useState } from "react";

export function useToggleState(bool = true) {
  let [toggleSwitch, setToggleSwitch] = useState(bool);

  const toggler = () => {
    setToggleSwitch(!toggleSwitch);
  };

  return [toggleSwitch, toggler];
}
