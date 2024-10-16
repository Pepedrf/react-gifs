import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['React.js'])

    //Función para agregar categorias a nuestro estado
    function onAddCategoria(newValue){
        if(!categorias.includes(newValue)){
            setCategorias([newValue, ...categorias]);
        }
    }

    //Visual Imprime todas las categorías
    return (
    <>
        <h1>Buscador de Gifs en React</h1>

        <AddCategory 
            onNewValue={onAddCategoria}
            />
        {
            categorias.map((categoria)=>(
                <GifGrid 
                key={categoria} 
                categoria={categoria} />
            ))
        }
    </>
  )
}
