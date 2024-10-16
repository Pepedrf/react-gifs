import React, { useState } from 'react';


export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('')

    //Actualizar la barra donde escribimos
    function onInputChange(event){
        setInputValue(event.target.value);
    }

    //función para cuando confirmemos el formulario
    function onsubmit(event){
        event.preventDefault();
        if(inputValue.trim().length>=1){
            onNewValue(inputValue.trim());
            setInputValue("");
        }

    }

    //Visual
    return (
        <form onSubmit={onsubmit}>
            <input 
            type="text" 
            placeholder="Busca tus gifs favoritos..." 
            value={inputValue} 
            onChange={(event)=>onInputChange(event)}
            />
        </form>
    
    )
}
