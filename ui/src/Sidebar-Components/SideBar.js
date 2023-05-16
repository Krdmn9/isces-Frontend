import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const authCtx = useContext(AuthContext);

    return (
        <div>
            <img src="https://iyte.edu.tr/wp-content/uploads/2019/02/iyte-logo-transparan-360px.png" alt="IYTE Logo" />
            <button onClick={authCtx.onLogout}>Home</button>
            <Link to="/candidates">
                <button>Candidates</button>
            </Link>
            <button>Council</button>
            {authCtx.isLoggedIn && (
                <div>
                    <button onClick={authCtx.onLogout}>My Profile</button>
                    <button onClick={authCtx.onLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default SideBar;
