# Albania Religious Sites REST API

This project is a **REST API for mosques, churches, and monasteries in Albania** built with **SvelteKit** and **MySQL**.  
It demonstrates clean REST design, Basic Authentication, and proper HTTP status codes.  

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Setup](#setup)  
- [Database](#database)  
- [API Endpoints](#api-endpoints)  
- [Authentication](#authentication)  
- [Testing](#testing)  
- [Git & Development Process](#git--development-process)  

---

## Project Overview

This API stores **religious sites in Albania**, including:

- Mosques  
- Churches  
- Monasteries  

It allows users to:

- Get all sites or a single site (public)  
- Add, update, or delete sites (protected via Basic Auth)  

The focus of this project is **REST API design, database integration, and Git workflow**.

---

## Features

- **CRUD operations** for religious sites  
- **MySQL database** for persistent storage  
- **Basic Authentication** for protected routes  
- **JSON-only responses**  
- **Correct HTTP methods and status codes**  
- **Environment variables** for secure DB credentials  

---

## Technologies

- **SvelteKit** – Backend framework  
- **Node.js** – JavaScript runtime  
- **MySQL / MariaDB** – Database  
- **mysql2/promise** – Database driver  
- **Postman** – API testing and documentation  

---

## Setup

1. Clone the repository:
```bash
git clone <repo-url>
cd albania-religious-api