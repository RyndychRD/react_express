import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>CRUD Сотрудники</h1>
            <div className="links">
                <Link to="/">Таблица</Link>
                <Link to="/create" className="btn btn-sm btn-success mx-1">Новый сотрудник</Link>
            </div>
        </nav>
    );
}

export default Navbar;