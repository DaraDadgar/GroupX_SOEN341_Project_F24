# API Documentation

## Authentication Routes

### POST /login
- **Description**: Authenticates a user (student or teacher) and initiates a session.
- **Request**:
  - Body: 
    ```json
    {
      "email": "user@example.com",
      "password": "userpassword",
      "type": "student"  // or "teacher"
    }
    ```
- **Response**:
  - **200 OK**: 
    ```json
    {
      "Response": "VALID",
      "type": "student"  // or "teacher"
    }
    ```
  - **401 Unauthorized**: 
    ```json
    {
      "Response": "ERROR",
      "type": "None"
    }
    ```

### POST /signup
- **Description**: Registers a new user (student or teacher).
- **Request**:
  - Body:
    ```json
    {
      "email": "user@example.com",
      "password": "userpassword",
      "type": "student",  // or "teacher"
      "name": "User Name"
    }
    ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "Response": "VALID",
      "type": "student"  // or "teacher"
    }
    ```
  - **400 Bad Request**: 
    ```json
    {
      "Response": "ERROR",
      "type": "Email already in use"
    }
    ```

### GET /logout
- **Description**: Logs out the current user and clears the session.
- **Response**:
  - **200 OK**: 
    ```json
    {
      "Response": "LOGGED OUT"
    }
    ```

### GET /
- **Description**: Test route to check server status.
- **Response**:
  - **200 OK**: 
    ```text
    "test"
    ```

---

## Student Routes

### GET /students
- **Description**: Retrieves a list of all students.
- **Response**:
  - **200 OK**: 
    ```json
    [
      {
        "id": 1,
        "name": "Student Name",
        "email": "student@example.com",
        "is_available": true
      },
      ...
    ]
    ```

### GET /students/available
- **Description**: Retrieves a list of available students.
- **Response**:
  - **200 OK**: 
    ```json
    [
      {
        "id": 1,
        "name": "Available Student",
        "email": "available_student@example.com",
        "is_available": true
      },
      ...
    ]
    ```

### GET /students/<int:id>/team
- **Description**: Retrieves the team information for a specific student.
- **Parameters**:
  - `id`: ID of the student.
- **Response**:
  - **200 OK**: 
    ```json
    {
      "Response": "VALID",
      "Team": {
        "id": 1,
        "name": "Team Name"
      }
    }
    ```
  - **404 Not Found**: 
    ```json
    {
      "Response": "INVALID",
      "Reason": "Student not found"
    }
    ```

---

## Team Routes

### GET /teams
- **Description**: Retrieves a list of all teams.
- **Response**:
  - **200 OK**: 
    ```json
    [
      {
        "id": 1,
        "name": "Team Name"
      },
      ...
    ]
    ```

### GET /teams/<int:id>
- **Description**: Retrieves the students in a specific team.
- **Parameters**:
  - `id`: ID of the team.
- **Response**:
  - **200 OK**: 
    ```json
    [
      {
        "id": 1,
        "name": "Student Name",
        "email": "student@example.com"
      },
      ...
    ]
    ```

### POST /teams
- **Description**: Creates a new team.
- **Request**:
  - Body:
    ```json
    {
      "name": "Team Name",
      "student_emails": ["student1@example.com", "student2@example.com"]
    }
    ```
- **Response**:
  - **201 Created**: 
    ```json
    {
      "Response": "VALID"
    }
    ```
  - **400 Bad Request**: 
    ```json
    {
      "Response": "INVALID",
      "Reason": "Team name already exists"
    }
    ```

### DELETE /teams/<int:id>
- **Description**: Deletes a specific team.
- **Parameters**:
  - `id`: ID of the team.
- **Response**:
  - **200 OK**: 
    ```json
    {
      "Response": "VALID",
      "Reason": "Team deleted successfully"
    }
    ```
  - **404 Not Found**: 
    ```json
    {
      "Response": "INVALID",
      "Reason": "Team not found"
    }
    ```

### PUT /teams/<int:id>
- **Description**: Updates a specific team.
- **Parameters**:
  - `id`: ID of the team.
- **Request**:
  - Body:
    ```json
    {
      "name": "New Team Name",
      "student_emails": ["student1@example.com", "student2@example.com"]
    }
    ```
