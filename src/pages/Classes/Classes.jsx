import { myClassesCall } from "../../services/apiCalls"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const Classes = () => {

    const token = useSelector(state => state.auth.token)
    const [classes, setClasses] = useState(null)
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await myClassesCall(token);
                console.log(data)
                setClasses(data);
            } catch (error) {
                console.error("Error al obtener las clases:", error);
            }
        };

        fetchData();
    }, [token]);
    
    return (
        <div className="container">
            <div className="row">
                {classes && classes.map((clase, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{clase.dance}</h5>
                                <p className="card-text">Día: {clase.day}</p>
                                <p className="card-text">Hora de inicio: {clase.startTime}</p>
                                <p className="card-text">Hora de fin: {clase.endTime}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}