import React, { useState } from 'react';
import { createClassCall } from '../../services/apiCalls'; // Importa la función para llamar a la API
import { useSelector } from 'react-redux';

export const CreateClasses = () => {
    const token = useSelector(state => state.auth.token)
    const id = useSelector(state => state.auth.userId)
    const [dance, setDance] = useState('');
    const [day, setDay] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [teacherId, setTeacherId] = useState(1); // Supongamos que el ID del profesor es 1, puedes cambiarlo según tus necesidades

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Llama a la función para crear la clase con los datos del estado
            const res = await createClassCall(token, { dance, day, startTime, endTime, teacherId });
            console.log(res)
            // Lógica adicional después de crear la clase, como redirigir a otra página o mostrar un mensaje de éxito
        } catch (error) {
            console.error('Error al crear la clase:', error);
            // Lógica adicional en caso de error, como mostrar un mensaje de error al usuario
        }
    };

    return (
        <div className="container">
            <h2>Crear Nueva Clase</h2>
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
                    <label>IdProfesor:</label>
                    <input type="number" className="form-control" value={teacherId} onChange={(e) => setTeacherId(e.target.value)} required />
                </div>
                {/* El teacherId se establece como constante, pero podrías agregar lógica para seleccionar un profesor */}
                <button type="submit" className="btn btn-primary">Crear Clase</button>
            </form>
        </div>
    );
};
