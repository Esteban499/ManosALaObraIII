import React, { useState } from 'react'
import Titulo from './Components/Atom/Titulo'
import SinTareas from './Components/Atom/sinTareas'
import AgregarTarea from './Components/Molecule/AgregarTarea'
import ListaTareas from './Components/Molecule/ListaTareas'


export default function App() {

  const[listaTareas, setListaTareas] = useState([]);

  const arrayTareas = (nuevaTarea) => {
    const nueva = {id: Date.now(), name: nuevaTarea};
    setListaTareas([...listaTareas, nueva]);
  };

  const deleteItem = (id) => {
    setListaTareas(listaTareas.filter((tarea) => tarea.id !== id));
  };


  return (
    <div>
      <Titulo/>
      <AgregarTarea onAdd={arrayTareas}/>
      {listaTareas.length > 0 ? <ListaTareas tareas={listaTareas} onDelete={deleteItem} />  : <SinTareas/> }
    </div>
  )
}
