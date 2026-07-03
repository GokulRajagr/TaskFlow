import { Link, useLocation } from "react-router-dom";
import {
    FaTasks,
    FaHome,
    FaFolderOpen,
    FaPlusCircle,
    FaUserCircle,
} from "react-icons/fa";

function Navbar() {

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidebar">

            <div className="sidebar-logo">

                <FaTasks size={35} />

                <h2>TaskFlow</h2>

            </div>

            <div className="sidebar-links">

                <Link className={isActive("/") ? "active-link" : ""} to="/">
                    <FaHome />
                    Dashboard
                </Link>

                <Link className={isActive("/tasks") ? "active-link" : ""} to="/tasks">
                    <FaTasks />
                    Tasks
                </Link>

                <Link className={isActive("/projects") ? "active-link" : ""} to="/projects">
                    <FaFolderOpen />
                    Projects
                </Link>

                <Link className={isActive("/tasks/add") ? "active-link" : ""} to="/tasks/add">
                    <FaPlusCircle />
                    Add Task
                </Link>

                <Link className={isActive("/projects/add") ? "active-link" : ""} to="/projects/add">
                    <FaPlusCircle />
                    Add Project
                </Link>

            </div>

            <div className="sidebar-profile">

                <FaUserCircle size={45} />

                <div>

                    <strong>Gokul Raj</strong>

                    <br />

                    <small>Software Engineer</small>

                </div>

            </div>

        </div>
    );
}

export default Navbar;