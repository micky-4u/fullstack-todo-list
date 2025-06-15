# Application Deployment with Docker Compose (Full Stack)

This application consists of **a frontend (React)**, **a backend (Express API)**, and **a MongoDB database**.  
Docker Compose is used to deploy and connect these services together.


---

## 🔹 Services 🔹

- **Frontend** — React application (running on port 5173).
- **Backend** — Express API (running on port 3000).
- **Database** — MongoDB (running on port 27017).

---

## 🔹 Networks 🔹

We have **two networks** to enable communication between services safely:

- `todo-network-backend`: for **backend and MongoDB** communication.
- `todo-network-frontend`: for **backend and frontend** communication.

---

## 🔹 Deliverable Files Location 🔹

- **Docker Compose File**:  
  `/docker-compose.yml`

- **Frontend Dockerfile**:   
  `Frontend/frontend.Dockerfile`

- **Backend Dockerfile**:   
  `Backend/backend.Dockerfile`

- **Database Dockerfile**:   
  `Backend/DB/db.Dockerfile`

---

## 🔹 Deployment instructions 🔹

### 🔹 Build the containers:

```bash
docker-compose -f todo-app/fullstack-todo-list/docker-compose.yml build
