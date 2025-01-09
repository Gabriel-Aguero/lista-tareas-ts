
import { Tarea } from "./Tarea";

type Props = {
    listaTareas: string[],
    handleDeleteTarea: (index: number) => void
}

export const ListaTareas = ({listaTareas, handleDeleteTarea}: Props) => {
  return (
    <div className="lista-tareas">
        {listaTareas.map((tarea, index) => (
            <Tarea key={index} tarea={tarea} handleDeleteTarea={() => handleDeleteTarea(index)}/>
        ))}
    </div>
  )
}