import "./AllUsersCard.css"

export const AllUsersCard = ({userName, email, id, eliminarUsuario}) => {
    return(
        <div className="appointment-card" key={id}>
            <div className="card-content">
            <h2 id="userName">{userName}</h2>
            <h2 id="email">{email}</h2>
            <button className="btn btn-danger" onClick={() => eliminarUsuario(id)}>Eliminar</button>
           
            </div>
        </div>
    );

}

