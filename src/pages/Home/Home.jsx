import { Link } from "react-router-dom";
import './Home.css';

export const Home = () => {
    return (
        <div className="container-fluid home-container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="title">All4dancing</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <Link to="/login" className="btn btn-primary mr-2">Login</Link>
                    <Link to="/register" className="btn btn-secondary">Register</Link>
                </div>
            </div>
        </div>
    );
};
