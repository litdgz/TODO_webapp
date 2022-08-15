import React,{ useState, useEffect, useReducer } from "react";
import { act } from "react-dom/test-utils";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({initialValue}))

  const { 
    syncronizedItem, 
    loading,
    error,
    item,
  } = state
  
  //ACTION CREATORS 
  const onError = (error) => dispatch({ type: actionTypes.ERROR, payload: error})
  const onSuccess = (item) => dispatch({type: actionTypes.SUCCESS, 
    payload: item})
  const onSave = (item) => dispatch({ type: actionTypes.SAVE, payload: item})
  const onSincronize = () => dispatch({ type: actionTypes.SINCRONIZED })

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
          onSuccess(parsedItem)  
        } catch (error) {
          onError(error)
        }
      }, 1000)
      
  }, [syncronizedItem])
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        onSave(newItem)
      } catch (error) {
        onError(error)
      }
    }

    const syncronize = () => {
      onSincronize()
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      syncronize,
    }
  }

  const initialState = ({initialValue}) =>({
    syncronizedItem: true,
    loading: true,
    error: false,
    item: initialValue
  })

  const actionTypes = {
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    SAVE: 'SAVE',
    SINCRONIZED: 'SINCRONIZED',
  }

  const reducerObject = (state, payload) => ({
    [actionTypes.ERROR]: {
      ...state,
      error: true,
    },
    [actionTypes.SUCCESS]: {
      ...state,
      error: false,
      loading: false,
      syncronizedItem: true,
      item: payload,
    },
    [actionTypes.SAVE]: {
      ...state,
      item: payload
    },
    [actionTypes.SINCRONIZED]: {
      ...state,
      loading: true,
      syncronizedItem: false
    }
  })

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
  }

  export default useLocalStorage;