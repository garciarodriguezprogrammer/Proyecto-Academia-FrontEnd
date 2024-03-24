import "./ClassesCard.css"


export const ClassesCard = ({id, dance, day, startTime, endTime, eliminarClase, editarClase}) => {
    

    return(
        <div className="appointment-card" key={id}>
            <div className="card-content">
                <h2 id="dance">Baile: {dance}</h2>
                <h2 id="day">Día: {day}</h2>
                <h2 id="startTime">Hora inicio: {startTime}</h2>
                <h2 id="endTime">Hora fin: {endTime}</h2>
            </div>
            <button className="btn btn-danger" onClick={() => eliminarClase(id)}>Eliminar</button>
            <button className="btn btn-secondary" onClick={() => editarClase(id)}>Editar</button>
        </div>
    );

}