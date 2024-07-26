import React from "react";
//Custom Hooks estas funciones siempe deben comezaer con use

function useLocalStorage(itemName,initialValue) { 
    
    // localStorage
      const localStorageItem = localStorage.getItem(itemName); // string

      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = [];
      }else {
        parsedItem = JSON.parse(localStorageItem)
      }

      const [item, setItem]=React.useState(parsedItem); // para localStorage el estado debe llamarse items

      const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
      }

      return [item, saveItems]
}

export {useLocalStorage}