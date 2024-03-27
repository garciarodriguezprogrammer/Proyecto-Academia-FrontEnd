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
    const [successMessage, setSuccessMessage] = useState("")
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
                setSuccessMessage("La clase se ha modificado exitosamente")
                setTimeout(() => {
                    navegar("/adminClasses")
                }, 3000)
            })
            .catch((error) => {
                console.error("Error al actualizar la clase:", error);
            });
    };

    return (
        <div className="container">
            {successMessage && (<div className="alert alert-success" role="alert">{successMessage}</div>)}
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
                    <input type="time" className="form-control" name="startTime" defaultValue={formData.startTime} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Hora de Fin:</label>
                    <input type="time" className="form-control" name="endTime" defaultValue={formData.endTime} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar Clase</button>
            </form>
        </div>
    );
};
