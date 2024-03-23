import { AdminNavBar } from "../../Components/NavBar/adminNavBar";
import { useState, useEffect } from "react";
import { GetProfileData } from "../../services/apiCalls";
import { useSelector } from "react-redux" 


export const AdminProfile = () => {

    const [datos, setDatos] = useState(null)
    const id = useSelector(state => state.auth.userId) 
    const token = useSelector(state => state.auth.token)


    useEffect(() => {
        GetProfileData(token, id)
            .then((data) => {
                setDatos(data)
            })
    }, [])


    return (
        <>

            <AdminNavBar />
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>           
            
                <div className="w-80">
                   {
                    datos?(
                     <div className="card"> 
                     <div className="card-body">
                      <>
                      <h4>Nombre de admin: {datos.userName}</h4><h5>Email: {datos.email}</h5></>  
                      </div>
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
