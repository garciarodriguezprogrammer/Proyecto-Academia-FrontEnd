// import React from "react";

// export const Footer = () => {
//     return (
//         <footer className="py-3 my-4" style={{backgroundColor: "#f8f8f8", borderTop: "1px solid #ddd", position: "fixed", bottom: "0", width: "100%", zIndex: "100" }}>
//             <div className="container">
//                 <ul className="nav justify-content-center border-bottom pb-3 mb-3">
//                     <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Inicio</a></li>
//                     <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Locales</a></li>
//                     <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contáctenos</a></li>
//                     <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Quiénes somos</a></li>
//                 </ul>
//                 <p className="text-center text-body-secondary">&copy; 2024 Proyecto Academia</p>
//             </div>
//         </footer>
//     )
// }

import React from "react";

export const Footer = () => {
    return (
        <div className="container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1 }}>
                {/* Contenido de tu aplicación */}
            </div>
            <footer className="py-3 my-4" style={{ backgroundColor: "#f8f8f8", borderTop: "1px solid #ddd" }}>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
                <p className="text-center text-body-secondary">&copy; 2024 Company, Inc</p>
            </footer>
        </div>
    )
}

