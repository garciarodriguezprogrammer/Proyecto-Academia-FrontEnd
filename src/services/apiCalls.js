import axios from "axios";


// export const loginCall = async(loginData) => {
//     try {
//         const response = await axios.post("http://localhost:5000/api/auth/login", loginData)
//         return response.data;
//     } catch (error) {
//         console.log("Error:"+ error)
//     }
// }

export const loginCall = async (loginData) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", loginData);
        
        // Verificar el token recibido en la respuesta
        if (response.data.token && typeof response.data.token === 'string' && response.data.token.trim() !== '') {
            console.log('El token recibido es válido:', response.data.token);
            // Aquí puedes continuar con el flujo de tu aplicación
            // por ejemplo, almacenar el token en el almacenamiento local
        } else {
            console.log('El token recibido no es válido o está vacío:', response.data.token);
            // Aquí puedes manejar el caso en que el token no sea válido, como mostrar un mensaje de error al usuario.
        }

        return response.data;
    } catch (error) {
        console.log("Error: " + error);
    }
}

export const registerCall = async(formData, rol) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/register/" + rol, formData)       
        return response.data;
    } catch (error) {
        console.log("Error:"+ error)
    }
}

// export const myAppointmentsCall = async(token, id) => {
//     try {
//         const response = await axios.get("http://localhost:3000/api/appointments/getAppointmentByClient/" + id, {
//             headers: {"Authorization": `Bearer ${token}`}
//         })        
//         return response.data   
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// } 

// export const myAppointmentsCallArtist = async(token, id) => {
//     try {
//         const response = await axios.get("http://localhost:3000/api/appointments/getAppointmentByArtist/" + id, {
//             headers: {"Authorization": `Bearer ${token}`}
//         })        
//         return response.data   
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// } 

// export const myAppointmentsCallAdmin = async(token) => {
//     const res = await axios.get("http://localhost:3000/api/appointments/getAppointments", {
//         headers: {"Authorization": `Bearer ${token}`}
//     })
//     return res.data
// }



// export const DeleteAppointment = async(token, id) => {
//     try {
//         const response = await axios.delete("http://localhost:3000/api/appointments/deleteAppointment/" + id, {
//             headers: {"Authorization": `Bearer ${token}`}
//         }) 
//         console.log(response.data)    
//         return response.data
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// } 
// export const DeleteUsers = async(token, id) => {
//     try {
//         const response = await axios.delete("http://localhost:3000/api/users/deleteUserById/" + id, {
//             headers: {"Authorization": `Bearer ${token}`}
//         }) 
//         console.log(response.data)    
//         return response.data
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// } 

// export const getArtistById = async(token, id) => {
//     try {
//         const response = await axios.get("http://localhost:3000/api/users/getArtistById/" + id, {
//             headers: {"Authorization": `Bearer ${token}`}
//         }) 
//         console.log(response.data)    
//         return response.data
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// } 


// export const BringAllUsers = async(token) => {
//     const res = await axios.get("http://localhost:3000/api/users/getUsers", {
//         headers: {"Authorization": `Bearer ${token}`}
//     })
//     return res.data
// }

// export const GetProfileData = async(token, id) => {
//     try {
//         const response = await axios.get("http://localhost:3000/api/users/userId/" + id, {
//             headers: {"Authorization": `Bearer ${token}`}
//         })     
//         return response.data
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// } 

// export const GetArtists = async(token) => {
//     try {
//         const response = await axios.get("http://localhost:3000/api/artist/getArtists/", {
//             headers: {"Authorization": `Bearer ${token}`}
//         })     
//         return response.data
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// }

// export const GuardarCita = async(datosCita, token) => {
//     try {
//         const response = await axios.post("http://localhost:3000/api/appointments/createAppointment/", datosCita, {
//             headers: {"Authorization": `Bearer ${token}`}
//         })     
//         return response.data
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// }

// export const UpdateAppointment = async(token, formData, id) => {
//     try {
//         const response = await axios.patch("http://localhost:3000/api/appointments/modifyAppointment/" + id, formData, {
//             headers: {"Authorization": `Bearer ${token}`}
//         })     
//         return response.data
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// }

// export const UpdateUserData = async(token, id, formData) => {
//     try {
//         const response = await axios.patch("http://localhost:3000/api/users//modifyProfile/" + id, formData, {
//             headers: {"Authorization": `Bearer ${token}`}
//         })     
//         return response.data
//     } catch (error) {
//         console.error("Error:" + error) 
//     }
// }

// export default {loginCall}







