import { useEffect, useState } from "react";
import API from "../services/api";
import {
    FaTasks,
    FaFolderOpen,
    FaCheckCircle,
    FaClock,
    FaBolt,
    FaCalendarAlt
} from "react-icons/fa";

function Dashboard() {

    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const taskResponse = await API.get("/tasks");
            const projectResponse = await API.get("/projects");

            setTasks(taskResponse.data);
            setProjects(projectResponse.data);

        } catch (error) {

            console.log(error);

        }

    };

    const completed = tasks.filter(
        task => task.status === "Completed"
    ).length;

    const pending = tasks.filter(
        task => task.status !== "Completed"
    ).length;

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (

        <div className="container mt-4">

            <div className="welcome-card">

                <div>

                    <h2>👋 Welcome Back, Gokul</h2>

                    <p>

                        Stay organized and manage your work efficiently.

                    </p>

                    <small>

                        <FaCalendarAlt className="me-2"/>

                        {today}

                    </small>

                </div>

                <div className="welcome-icon">

                    <FaBolt />

                </div>

            </div>

            <div className="stats-grid">

                <div className="stat-card blue">

                    <FaTasks size={40}/>

                    <h3>{tasks.length}</h3>

                    <p>Total Tasks</p>

                </div>

                <div className="stat-card green">

                    <FaFolderOpen size={40}/>

                    <h3>{projects.length}</h3>

                    <p>Projects</p>

                </div>

                <div className="stat-card purple">

                    <FaCheckCircle size={40}/>

                    <h3>{completed}</h3>

                    <p>Completed</p>

                </div>

                <div className="stat-card orange">

                    <FaClock size={40}/>

                    <h3>{pending}</h3>

                    <p>Pending</p>

                </div>

            </div>

            <div className="card mt-4">

                <div className="card-body">

                    <h4>Recent Tasks</h4>

                    <small className="text-muted">

                        Latest 5 tasks in your workspace

                    </small>

                    <hr/>

                    {

                        tasks.length === 0 ?

                            <div className="text-center py-5">

                                <h2>📭</h2>

                                <h5>No Tasks Available</h5>

                                <p>Create your first task.</p>

                            </div>

                            :

                            <table className="table table-hover align-middle">

                                <thead>

                                <tr>

                                    <th>Task</th>
                                    <th>Status</th>
                                    <th>Priority</th>

                                </tr>

                                </thead>

                                <tbody>

                                {

                                    tasks.slice(0,5).map(task=>(

                                        <tr key={task.id}>

                                            <td>

                                                <strong>

                                                    {task.title}

                                                </strong>

                                                <br/>

                                                <small>

                                                    {task.description}

                                                </small>

                                            </td>

                                            <td>

                                                <span className={
                                                    task.status==="Completed"
                                                        ? "badge bg-success"
                                                        : task.status==="Pending"
                                                            ? "badge bg-warning text-dark"
                                                            : "badge bg-primary"
                                                }>

                                                    {task.status}

                                                </span>

                                            </td>

                                            <td>

                                                <span className={
                                                    task.priority==="High"
                                                        ? "badge bg-danger"
                                                        : task.priority==="Medium"
                                                            ? "badge bg-warning text-dark"
                                                            : "badge bg-success"
                                                }>

                                                    {task.priority}

                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                }

                                </tbody>

                            </table>

                    }

                </div>

            </div>

        </div>

    );

}

export default Dashboard;