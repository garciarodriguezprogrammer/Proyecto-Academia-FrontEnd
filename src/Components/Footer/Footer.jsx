import React from "react";
import "./Footer.css"


export const Footer = () => {
    return (
        <div className="footer-container">           
            <footer className="py-3 my-4" style={{ backgroundColor: "#f8f8f80", borderTop: "1px solid #ddd" }}>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Próximos proyectos:</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Clases de flamenco</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Clases de rumba</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Clases de rock&roll</a></li>
                </ul>
                <div className="text-center">
                    <span className="brand-text-all logo">All</span>
                    <span className="brand-text-number logo">4</span>
                    <span className="brand-text-dancing logo">dancing</span>
                </div>
            </footer>
        </div>
    )
}
