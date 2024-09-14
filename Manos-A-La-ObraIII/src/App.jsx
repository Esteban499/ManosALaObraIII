import React, { useState } from 'react'
import Titulo from './Components/Atom/Titulo'
import AgregarTarea from './Components/Molecule/AgregarTarea'
import ListaTareas from './Components/Molecule/ListaTareas'

export default function App() {

  const[listaTareas, setListaTareas] = useState([]);

  const arrayTareas = (nuevaTarea) => {
    setListaTareas([...listaTareas, {name: nuevaTarea}]);
  };
  const deleteItem = () => {
    listaTareas.filter((tarea) => {tarea.id !== id})
    console.log("asdasd");
  }


  return (
    <div>
      <Titulo/>
      <AgregarTarea onAdd={arrayTareas}/>
      {listaTareas.length > 0 ? <ListaTareas tareas={listaTareas} onDelete={deleteItem} />  : <h2> No hay tareas guardadas </h2>}
    </div>
  )
}
