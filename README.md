# COLORS (LAMP Stack Web Application)

## Overview

COLORS is a simple full-stack web application built using the LAMP stack.
The application demonstrates communication between a browser-based front end and a PHP backend API that interacts with a MySQL database. Users are able to authenticate and manage stored color data through API requests handled by the server.

The purpose of this project is to practice basic full-stack architecture concepts including:

* Client-server communication
* REST-style API endpoints
* Database interaction
* Separation of front-end and back-end code

---

## Technologies Used

* **Linux / Ubuntu** – hosting environment
* **Apache** – web server
* **MySQL** – relational database
* **PHP** – backend API
* **HTML / CSS / JavaScript** – frontend interface
* **Git & GitHub** – version control

---

## Project Structure

```
colors-lamp/
├─ api/                 # PHP backend endpoints
├─ public/              # Front-end application
│  ├─ index.html
│  ├─ css/
│  └─ js/
├─ README.md
├─ LICENSE.md
└─ .gitignore
```

---

## Setup Instructions (High-Level)

1. Install or access a LAMP server (local machine or remote server).
2. Place the project inside the Apache web directory (ex: `/var/www/html/`).
3. Create a MySQL database.
4. Create the required tables according to the lab schema.
5. Configure database credentials in a local configuration file (not included in repository).
6. Start Apache and MySQL services.

---

## Running the Application

1. Open a browser and navigate to:

```
http://<server-address>/colors-lamp/public/
```

2. The frontend sends requests to the backend API located in:

```
http://<server-address>/colors-lamp/api/
```

3. The API processes requests and interacts with the MySQL database.

---

## Assumptions & Limitations

* Database credentials and server configuration files are intentionally excluded from version control.
* This project is designed for educational purposes and does not include production security features such as encryption, rate limiting, or input sanitization beyond basic validation.
* The project assumes the database schema already exists.

---

## AI Usage

AI assistance (ChatGPT) was used to help draft repository documentation and organize project structure guidance in accordance with class policy.
