import React from "react";
//Custom Hooks estas funciones siempe deben comezaer con use

function useLocalStorage(itemName,initialValue) { 
  const [item, setItem]=React.useState(initialValue); // para localStorage el estado debe llamarse items  
  const [loading, setLoading]=React.useState(true);
  const [error, setError]=React.useState(false);
    

  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        // localStorage
        const localStorageItem = localStorage.getItem(itemName); // string
  
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
        }else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    },2000)
        

  },[])

      

  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, 
    saveItems,
    loading,
    error
  }
}

export {useLocalStorage}



// metodos para este ejercicio ejecutarlos en el navegador y de cirta manera reiniciar la aplicacion 

// localStorage.removeItem('TODOS_V1')

// const defaultTodos =[
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la llorana', completed: false},
//   { text: 'LALALALALALA', completed: false},
//   { text: 'Usar estados derivados', completed:true},
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))