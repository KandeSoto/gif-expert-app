import { useState } from "react";
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState( ['One Punch', 'Dragon Ball'] );

  const onAddCategory = () => {    
    setCategories([ "Ado", ...categories ]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory />
      {/* Listado de Gif */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { categories.map( category => {
          return <li key={ category }>{ category }</li>;
        })}
      </ol>
        {/* Gif Item */}
    </>
  )
}
