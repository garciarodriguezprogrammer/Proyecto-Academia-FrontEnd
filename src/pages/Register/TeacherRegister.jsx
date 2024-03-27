import { useState } from "react";
import { registerCall } from "../../services/apiCalls";
import { AuthInput } from "../../Components/AuthInput/AuthInput";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function TeacherRegisterForm() {  
    const errorRef = useRef(null)
    //formData sera la variable donde guardaremos los datos del usuario que se registra
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        phoneNumber: "",  
        address: ""       
    })
    //Evento para capturar los datos del formulario y guardarlos dentro de formData
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const navegar = useNavigate()

    const rol= "teacher"  
    //Evento que usamos para hacer la request al servidor para registrar un usuario
    const handleSubmit = async (event) => {
        event.preventDefault();
        registerCall(formData, rol) 
            .then(data => {
                if (!data) {
                    errorRef.current.style.display = "block"
                }
                else {
                    navegar("/login")
                }
            })
    }

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <div className="row">
                <div className="col">
                    <div className="container bg-danger" ref={errorRef} style={{ display: "none" }}>This user already exists</div>
                    {/* Formulario de registro, importamos AuthInput desde componentes */}
                    <div className="card p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3"><AuthInput type={"text"} placeholder={"Name"} name={"userName"} handler={handleChange} /></div>
                            <div className="mb-3"><AuthInput type={"text"} placeholder={"Email"} name={"email"} handler={handleChange} /></div>
                            <div className="mb-3"><AuthInput type={"password"} placeholder={"Password"} name={"password"} handler={handleChange} /></div>
                            <div className="mb-3"><AuthInput type={"text"} placeholder={"PhoneNumber"} name={"phoneNumber"} handler={handleChange} /></div>
                            <div className="mb-3"><AuthInput type={"text"} placeholder={"Address"} name={"address"} handler={handleChange} /></div>
                            {/* Evento para envío de formularios */}
                            <div className="mb-3"><button type="submit" className="btn btn-primary">Register</button></div>
                        </form>
                    </div>      
                </div>
            </div>
        </div>
    )
}

