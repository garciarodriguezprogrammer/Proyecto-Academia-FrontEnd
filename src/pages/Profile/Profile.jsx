import { useState, useEffect } from "react";
import { ProfileDataCall } from "../../services/apiCalls";
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux AHORA
import { useNavigate } from "react-router-dom";


export const Profile = () => {

    const [datos, setDatos] = useState(null)
    const id = useSelector(state => state.auth.userId)
    const token = useSelector(state => state.auth.token)
    const navegar = useNavigate()

    useEffect(() => {
        ProfileDataCall(token, id)
            .then((data) => {
                setDatos(data)
            })
    }, [])

    const updateProfile = (user) => {
        navegar("/updateUser", {state: {user}})
        
    }


    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div>
                    {
                        datos ? (
                            <div className="card">
                                <div className="card-body">
                                    <>
                                        <h4 className="card-text">Nombre de usuario: {datos.userName}</h4>
                                        <h5 className="card-text">Email: {datos.email}</h5>
                                        <h5 className="card-text">Teléfono: {datos.phoneNumber}</h5>
                                        <h5 className="card-text">Dirección: {datos.address}</h5>
                                    </>
                                </div>
                                <button className="btn btn-primary" onClick={() => updateProfile({id:datos.id, email:datos.email, userName:datos.userName})}>Modificar Perfil</button>
                            </div>
                        )
                            : (
                                <p>No hay datos para mostrar</p>)
                    }
                </div>
            </div>
        </>
    )
}