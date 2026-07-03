package com.gokul.tasktracker.service;

import com.gokul.tasktracker.entity.Project;
import com.gokul.tasktracker.exception.ResourceNotFoundException;
import com.gokul.tasktracker.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    // Get all projects
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Get project by ID
    public Project getProjectById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Project not found with id: " + id));
    }

    // Create project
    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    // Update project
    public Project updateProject(Long id, Project updatedProject) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Project not found with id: " + id));

        project.setName(updatedProject.getName());
        project.setDescription(updatedProject.getDescription());

        return projectRepository.save(project);
    }

    // Delete project
    public void deleteProject(Long id) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Project not found with id: " + id));

        projectRepository.delete(project);
    }

    // Search project by name
    public List<Project> searchProjects(String name) {
        return projectRepository.findByNameContainingIgnoreCase(name);
    }
}