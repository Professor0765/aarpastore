# Techworld Distribution

Techworld Distribution is a full-stack eCommerce application built with React.js for the frontend, Node.js with Express for the backend, and MongoDB for the database. This project aims to provide a seamless shopping experience for users while offering robust management tools for administrators.

## Features

### User Features
- User registration and authentication
- Product browsing and searching
- Detailed product pages
- Shopping cart functionality
- Order history and tracking

### Admin Features
- Admin dashboard for managing products, categories, and orders
- User management
- Order management
- Product management

## Technologies Used
- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Project Structure
```
techworld-distribution
├── backend
│   ├── src
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── README.md
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up your MongoDB connection in `backend/src/config/db.js`.

4. Start the backend server:
   ```
   npm start
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.