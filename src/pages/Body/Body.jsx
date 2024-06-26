// //Sitio para definir las rutas de mi aplicación para luego navegar entre ellas
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { LoginForm } from "../Login/Login"
import { RegisterForm } from "../Register/Register"
import { AdminRegisterForm } from "../Register/AdminRegister"
import { TeacherRegisterForm } from "../Register/TeacherRegister"
import { Classes } from "../Classes/Classes"
import { Inscriptions } from "../inscriptions/Inscriptions"
import { AdminClasses } from "../adminClasses/adminClasses"
import { CreateClasses } from "../adminClasses/CreateClasses"
import { AllUsers } from "../AllUsers/AllUsers" 
import { Profile } from "../Profile/Profile" 
import { UpdateUser } from "../Profile/UpdateUser" 
import { TeacherClasses } from "../Classes/TeacherClasses"
import { UpdateClass } from "../adminClasses/UpdateClass"
import { FirstView } from "../firstView/FirstView"




export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/home" />} /> 
                <Route path="/" element={<FirstView/>}></Route>
                <Route path="/home" element={<Home />} />
                <Route path="/login/" element={<LoginForm />}></Route>
                <Route path="/register/" element={<RegisterForm />}></Route>
                <Route path="/adminRegister/" element={<AdminRegisterForm />}></Route>
                <Route path="/teacherRegister/" element={<TeacherRegisterForm />}></Route>
                <Route path="/classes/" element={<Classes />}></Route>
                <Route path="/myInscriptions/" element={<Inscriptions/>}></Route>
                <Route path="/adminClasses/" element={<AdminClasses/>}></Route>
                <Route path="/createClasses/" element={<CreateClasses/>}></Route>
                <Route path="/allUsers/" element={<AllUsers/>}></Route>  
                <Route path="/profile/" element={<Profile/>}></Route>
                <Route path="/updateUser/" element={<UpdateUser/>}></Route>
                <Route path="/teacherClasses/" element={<TeacherClasses/>}></Route>
                <Route path="/updateClass/" element={<UpdateClass/>}></Route>
                
                

            </Routes>
        </>
    )

}