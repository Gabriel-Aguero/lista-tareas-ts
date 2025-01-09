import { useState } from "react";
import { ListaTareas } from "./ListaTareas";


export const TodoApp = () => {

  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas([...listaTareas, nuevaTarea]);
    setNuevaTarea("");
  }

  const handleDeleteTarea = (index: number) => {
    const nuevaListaTareas = listaTareas.filter((_, i) => i !== index);
    setListaTareas(nuevaListaTareas);
  }

  return (
    <div className="container">
        <h1>Lista de tareas</h1>
        <div>
            <input 
            type="text" 
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}/>
        </div>
        <button onClick={handleAddTarea}>Agregar tarea</button>
        <ListaTareas listaTareas={listaTareas} handleDeleteTarea= {handleDeleteTarea}/>
       <div className="autor">
         <h4>Creado con ❤️ por Gabriel Agüero</h4>
         <p>👨‍💻Programador Frontend</p>
        </div>
    </div>
  )
}