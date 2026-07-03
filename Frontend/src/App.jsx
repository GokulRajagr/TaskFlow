import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import ProjectList from "./components/ProjectList";
import AddProject from "./components/AddProject";
import Footer from "./components/Footer";

function App() {

    return (

        <div className="app-layout">

            <Navbar />

            <main className="main-content">

                <Routes>

                    <Route path="/" element={<Dashboard />} />

                    <Route path="/tasks" element={<TaskList />} />

                    <Route path="/tasks/add" element={<AddTask />} />

                    <Route path="/tasks/edit/:id" element={<EditTask />} />

                    <Route path="/projects" element={<ProjectList />} />

                    <Route path="/projects/add" element={<AddProject />} />

                </Routes>

                <Footer />

            </main>

        </div>

    );

}

export default App;