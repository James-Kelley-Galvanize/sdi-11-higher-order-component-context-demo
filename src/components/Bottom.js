import { useContext } from "react";
import { AppContext } from "../AppContext";
export default function Bottom(props) {
  const { name, pets, setName } = useContext(AppContext);
  return (
    <div>
      <p>I'm the bottom level component</p>
      <div>{name}</div>
      <div>{pets}</div>
      <button
        onClick={(e) => {
          setName("Bruce Banner");
        }}
      >
        CHANGE MY NAME
      </button>
    </div>
  );
}
