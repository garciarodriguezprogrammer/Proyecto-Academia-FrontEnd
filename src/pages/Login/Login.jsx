import { useState } from "react";
import { loginCall } from "../../services/apiCalls"
import { AuthInput } from "../../Components/AuthInput/AuthInput";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/AuthSlice"

export function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const errorRef = useRef(null)
    const dispatch = useDispatch()
    const navegar = useNavigate();
    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        loginCall(loginData)
            .then((res) => {
                console.log(res)
                if (!res) {
                    errorRef.current.style.display = "block"
                    navegar("/login");
                    return null;
                } else {
                    const decodedToken = jwtDecode(res.token)                
                    const isStudent = decodedToken.rol.includes("student") //He cambiado user por student
                    const isTeacher = decodedToken.rol.includes("teacher") //he cambiado artist por teacher
                    const isAdmin = decodedToken.rol.includes("admin")
                    //Mediante dispatch guardamos el token y el id
                    dispatch(setCredentials({
                        token: res.token,
                        userId: decodedToken.id
                    }))
                    
                    if (isStudent) {
                        navegar("/profile")
                    } else if (isTeacher) {
                        navegar("/profileTeacher")
                    } else if (isAdmin) {
                        navegar("/profileAdmin")
                    }
                }
            })

    }
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="row">
                <div className="col">
                    <p className="bg-danger" ref={errorRef} style={{ display: "none" }}>Your email or password is wrong</p>

                    <div className="card p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <AuthInput
                                    type="text"
                                    placeholder="Email"
                                    handler={handleChange}
                                    name="email"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <AuthInput
                                    type="password"
                                    placeholder="Password"
                                    handler={handleChange}
                                    name="password"
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className=" btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}



