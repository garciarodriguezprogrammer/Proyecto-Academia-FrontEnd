import "./AllUsersCard.css"
//import { useSelector } from "react-redux"


// export const AllUsersCard = ({userName, email, id, eliminarUsuario}) => {
//     return(
//         <div className="appointment-card" key={id}>
//             <div className="card-content">
//             <h2 id="userName">{userName}</h2>
//             <h2 id="email">{email}</h2>
//             <button className="btn btn-danger" onClick={() => eliminarUsuario(id)}>Eliminar</button>
           
//             </div>
//         </div>
//     );

// }

export const AllUsersCard = ({ userName, email, id, eliminarUsuario, rol }) => {

    // const token = useSelector(state => state.auth.token)
    // const userRole = useSelector(state => state.auth.role); 


    return (
        <div className="appointment-card" key={id}>
            <div className="card-content">
                <h2 id="userName" className="class-detail">{userName}</h2>
                <h2 id="email" className="class-detail">{email}</h2>
                {rol !== 'admin' && ( // Verifica si el rol es distinto de 'admin'
                    <button className="btn btn-danger" onClick={() => eliminarUsuario(id)}>Eliminar</button>
                )}
            </div>
        </div>
    );
}

