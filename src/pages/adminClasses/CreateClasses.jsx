import React, { useState, useEffect } from 'react';
import { GetTeachersCall, createClassCall, getTeacherIdCall } from '../../services/apiCalls'; // Importa la función para llamar a la API
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const CreateClasses = () => {
    const token = useSelector(state => state.auth.token)
    const id = useSelector(state => state.auth.userId)
    const [dance, setDance] = useState('');
    const [day, setDay] = useState('');
    const [successMessage, setSuccessMessage] = useState("")
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [teacherId, setTeacherId] = useState(); 
    const [teachers, setTeachers] = useState([])
    const [userId, setUserId] = useState("")
    const navegar = useNavigate()
    //Declaración de un booleano para controlar que se haya cargado el valor de teacherId para entonces activar el boton de envío del fomulario.
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (userId) {
            const fetchStudentId = async () => {
                try {
                    const data = await getTeacherIdCall(userId, token)
                    setTeacherId(data.id)
                    setIsLoading(false)
                } catch (error) {
                    setIsLoading(false)
                    console.error("Error recuperando el teacherId")
                }
            }
            fetchStudentId()
        }
    }, [token, userId])

    useEffect(() => {
        GetTeachersCall(token)
            .then((teachers) => {
                setTeachers(teachers)
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (teacherId) { 
            setIsLoading(true)
            try {               
                // Llama a la función para crear la clase con los datos del estado
                const res = await createClassCall(token, { dance, day, startTime, endTime, teacherId });
                
                setSuccessMessage("La clase se ha creado exitosamente")
                setTimeout(() => {
                    navegar("/adminClasses")
                }, 3000)
            } catch (error) {
                console.error('Error al crear la clase:', error);
                setIsLoading(false)
            }
        } else {
            console.log("Error al recuperar el teacherId")
        }
    };

    return (
        <div className="container">
            <h2>Crear Nueva Clase</h2>
            {successMessage && (<div className="alert alert-success" role="alert">{successMessage}</div>)}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Baile:</label>
                    <input type="text" className="form-control" value={dance} onChange={(e) => setDance(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Día:</label>
                    <input type="text" className="form-control" value={day} onChange={(e) => setDay(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Hora de Inicio:</label>
                    <input type="time" className="form-control" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Hora de Fin:</label>
                    <input type="time" className="form-control" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
                </div>
                <div className="form-group">
                    <select name="id" id="id" defaultValue={teacherId||""} onChange={(e) => setUserId(e.target.value)}>
                        {teachers && teachers.map((teacher) => (
                            <option value={teacher.id} key={teacher.id}>
                                {teacher.userName}
                            </option>
                        ))}
                    </select>
                </div>
                {/* El teacherId se establece como constante, pero podrías agregar lógica para seleccionar un profesor */}
                <button type="submit" className="btn btn-primary" disabled={!teacherId || isLoading}>Crear Clase</button>
            </form>
        </div>
    );
};
