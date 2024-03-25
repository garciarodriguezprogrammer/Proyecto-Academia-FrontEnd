import { useEffect, useState } from "react"
import { getTeacherIdCall, teacherClassesCall } from "../../services/apiCalls"
import { useSelector } from 'react-redux';

export const TeacherClasses = () => {

    const id = useSelector(state => state.auth.userId)
    const token = useSelector(state => state.auth.token)
    const [teacherId, setTeacherId] = useState()
    const [classes, setClasses] = useState()

    useEffect(() => {
        if (id) {
            const idCall = async () => {
                try {
                    const data = await getTeacherIdCall(id, token);
                    setTeacherId(data.id);
                } catch (error) {
                    console.error("Error al obtener el teacherId:", error);
                }
            };
            idCall()
        }
    }, [id])

    useEffect(() => {
        if (teacherId) {
            const classesCall = async () => {
                try {
                    const data = await teacherClassesCall(token, teacherId);
                    setClasses(data);
                } catch (error) {
                    console.error("Error al obtener las clases:", error);
                }
            };

            classesCall();
        }
    }, [token, teacherId])

    return (
        <div className="container">
            <div className="text-center my-4">
                <div className="row">
                    {classes && classes.map((clase, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card otherCard" style={{ transition: "transform 0.3s" }}>
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
        </div>
    )
}