import "./AllUsersCard.css"

export const AllUsersCard = ({ userName, email, id, eliminarUsuario, rol }) => {


    return (
        <div className="appointment-card" key={id}>
            <div className="card-content">
                <h2 id="userName" className="class-detail">{userName}</h2>
                <h2 id="email" className="class-detail">{email}</h2>
                {rol !== 'admin' && ( // Verifico si el rol es distinto de 'admin'
                    <button className="btn btn-danger" onClick={() => eliminarUsuario(id)}>Eliminar</button>
                )}
            </div>
        </div>
    );
}

