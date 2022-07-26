import React, { useState } from "react";

export function withStorageListener(WrapperComponent) {
  return function WrapperComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("Hubo cambios en TODOS_V1");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.syncronize();
      setStorageChange(false);
    };
    return <WrapperComponent show={storageChange} toggleShow={toggleShow} />;
  };
}
