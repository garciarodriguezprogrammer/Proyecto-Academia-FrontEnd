import { Navigate, useNavigate } from "react-router-dom"
import './FirstView.css'

export const FirstView = () => {

    const navegar = useNavigate()

    const goHomeButton = () => {
        setTimeout(() => {
            navegar("/home")
        }, 800)
    }

    return (
        <>
            <div className="welcome-container">
                <p>Bienvenido a</p>
                <div>
                    <p>
                        <span className="all-text logo">All</span>
                        <span className="number-text logo">4</span>
                        <span className="dancing-text logo">dancing</span>

                    </p>
                </div>
                <p>estás a un</p>
                <button className="cta-button" onClick={() => goHomeButton()}>Click</button>
                <p>de convertirte en el gran bailador que esperas</p>
            </div>
            <div className="video-container">
                <div className="welcome-container">
                    <video autoPlay muted loop id="video-background">
                        <source src="/img/videoDance.mp4" type="video/mp4" />
                    </video>
                    <div className="content">
                    </div>
                </div>
            </div>
        </>
    )
}