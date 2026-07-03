import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaSave } from "react-icons/fa";
import API from "../services/api";

function EditTask() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "",
        priority: "",
        dueDate: ""
    });

    useEffect(() => {
        loadTask();
    }, []);

    const loadTask = async () => {

        try {

            const response = await API.get(`/tasks/${id}`);

            setTask(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setTask({
            ...task,
            [e.target.name]: e.target.value
        });

    };

    const updateTask = async (e) => {

        e.preventDefault();

        try {

            await API.put(`/tasks/${id}`, task);

            alert("✅ Task Updated Successfully!");

            navigate("/tasks");

        } catch (error) {

            console.log(error);

            alert("Unable to update task.");

        }

    };

    return (

        <div className="task-form-card">

            <div className="form-title">

                <h2>

                    <FaEdit className="me-2"/>

                    Edit Task

                </h2>

                <p className="text-muted">

                    Update your task details below.

                </p>

            </div>

            <form onSubmit={updateTask}>

                <div className="mb-4">

                    <label className="form-label">

                        Task Title

                    </label>

                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={task.title}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="mb-4">

                    <label className="form-label">

                        Description

                    </label>

                    <textarea
                        rows="4"
                        name="description"
                        className="form-control"
                        value={task.description}
                        onChange={handleChange}
                    />

                </div>

                <div className="row">

                    <div className="col-md-6 mb-4">

                        <label className="form-label">

                            Status

                        </label>

                        <select
                            name="status"
                            className="form-select"
                            value={task.status}
                            onChange={handleChange}
                        >

                            <option>Pending</option>

                            <option>In Progress</option>

                            <option>Completed</option>

                        </select>

                    </div>

                    <div className="col-md-6 mb-4">

                        <label className="form-label">

                            Priority

                        </label>

                        <select
                            name="priority"
                            className="form-select"
                            value={task.priority}
                            onChange={handleChange}
                        >

                            <option>High</option>

                            <option>Medium</option>

                            <option>Low</option>

                        </select>

                    </div>

                </div>

                <div className="mb-4">

                    <label className="form-label">

                        Due Date

                    </label>

                    <input
                        type="date"
                        name="dueDate"
                        className="form-control"
                        value={task.dueDate}
                        onChange={handleChange}
                    />

                </div>

                <button
                    className="btn btn-success btn-lg w-100"
                >

                    <FaSave className="me-2"/>

                    Update Task

                </button>

            </form>

        </div>

    );

}

export default EditTask;