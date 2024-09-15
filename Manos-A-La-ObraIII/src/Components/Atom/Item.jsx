import React, { useState } from 'react'
import './estilosAtom.css'

export default function Item({id, name, onDelete}) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked); 
  };

  const handleDelete = () => {
    onDelete(id);
  }
  
  return (
    <div className="contenedor">
      <div className="contenedora"> 
        <input type="checkbox" onClick={handleClick} />
          <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            {name}
          </span>
        <button onClick={handleDelete} className="basurero">🗑️</button> 
      </div>
    </div>
  );
}