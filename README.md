# Library Management Application

## Overview

The Library Management Application is a web-based system designed to manage a collection of books. It consists of two main components:

- **Back-end (Java)**: A Spring Boot application that handles book data management, including adding, updating, deleting, and retrieving books. It uses Object-Oriented Programming (OOP) principles such as abstraction, encapsulation, and access modifiers to ensure a robust and secure architecture.
- **Front-end (React with Vite)**: A single-page application (SPA) built with React and powered by Vite for fast development. It provides a user interface for interacting with the library. It uses React Router for navigation, the `useRef` hook for DOM manipulation, and fetches data from the back-end via REST APIs.

This README provides instructions for setting up, running, and using the application locally.

## Features

### Back-end (Java)
- Manage book entities with attributes: **title**, **author**, and **ISBN**.
- **CRUD** operations (Create, Read, Update, Delete) for books.
- **RESTful API** endpoints for communication with the front-end.
- OOP principles applied: abstraction (via interfaces), encapsulation (private fields with public methods), and access modifiers (public/private).

### Front-end (React with Vite)
- Navigate between pages (Home, Add Book, Edit Book) using **React Router**.
- Display a list of books on the **Home** page.
- Add new books or edit existing ones using forms, with `useRef` to auto-focus input fields.
- Conditional rendering for success/error messages and loading states.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Java Development Kit (JDK)**: Version 11 or higher.
- **Maven**: For building the Java back-end.
- **Node.js** and **npm**: For the React front-end.
- **Git** (optional): For version control.
- **Postman** or a similar tool (optional): For testing API endpoints.

## Project Structure

The project is split into two directories:

```
library-backend/: Contains the Java Spring Boot application.
library-frontend/: Contains the React application powered by Vite.
```
