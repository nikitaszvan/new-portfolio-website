import {useState} from "react";

const useHover = () => {
    const [hoverStates, setHoverStates] = useState([]);
  
    const handleMouseEnter = (index) => {
      setHoverStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = true;
        return newStates;
      });
    };
  
    const handleMouseLeave = (index) => {
      setHoverStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = false;
        return newStates;
      });
    };
  
    return { hoverStates, handleMouseEnter, handleMouseLeave };
  };

  export default useHover;