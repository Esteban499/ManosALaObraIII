import React from 'react'
import Item from '../Atom/Item'

export default function ListaTareas({tareas, onDelete}) {
  
  const listItems = tareas.slice().reverse().map(t =>
    <Item key={t.id} name={t.name} onDelete={eliminar}/>
  );
  
  const eliminar = () => {
    onDelete(t.id);
    console.log("Eliminar tarea");
  };

  return (
    <div>
      {listItems}
    </div>
    )
    
}
