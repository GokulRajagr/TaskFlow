import { useState } from "react";
import { FaPlusCircle, FaTasks } from "react-icons/fa";
import API from "../services/api";

function AddTask() {

    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "",
        priority: "",
        dueDate: ""
    });

    const handleChange = (e) => {

        setTask({
            ...task,
            [e.target.name]: e.target.value
        });

    };

    const saveTask = async (e) => {

        e.preventDefault();

        try {

            await API.post("/tasks", task);

            alert("✅ Task Added Successfully!");

            setTask({
                title: "",
                description: "",
                status: "",
                priority: "",
                dueDate: ""
            });

        } catch (error) {

            console.log(error);

            alert("Unable to save task.");

        }

    };

    return (

        <div className="task-form-card">

            <div className="form-title">

                <h2>

                    <FaTasks className="me-2"/>

                    Create New Task

                </h2>

                <p className="text-muted">

                    Fill in the details below to add a new task.

                </p>

            </div>

            <form onSubmit={saveTask}>

                <div className="mb-4">

                    <label className="form-label">

                        Task Title

                    </label>

                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Enter task title"
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
                        placeholder="Describe the task..."
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

                            <option value="">Choose Status</option>

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

                            <option value="">Choose Priority</option>

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
                    className="btn btn-primary btn-lg w-100"
                >

                    <FaPlusCircle className="me-2"/>

                    Save Task

                </button>

            </form>

        </div>

    );

}

export default AddTask;