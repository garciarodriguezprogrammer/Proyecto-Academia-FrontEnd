import { Link } from "react-router-dom";
import './Home.css';

export const Home = () => {
    return (
        <div className="container-fluid home-contain d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="text-center">
                    <span className="brand-text-all logo">All</span>
                    <span className="brand-text-number logo">4</span>
                    <span className="brand-text-dancing logo">dancing</span>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <Link to="/login" className="btn btn-primary mr-md-2 mr-0 mb-2 mb-md-0">Iniciar sesión</Link>
                    <Link to="/register" className="btn btn-secondary">Registrarse</Link>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2 col-6">
                            <div className="hover-effect imgDiv">
                                <img src="/img/Tango.jpg" alt="Imagen 1" className="img-fluid" />
                                <div className="overlay">
                                    <p>Tango:<br/> ¡Deja que la música te guíe!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="hover-effect imgDiv">
                                <img src="/img/Danza Contemporánea.jpg" alt="Imagen 2" className="img-fluid" />
                                <div className="overlay">
                                    <p>Danza Contemporánea: Explora tu creatividad sin límites</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="hover-effect imgDiv">
                                <img src="/img/Kizomba1.JPG" alt="Imagen 2" className="img-fluid" />
                                <div className="overlay">
                                    <p>Kizomba: <br/>Explora la conexión profunda entre el cuerpo y el ritmo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="hover-effect imgDiv">
                                <img src="/img/Bachata.jpg" alt="Imagen 2" className="img-fluid" />
                                <div className="overlay">
                                    <p>Bachata: <br/>la buena energía que contagia en ocho tiempos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="hover-effect imgDiv">
                                <img src="/img/Salsa1.jpg" alt="Imagen 2" className="img-fluid" />
                                <div className="overlay">
                                    <p>Salsa: <br/>la felicidad en seis tiempos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
