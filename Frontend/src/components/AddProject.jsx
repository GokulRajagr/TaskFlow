import { useState } from "react";
import { FaFolderPlus, FaSave } from "react-icons/fa";
import API from "../services/api";

function AddProject() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const saveProject = async (e) => {

        e.preventDefault();

        try {

            await API.post("/projects", {
                name,
                description
            });

            alert("✅ Project Added Successfully!");

            setName("");
            setDescription("");

        } catch (error) {

            console.log(error);

            alert("Unable to save project.");

        }

    };

    return (

        <div className="task-form-card">

            <div className="form-title">

                <h2>

                    <FaFolderPlus className="me-2"/>

                    Create New Project

                </h2>

                <p className="text-muted">

                    Add a new project to organize your work efficiently.

                </p>

            </div>

            <form onSubmit={saveProject}>

                <div className="mb-4">

                    <label className="form-label">

                        Project Name

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter project name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-4">

                    <label className="form-label">

                        Description

                    </label>

                    <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Describe your project..."
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />

                </div>

                <button
                    className="btn btn-primary btn-lg w-100"
                >

                    <FaSave className="me-2"/>

                    Save Project

                </button>

            </form>

        </div>

    );

}

export default AddProject;