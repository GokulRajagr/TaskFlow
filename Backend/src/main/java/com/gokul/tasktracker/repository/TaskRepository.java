package com.gokul.tasktracker.repository;

import com.gokul.tasktracker.entity.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    // Pagination
    Page<Task> findAll(Pageable pageable);

    // Filter by Status
    List<Task> findByStatus(String status);

    // Filter by Priority
    List<Task> findByPriority(String priority);

    // Search by Title
    List<Task> findByTitleContainingIgnoreCase(String title);

}