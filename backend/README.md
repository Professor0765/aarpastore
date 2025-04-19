# Techworld Distribution Backend

## Overview
This is the backend for the Techworld Distribution eCommerce website. It is built using Node.js, Express, and MongoDB. The backend handles user authentication, product management, and order processing.

## Features
- User registration and authentication
- Admin panel for managing products, categories, and orders
- RESTful API for frontend integration
- MongoDB for data storage

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd techworld-distribution/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Configuration
- Update the database connection settings in `src/config/db.js`.

### Running the Application
To start the server, run:
```
npm start
```
The server will run on `http://localhost:5000`.

## API Endpoints
- **User Routes**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Authenticate a user
  - `GET /api/users/orders` - Get user order history

- **Admin Routes**
  - `POST /api/admin/products` - Add a new product
  - `GET /api/admin/products` - Get all products
  - `DELETE /api/admin/products/:id` - Delete a product

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.