import { useEffect, useState } from 'react'
import { BringAllUsers } from '../../services/apiCalls'
import { AllUsersCard } from '../../Components/AllUsersCard/AllUsersCard'
import "./AllUsers.css"
//import { DeleteUsers } from '../../services/apiCalls'
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux AHORA


export const AllUsers = () => {
    const [users, setUsers] = useState([]) //Funcion que nos permite acceder y actualizar el estado de users
    const token = useSelector(state => state.auth.token)


    useEffect(() => {         
        BringAllUsers(token)
        .then((users) => {
             setUsers(users)
         })        
    }, [])

    const eliminarUsuario = (id) => {
        const token = localStorage.getItem('token')
        DeleteUsers(token, id)
            .then((res) => {
                //Para volver a cargar las citas, y que desaparezca la que se ha eliminado
                const updateUsers = users.filter(user => user.id !== id) 
                setUsers(updateUsers)
            })
    }

    return (
        <>
        <div className="miDiv">
            <div className="citasContainer">
                {users.length > 0 && (
                    <>
                        {users.map((user) => {
                            return (<AllUsersCard
                                key={user.id}                                
                                userName={user.userName}
                                email={user.email}
                                eliminarUsuario={() => eliminarUsuario(user.id)}
                                >
                            </AllUsersCard>
                            )
                        })}
                    </>
                )

                }

            </div>
        </div>
        </>
    )

}