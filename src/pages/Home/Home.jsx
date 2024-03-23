import { Link } from "react-router-dom"
import './Home.css'

export const Home = () => {



    return (
        <div>
            <div>
                <h3>Proyecto Academia</h3>
            </div>
            <div>
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Register</Link>
            </div>
        </div>
    )
}