- **Response**:
  - **200 OK**: 
    ```json
    {
      "Response": "VALID",
      "Reason": "Team updated successfully"
    }
    ```
  - **404 Not Found**: 
    ```json
    {
      "Response": "INVALID",
      "Reason": "Team not found"
    }
    ```

### GET /teams/<int:id>/students
- **Description**: Retrieves the students in a specific team.
- **Parameters**:
  - `id`: ID of the team.
- **Response**:
  - **200 OK**: 
    ```json
    [
      {
        "id": 1,
        "name": "Student Name",
        "email": "student@example.com"
      },
      ...
    ]
    ```

---

## Teacher Routes

### GET /teachers
- **Description**: Retrieves a list of all teachers.
- **Response**:
  - **200 OK**: 
    ```json
    [
      {
        "id": 1,
        "name": "Teacher Name",
        "email": "teacher@example.com"
      },
      ...
    ]
    ```
    
## Assessments Routes

### GET /assessments
- **Description**: Retrieves a list of all assessments.
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "id": 1,
        "receiver_id": 2,
        "sender_id": 1,
        "cooperation_score": 4,
        "conceptual_contribution_score": 5,
        "practical_contribution_score": 3,
        "work_ethic_score": 4,
        "comments": "Great teamwork!"
      },
      ...
    ]
    ```

### GET /assessments/<int:id>
- **Description**: Retrieves a specific assessment by its ID.
- **Parameters**:
  - `id`: ID of the assessment.
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": 1,
      "receiver_id": 2,
      "sender_id": 1,
      "cooperation_score": 4,
      "conceptual_contribution_score": 5,
      "practical_contribution_score": 3,
      "work_ethic_score": 4,
      "comments": "Great teamwork!"
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "Response": "INVALID",
      "Reason": "Assessment not found"
    }
    ```

### POST /assessments
- **Description**: Creates a new assessment for a team member.
- **Request**:
  - Body:
    ```json
    {
      "sender_id": 1,
      "receiver_id": 2,
      "cooperation_score": 4,
      "conceptual_contribution_score": 5,
      "practical_contribution_score": 3,
      "work_ethic_score": 4,
      "comments": "Good work on the project!"
    }
    ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "id": 1,
      "receiver_id": 2,
      "sender_id": 1,
      "cooperation_score": 4,
      "conceptual_contribution_score": 5,
      "practical_contribution_score": 3,
      "work_ethic_score": 4,
      "comments": "Good work on the project!"
    }
    ```
  - **400 Bad Request** (If students are not in the same team):
    ```json
    {
      "Response": "INVALID",
      "Reason": "Students are not in the same team."
    }
    ```
  - **400 Bad Request** (If assessment already exists):
    ```json
    {
      "Response": "INVALID",
      "Reason": "You have already assessed this student."
    }
    ```
  - **400 Bad Request** (If score validation fails):
    ```json
    {
      "Response": "INVALID",
      "Reason": "Scores must be between 0 and 5."
    }
    ```

### PUT /assessments/<int:id>
- **Description**: Updates an existing assessment.
- **Parameters**:
  - `id`: ID of the assessment.
- **Request**:
  - Body (optional fields):
    ```json
    {
      "cooperation_score": 3,
      "conceptual_contribution_score": 4,
      "practical_contribution_score": 3,
      "work_ethic_score": 5,
      "comments": "Updated feedback"
    }
    ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": 1,
      "receiver_id": 2,
      "sender_id": 1,
      "cooperation_score": 3,
      "conceptual_contribution_score": 4,
      "practical_contribution_score": 3,
      "work_ethic_score": 5,
      "comments": "Updated feedback"
    }
    ```
  - **400 Bad Request** (If score validation fails):
    ```json
    {
      "Response": "INVALID",
      "Reason": "Scores must be between 0 and 5."
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "Response": "INVALID",
      "Reason": "Assessment not found."
    }
    ```

### DELETE /assessments/<int:id>
- **Description**: Deletes a specific assessment.
- **Parameters**:
  - `id`: ID of the assessment.
- **Response**:
  - **200 OK**:
    ```json
    {
      "Response": "VALID",
      "Reason": "Assessment deleted successfully"
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "Response": "INVALID",
      "Reason": "Assessment not found"
    }
    ```