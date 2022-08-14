import React, { useEffect, useState } from "react";

export function useStorageListener(syncronize) {
  const [storageChange, setStorageChange] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("Hubo cambios en TODOS_V1");
        setStorageChange(true);
      }
    });
  }, [storageChange]);

  const toggleShow = () => {
    syncronize();
    setStorageChange(false);
  };
  return {
    show: storageChange,
    toggleShow: toggleShow,
  };
}
