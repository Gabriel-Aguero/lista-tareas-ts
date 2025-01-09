
type Props = {
    tarea: string,
    handleDeleteTarea: () => void
}

export const Tarea = ({tarea, handleDeleteTarea}: Props) => {
  return (
    <div className="tarea">
        <span>{tarea}</span>
        <button onClick={handleDeleteTarea}>Eliminar</button>
    </div>
  )
}