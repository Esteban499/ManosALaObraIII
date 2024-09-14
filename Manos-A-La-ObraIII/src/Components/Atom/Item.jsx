import React, { useState } from 'react'
import Basurero from './Basurero'

export default function Item(props, onDelete) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked); 
  };

  const handleDelete = () => {
    onDelete(props.id);
    console.log("handleDelete");
  }
  
  return (
    <div>
      <input type="checkbox" onClick={handleClick} />
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
        {props.name}
      </span>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
}