import { useState, useEffect } from "react";

export const Toggle = ({ toggled, onClick }) => {
  const [isToggled, toggle] = useState(() => {
    const storedValue = localStorage.getItem("mode");
    return storedValue !== null ? JSON.parse(storedValue) : toggled;
  });

  const callback = () => {
    const newValue = !isToggled;
    toggle(newValue);
    onClick(newValue);
    localStorage.setItem("mode", JSON.stringify(newValue));
  };

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(isToggled));
  }, [isToggled]);

    return (
        <label className="toggle-label">
            <input className="toggle-input" type="checkbox" 
            defaultChecked={!isToggled} 
            onClick={callback} />
            <span className="toggle-span" />
        </label>
    )
}