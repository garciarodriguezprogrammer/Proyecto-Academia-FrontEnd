import { Navigate, useNavigate } from "react-router-dom"
import './FirstView.css'

export const FirstView = () => {

    const navegar = useNavigate()

    const goHomeButton = () => {
        setTimeout(() => {
            navegar("/home")
        }, 1300)
    }

    return (
        <>
            <div className="welcome-container">
                <p>Bienvenido a</p>
                <p><strong>All4dancing</strong></p>
                <p>estás a un</p>
                <button className="cta-button" onClick={() => goHomeButton()}>Click</button>
                <p>de convertirte en el gran bailador que esperas</p>
            </div>
            <div className="video-container">
                <div class="welcome-container">
                    <video autoPlay muted loop id="video-background">
                        <source src="../../img/videoDance.mp4" type="video/mp4" />
                    </video>
                    <div class="content">
                        {/* <!-- Aquí colocarías el contenido que quieres que aparezca sobre el video de fondo --> */}
                    </div>
                </div>
            </div>
        </>
    )
}