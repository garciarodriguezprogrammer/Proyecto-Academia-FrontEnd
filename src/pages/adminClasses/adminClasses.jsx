import { ClassesCard } from "../../Components/classesCard/ClassesCard"
import { deleteClassCall, myClassesCall } from "../../services/apiCalls";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const AdminClasses = () => {

    const token = useSelector(state => state.auth.token)
    const id = useSelector(state => state.auth.userId)
    const [classes, setClasses] = useState(null)
    const navegar = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await myClassesCall(token);
                setClasses(data);
            } catch (error) {
                console.error("Error al obtener las clases:", error);
            }
        };

        fetchData();
    }, [token]);

    const eliminarClase = (classId) => {
        const fetchEliminar = async() => {
            try {
                const data = await deleteClassCall(classId, token)
                console.log(data)
                const updatedClasses = classes.filter(clase => clase.id !== classId)
                setClasses(updatedClasses)
            } catch (error) {
                console.error("Error al eliminar la clase", error)
            }
        }
        fetchEliminar()
    }

    const editarClase = (clase) => {
        navegar("/updateClass", {state: {clase}})
    }
   

    return (
        <div className="container">
            <div className="container">
                <h2 className="text-white">Todas las clases</h2>
            </div>
            {classes && classes.length > 0 ? (
                classes.map((clase) => ( // Cambié el nombre de la variable a "clase" para evitar conflictos con la palabra reservada "class"
                    <ClassesCard
                        key={clase.id}
                        dance={clase.dance}
                        day={clase.day}
                        startTime={clase.startTime}
                        endTime={clase.endTime}
                        id={clase.id}
                        eliminarClase={eliminarClase}
                        editarClase={editarClase}
                    />
                ))
            ) : (
                <p>No tienes clases programadas.</p> // Cambié el mensaje para que sea coherente con el contexto
            )}
        </div>
    );


}