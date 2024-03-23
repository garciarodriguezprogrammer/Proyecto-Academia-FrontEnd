import { NavBar } from "../../Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { GetProfileData } from "../../services/apiCalls";
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux AHORA
import { useNavigate } from "react-router-dom";


export const Profile = () => {

    const [datos, setDatos] = useState(null)
    const id = useSelector(state => state.auth.userId) 
    const token = useSelector(state => state.auth.token)
    const navegar = useNavigate()

    useEffect(() => {
        GetProfileData(token, id)
            .then((data) => {
                setDatos(data)
            })
    }, [])

    const updateProfile = (user) => {
        navegar("/updateUser", {state: {user}})
    }


    return (
        <>

            <NavBar />
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>           
                <div>
                   {
                    datos?(
                     <div className="card"> 
                     <div className="card-body">
                      <>
                      <h4>Nombre de usuario: {datos.userName}</h4><h5>Email: {datos.email}</h5></>  
                      </div>
                      <button className="btn btn-primary" onClick={() => updateProfile({id:datos.id, email:datos.email, userName:datos.userName})}>Modificar Perfil</button>
                      </div>
                    )
                    :(
                        <p>No hay datos para mostrar</p>)
                   }
                </div>
            </div>
        </>
    )
}