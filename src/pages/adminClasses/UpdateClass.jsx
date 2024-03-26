import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { updateClassCall } from "../../services/apiCalls";

export const UpdateClass = () => {
    const location = useLocation();
    const navegar = useNavigate();
    const clase = location.state.clase;
    const token = useSelector((state) => state.auth.token);
    const id = clase.id;
    const [formData, setFormData] = useState({
        dance: clase.dance,
        day: clase.day,
        startTime: clase.startTime,
        endTime: clase.endTime
    });

    // Para guardar los nuevos datos que escribimos
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Para hacer la llamada a la API y actualizar los datos
    const handleSubmit = (e) => {
        e.preventDefault();
        updateClassCall(token, formData, id)
            .then((res) => {
                console.log(res);
                // Aquí podrías agregar lógica adicional, como redirigir a otra página
            })
            .catch((error) => {
                console.error("Error al actualizar la clase:", error);
                // Aquí podrías manejar el error, como mostrar un mensaje al usuario
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Baile:</label>
                    <input type="text" className="form-control" name="dance" value={formData.dance} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Día:</label>
                    <input type="text" className="form-control" name="day" value={formData.day} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Hora de Inicio:</label>
                    <input type="datetime-local" className="form-control" name="startTime" value={formData.startTime} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Hora de Fin:</label>
                    <input type="datetime-local" className="form-control" name="endTime" value={formData.endTime} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar Clase</button>
            </form>
        </div>
    );
};
