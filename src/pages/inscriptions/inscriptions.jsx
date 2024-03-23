import { myInscriptionsCall } from "../../services/apiCalls"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export const Inscriptions = () => {

    const token = useSelector(state => state.auth.token)
    const id = useSelector(state => state.auth.userId)
    console.log("Este es el id "+ id)

    const [inscriptions, setInscriptions] = useState([]); 

    useEffect(() => {
        const getInscriptions = async () => {
            try {
                const res = await myInscriptionsCall(token, id);
                setInscriptions(res);
            } catch (error) {
                console.error("Error al obtener las inscripciones:", error);
            }
        };

        getInscriptions();
    }, [token, id]);

    return (
        <div className="container">
            <div className="row">
                {inscriptions.map((inscription, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{inscription.dance}</h5>
                                <p className="card-text">Día: {inscription.day}</p>
                                <p className="card-text">Hora de inicio: {inscription.startTime}</p>
                                <p className="card-text">Hora de fin: {inscription.endTime}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
