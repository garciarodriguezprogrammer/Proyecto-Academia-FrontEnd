import { getStudentId, myClassesCall } from "../../services/apiCalls"
import { useEffect, useState} from "react"
import { useSelector } from "react-redux"
import { setInscriptionCall } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom"
import './Classes.css'


export const Classes = () => {
    const navegar = useNavigate()
    const [successMessage, setSuccessMessage] = useState("")
    const token = useSelector(state => state.auth.token)
    const id = useSelector(state => state.auth.userId)
    const [classes, setClasses] = useState(null)
    const [studentId, setStudentId] = useState(null)
    useEffect(() => {
        const fetchStudentId = async () => {
            try {
                const data = await getStudentId(id, token)
                setStudentId(data.id)
            } catch (error) {
                console.error("Error al obtener el id de estudiante")
            }
        }
        fetchStudentId()
    }, [token])
 
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

    const handleInscription = async(classId) => {
        if(window.confirm("¿Confirma que desea inscribirse a esta clase?")){
            try {
                const data = await setInscriptionCall(token, studentId, classId);
                setSuccessMessage("Su inscripción se ha realizado exitosamente")
                const updatedClasses = classes.filter(clase => clase.id !== classId)
                setClasses(updatedClasses);
                setTimeout(() => {
                    navegar("/myInscriptions")
                   }, 1300)                
            } catch (error) {
                console.error("Error al obtener las clases:", error);
            }  
        }
    }

    
    return (
        <div className="container"> 
            <div className="text-center my-4">
    <h4 className="font-weight-bold">Seleccione la clase en la que se desee inscribir</h4></div>
            {successMessage && (<div className="alert alert-success" role="alert">{successMessage}</div>)}           
            <div className="row">
                {classes && classes.map((clase, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card otherCard" style={{ transition: "transform 0.3s" }} onClick={() => handleInscription(clase.id)}>
                            <img className="card-img-top" style={{maxHeight: "300px"}} src={`/img/${clase.dance}.jpg`} alt={clase.dance} />
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


