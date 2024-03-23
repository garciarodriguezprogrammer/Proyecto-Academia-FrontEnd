// //Sitio para definir las rutas de mi aplicación para luego navegar entre ellas
 import { Navigate, Route, Routes } from "react-router-dom"
 import { Home } from "../Home/Home"
 import { LoginForm } from "../Login/Login"
 import { RegisterForm } from "../Register/Register"
import { AdminRegisterForm } from "../Register/AdminRegister"
import { TeacherRegisterForm } from "../Register/TeacherRegister"

// import { Profile } from "../Profile/Profile"
// import { GetMyAppointments } from "../MyAppiontments/MyAppointments"
// import { AdminNavBar } from "../../Components/NavBar/adminNavBar"
// import { AllUsers } from "../AllUsers/AllUsers"
// import { ArtistProfile } from "../Profile/ArtistProfile"
// import { NuevaCita } from "../NuevaCita/NuevaCita"
// import { AdminProfile } from "../Profile/AdminProfile"
// import { GetMyAppointmentsArtist } from "../MyAppiontments/MyAppointmentsArtists"
// import { GetMyAppointmentsAdmin } from "../MyAppiontments/MyAppointmentsAdmin"
// import { ModificarCita } from "../MyAppiontments/UpdateAppointment"
// import { UpdateUser } from "../Profile/UpdateUser"

 export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>} /> {/* //Para que cada vez que se indique una ruta distinta de las que tenemos aquí listadas, nos dirija a la página */}
                <Route path="/" element={<Home/>} /> 
                <Route path="/login/" element={<LoginForm/>}></Route>
                <Route path="/register/" element={<RegisterForm/>}></Route>
                <Route path="/adminRegister/" element={<AdminRegisterForm/>}></Route>
                <Route path="/teacherRegister/" element={<TeacherRegisterForm/>}></Route>
                {/* <Route path="/profile/" element={<Profile/>}></Route>
                <Route path="/getAppointments/" element={<GetMyAppointments/>}></Route>
                <Route path="/profileArtist/" element={<ArtistProfile/>}></Route>
                <Route path="/profileAdmin/" element={<AdminProfile/>}></Route>
                <Route path="/allUsers/" element={<AllUsers/>}></Route>
                <Route path="/nuevaCita/" element={<NuevaCita/>}></Route>
                <Route path="/appointmentsArtists/" element={<GetMyAppointmentsArtist/>}></Route>
                <Route path="/appointmentsAdmin/" element={<GetMyAppointmentsAdmin/>}></Route>
                <Route path="/modificarCita/" element={<ModificarCita/>}></Route>
                <Route path="/updateUser/" element={<UpdateUser/>}></Route> */}
          
            </Routes>
        </>
    )

 }