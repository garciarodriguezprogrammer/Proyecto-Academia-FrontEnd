import axios from "axios";

const API_URL = "http://localhost:5000/api"

export const loginCall = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, loginData);

        // Verificar el token recibido en la respuesta
        if (response.data.token && typeof response.data.token === 'string' && response.data.token.trim() !== '') {
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

export const registerCall = async (formData, rol) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register/${rol}`, formData)
        return response.data;
    } catch (error) {
        console.log("Error:" + error)
    }
}

export const myClassesCall = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/class`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error("Error:" + error)
    }
}

export const myInscriptionsCall = async (token, id) => {
    try {
        const response = await axios.get(`${API_URL}/inscription/byStudent/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error("Error:" + error)
    }
}


export const setInscriptionCall = async (token, studentId, classId) => {
    try {
        const res = await axios.post(`${API_URL}/inscription`, {
            studentId: studentId,
            classId: classId
        }, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return res.data;
    } catch (error) {
        console.error("Error al establecer la inscripción:", error);
        throw error;
    }
}

export const getStudentId = async (userId, token) => {
    try {
        const res = await axios.get(`${API_URL}/students/getStudentId/${userId}`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            });
        return res.data;
    } catch (error) {
        console.error("Error al recuperar el id de student:", error);
        throw error;
    }
}

export const getTeacherIdCall = async (userId, token) => {
    try {
        const res = await axios.get(`${API_URL}/teachers/getTeacherId/${userId}`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            });
        return res.data;
    } catch (error) {
        console.error("Error al recuperar el id de student:", error);
        throw error;
    }
}

export const deleteClassCall = async(id, token) => {
    try {
        const response = await axios.delete(`${API_URL}/class/${id}`, {
            headers: {"Authorization": `Bearer ${token}`}
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Error:" + error)
    }
}


export const createClassCall = async (token, classesData) => {
    try {
        const res = await axios.post(`${API_URL}/class`, classesData, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return res.data;
    } catch (error) {
        console.error("Error al crear la clase:", error);
        throw error;
    }
}

export const BringAllUsers = async(token) => {
    const res = await axios.get(`${API_URL}/users`, {
        headers: {"Authorization": `Bearer ${token}`}
    })
    return res.data
}


export const DeleteUsers = async(token, id) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${id}`, {
            headers: {"Authorization": `Bearer ${token}`}
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Error:" + error)
    }
}

export const ProfileDataCall = async(token, id) => {
    try {
        const response = await axios.get(`${API_URL}/users/${id}`, {
            headers: {"Authorization": `Bearer ${token}`}
        })
        return response.data
    } catch (error) {
        console.error("Error:" + error)
    }
}

export const UpdateUserCall = async(token, id, formData) => {
    try {
        const response = await axios.patch(`${API_URL}/users/${id}`, formData, {
            headers: {"Authorization": `Bearer ${token}`}
        })
        return response.data
    } catch (error) {
        console.error("Error:" + error)
    }
}

export const GetTeachersCall = async(token) => {
    try {
        const response = await axios.get(`${API_URL}/teachers`, {
            headers: {"Authorization": `Bearer ${token}`}
        })
        return response.data
    } catch (error) {
        console.error("Error:" + error)
    }
}

export const teacherClassesCall = async (token, id) => {
    try {
        const response = await axios.get(`${API_URL}/class/getClassesByTeacher/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error("Error:" + error)
    }
}

export const updateClassCall = async(token, formData, id) => {
    try {
        const response = await axios.patch(`${API_URL}/class/${id}`, formData, {
            headers: {"Authorization": `Bearer ${token}`}
        })
        return response.data
    } catch (error) {
        console.error("Error:" + error)
    }
}
















