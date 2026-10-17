# MVC Architecture (Node.js + Express)

A simple Node.js and Express project organized with the **MVC (Model–View–Controller)** pattern. It keeps data, business logic and presentation in separate layers, so the code is easier to read, maintain and scale.

## What is MVC?

| Layer | Responsibility |
| --- | --- |
| **Model** | Handles data and data-related logic |
| **View** | Handles what the user sees (the presentation layer) |
| **Controller** | Receives requests, works with the model, and sends back a response or view |

**Request flow:**

```
Client → Route → Controller → Model → Controller → View / JSON Response → Client
```

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) v5
- [Nodemon](https://nodemon.io/) (auto-restart in development)

## Project Structure

```
MVC-Architecture/
├── controllers/     # Request handling and business logic
├── models/          # Data models
├── routes/          # Route definitions
├── views/           # Views / templates
├── index.js         # Application entry point
├── package.json
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Shimul-DIU/MVC-Architecture.git

# Go to the project folder
cd MVC-Architecture

# Install dependencies
npm install
```

### Run the Project

```bash
npm start
```

This runs `nodemon index.js`, so the server restarts automatically when you change a file.

Then open the server in your browser at the port set in `index.js` (for example `http://localhost:3000`).

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the server with nodemon |

## How to Add a New Feature

1. Create a model in `models/`
2. Write the logic in a controller inside `controllers/`
3. Define the endpoint in `routes/` and connect the controller
4. Register the route in `index.js`
5. Add a view in `views/` if you need one

## Future Improvements

- Connect a database (MongoDB / PostgreSQL)
- Add input validation and error handling middleware
- Add authentication
- Write tests

## Author

**Md. Shimul Mia**

- GitHub: [@Shimul-DIU](https://github.com/Shimul-DIU)
- Portfolio: [shimul-portfolio.web.app](https://shimul-portfolio.web.app)

## License

This project is licensed under the ISC License.
