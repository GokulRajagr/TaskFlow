import { useEffect, useState } from "react";
import {
    FaFolderOpen,
    FaTrash,
    FaPlus,
    FaProjectDiagram,
    FaCalendarAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import API from "../services/api";

function ProjectList() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {

        try {

            const response = await API.get("/projects");

            setProjects(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteProject = async (id) => {

        if (!window.confirm("Delete this project?")) return;

        try {

            await API.delete(`/projects/${id}`);

            loadProjects();

        } catch (error) {

            alert("Unable to delete project");

        }

    };

    return (

        <div className="project-page">

            <div className="project-header">

                <div>

                    <h2>

                        <FaProjectDiagram className="me-2"/>

                        Project Management

                    </h2>

                    <p className="text-muted">

                        Organize and manage all your projects.

                    </p>

                </div>

                <Link
                    className="btn btn-primary px-4"
                    to="/projects/add"
                >

                    <FaPlus className="me-2"/>

                    New Project

                </Link>

            </div>

            {

                projects.length===0 ?

                    <div className="text-center py-5">

                        <h2>📁</h2>

                        <h4>No Projects Available</h4>

                        <p className="text-muted">

                            Create your first project.

                        </p>

                    </div>

                    :

                    <div className="project-grid">

                        {

                            projects.map(project => (

                                <div
                                    className="project-card"
                                    key={project.id}
                                >

                                    <div className="project-icon">

                                        <FaFolderOpen
                                            size={45}
                                            color="#2563eb"
                                        />

                                    </div>

                                    <h4>

                                        {project.name}

                                    </h4>

                                    <p className="text-muted">

                                        {project.description}

                                    </p>

                                    <div className="project-footer">

                                        <small>

                                            <FaCalendarAlt className="me-2"/>

                                            Active Project

                                        </small>

                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => deleteProject(project.id)}
                                        >

                                            <FaTrash className="me-1"/>

                                            Delete

                                        </button>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

            }

        </div>

    );

}

export default ProjectList;