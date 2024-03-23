import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { NavBar } from "../../Components/NavBar/NavBar"
import { useSelector } from "react-redux"
import { UpdateUserData } from "../../services/apiCalls"

//Actualizar la información del usuario por el propio usuario
export const UpdateUser = () => {
    const location = useLocation()
    const navegar = useNavigate()
    const user = location.state.user
    const token = useSelector(state => state.auth.token)
    const id = user.id

    const [formData, setFormData] = useState({
        userName: user.userName,
        email: user.email
    })

    //Para guardar los nuevos datos que escribimos
    const handleChange = (event) => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }
    //Para hacer la llamada a la api y actualizar los datos
    const handleUpdate = (e) => {
        e.preventDefault()
        UpdateUserData(token, id, formData)
        .then((res) => {
            if(res) {navegar("/profile")}
        })
    }

    return(
        <>
        <NavBar />
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