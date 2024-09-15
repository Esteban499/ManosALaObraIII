import React, { useState } from 'react'
import './estilosMolecule.css'

export default function AgregarTarea({onAdd}) {
  
  
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  const handleClick = () => {
    if(nuevaTarea.length !== 0){
      onAdd(nuevaTarea);
      setNuevaTarea('');
    }
    
  };

  return (
    <div className="Agregar">
      
        <input 
          type="text" 
          value={nuevaTarea}
          onChange={handleChange}
        />
        <button className="boton" type="submit" onClick={handleClick}>ADD</button>

    

    </div>
  )
}
