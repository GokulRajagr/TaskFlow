import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaTrash,
    FaEdit,
    FaSearch,
    FaPlus,
    FaTasks
} from "react-icons/fa";
import API from "../services/api";

function TaskList() {

    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const response = await API.get("/tasks");
            setTasks(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async (id) => {

        if (!window.confirm("Delete this task?")) return;

        try {

            await API.delete(`/tasks/${id}`);

            loadTasks();

        } catch (error) {

            alert("Unable to delete task");

        }

    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(search.toLowerCase())
    );

    const statusClass = (status) => {

        switch (status) {

            case "Completed":
                return "badge rounded-pill bg-success";

            case "Pending":
                return "badge rounded-pill bg-warning text-dark";

            default:
                return "badge rounded-pill bg-primary";

        }

    };

    const priorityClass = (priority) => {

        switch (priority) {

            case "High":
                return "badge rounded-pill bg-danger";

            case "Medium":
                return "badge rounded-pill bg-warning text-dark";

            default:
                return "badge rounded-pill bg-success";

        }

    };

    return (

        <div className="task-card">

            <div className="task-header">

                <div>

                    <h2>

                        <FaTasks className="me-2"/>

                        Task Management

                    </h2>

                    <p className="text-muted">

                        Organize, track and manage your daily work.

                    </p>

                </div>

                <Link className="btn btn-primary px-4" to="/tasks/add">

                    <FaPlus className="me-2"/>

                    New Task

                </Link>

            </div>

            <div className="search-box">

                <FaSearch/>

                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />

            </div>

            {

                filteredTasks.length===0 ?

                    <div className="text-center py-5">

                        <h2>📭</h2>

                        <h4>No Tasks Found</h4>

                        <p className="text-muted">

                            Click <b>New Task</b> to create your first task.

                        </p>

                    </div>

                    :

                    <table className="table table-hover align-middle">

                        <thead>

                        <tr>

                            <th>Task</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Actions</th>

                        </tr>

                        </thead>

                        <tbody>

                        {

                            filteredTasks.map(task=>(

                                <tr key={task.id}>

                                    <td>

                                        <strong>

                                            {task.title}

                                        </strong>

                                        <br/>

                                        <small className="text-muted">

                                            {task.description}

                                        </small>

                                    </td>

                                    <td>

                                        <span className={statusClass(task.status)}>

                                            {task.status}

                                        </span>

                                    </td>

                                    <td>

                                        <span className={priorityClass(task.priority)}>

                                            {task.priority}

                                        </span>

                                    </td>

                                    <td>

                                        <Link
                                            className="btn btn-outline-warning btn-sm me-2"
                                            to={`/tasks/edit/${task.id}`}
                                        >

                                            <FaEdit/>

                                        </Link>

                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={()=>deleteTask(task.id)}
                                        >

                                            <FaTrash/>

                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                        </tbody>

                    </table>

            }

        </div>

    );

}

export default TaskList;