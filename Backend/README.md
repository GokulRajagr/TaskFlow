# TASKFLOW BACKEND

TaskFlow Backend is a REST API developed using Spring Boot and MySQL. It provides APIs to manage projects and tasks for the TaskFlow application.

----------------------------------------

FEATURES

- RESTful APIs
- Task CRUD Operations
- Project CRUD Operations
- Spring Data JPA
- MySQL Database Integration
- Layered Architecture
- Exception Handling

----------------------------------------

TECH STACK

BACKEND

- Java 21
- Spring Boot
- Spring Data JPA
- Maven

DATABASE

- MySQL

----------------------------------------

PROJECT STRUCTURE

src/main/java

- controller
- service
- repository
- model
- exception

----------------------------------------

API ENDPOINTS

PROJECT APIs

GET    /projects

GET    /projects/{id}

POST   /projects

PUT    /projects/{id}

DELETE /projects/{id}

TASK APIs

GET    /tasks

GET    /tasks/{id}

POST   /tasks

PUT    /tasks/{id}

DELETE /tasks/{id}

----------------------------------------

HOW TO RUN

1. Configure MySQL in application.properties.

2. Create the database.

3. Run the application.

```bash
mvn spring-boot:run
```

----------------------------------------

DEVELOPER

Gokul Raj

BE Computer Science and Engineering