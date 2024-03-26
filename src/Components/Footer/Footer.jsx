import React from "react";
 import "./Footer.css"


export const Footer = () => {
    return (
        <div className="footer-container">
            {/* Contenido de tu aplicación */}
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
