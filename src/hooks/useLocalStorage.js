import React,{ useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [syncronizedItem, setSyncronizedItem] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue);


  useEffect(() => {
    setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
    
          setItem(parsedItem)
          setLoading(false)
          setSyncronizedItem(true)
  
        } catch (error) {
          setError(error)
        }
      }, 1000)
      
  }, [syncronizedItem])
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
      } catch (error) {
        setError(error)
      }
    }

    const syncronize = () => {
      setLoading(true);
      setSyncronizedItem(false)
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      syncronize,
    }
  }

  export default useLocalStorage;