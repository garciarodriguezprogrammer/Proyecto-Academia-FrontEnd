import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useSelector } from "react-redux"
import { UpdateUserCall } from "../../services/apiCalls"

//Actualizar la información del usuario por el propio usuario
 export const UpdateUser = () => {
    const location = useLocation()
    const navegar = useNavigate()

    console.log("Location state:", location.state);

    const user = location.state.user

    const token = useSelector(state => state.auth.token)
    const id = user.id

    const [formData, setFormData] = useState({
        userName: user.userName,
        email: user.email
    })

//     //Para guardar los nuevos datos que escribimos
    const handleChange = (event) => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }
    //Para hacer la llamada a la api y actualizar los datos
    const handleUpdate = (e) => {
        e.preventDefault()
        UpdateUserCall(token, id, formData)
        .then((res) => {
            if(res) {navegar("/profile")}
        })
    }

    return(
        <>
        <div className="container">
            <div className="column">
                <form onSubmit={handleUpdate} action="">
                    <input type="text" onChange={handleChange} className="form-control" name="userName" defaultValue={user.userName}/>
                    <input type="text" onChange={handleChange} className="form-control" name="email" defaultValue={user.email}/>
                    <button className="btn btn-success" type="submit">Actualizar</button>
                </form>
            </div>
        </div>
        </>
    )

 }




// export const UpdateUser = () => {
//     const location = useLocation()
//     const navegar = useNavigate()

//     // Verificar si location.state es null antes de intentar acceder a location.state.user
//     const user = location.state && location.state.user
//     const token = useSelector(state => state.auth.token)
//     const id = user ? user.id : null

//     // Inicializar el estado formData con los valores del usuario antes de la modificación
//     const [formData, setFormData] = useState({
//         userName: user ? user.userName : '',
//         email: user ? user.email : ''
//     })

//     // Función para actualizar los datos del formulario
//     const handleChange = (event) => {
//         setFormData({
//             ...formData, 
//             [event.target.name]: event.target.value
//         })
//     }

//     // Función para manejar la actualización de usuario
//     const handleUpdate = (e) => {
//         e.preventDefault()
//         if (token && id) {
//             UpdateUserCall(token, id, formData)
//             .then((res) => {
//                 if (res) {
//                     navegar("/profile")
//                 }
//             })
//         }
//     }

//     return (
//         <div className="container">
//             <div className="column">
//                 <form onSubmit={handleUpdate} action="">
//                     {/* Mostrar los valores actuales del usuario en los inputs */}
//                     <input type="text" onChange={handleChange} className="form-control" name="userName" value={formData.userName} />
//                     <input type="text" onChange={handleChange} className="form-control" name="email" value={formData.email} />
//                     <button className="btn btn-success" type="submit">Actualizar</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

