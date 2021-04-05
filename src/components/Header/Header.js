import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.png'
import { UserContext } from '../../App';

const Header = () => {
    const [user, setUser] = useContext(UserContext)

    return (
        <div className="header-main">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" height="50px" />
                    </Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4 nav-custom">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mr-4 nav-custom">
                            <Link className="nav-link" to="/documentation">Documentation</Link>
                        </li>
                        <li className="nav-item mr-4 nav-custom">
                            <Link className="nav-link" to="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            {
                                user.email ? <Link className="nav-link btn btn-custom btn-logout px-4" to="/" onClick={() => setUser({})}>Log Out</Link>
                                    : <Link className="nav-link btn btn-custom px-4" to="/login">Log In</Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;