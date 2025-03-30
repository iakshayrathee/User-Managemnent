# Login and Registration System

A secure, full-stack web application for user authentication and registration, built with React and Node.js.

## Features

- **Secure Authentication**

  - JWT-based authentication
  - Password hashing with bcrypt
  - Protected API routes

- **User Management**

  - Registration with email verification
  - Profile management

- **Architecture**
  - React frontend with Vite
  - Node.js + Express backend
  - MongoDB database
  - RESTful API

## Tech Stack

- **Frontend**: React, Vite, React Router, Axios
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB database
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   ```

2. Set up the backend:

   ```bash
   cd backend
   npm install
   cp .env.example .env # Configure .env with your credentials
   npm run dev
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Environment Configuration

#### Backend (.env)

```env
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
NODE_ENV=development
```

#### Frontend (.env)

```env
VITE_APP_API_URL=http://localhost:5000/api
```

## API Endpoints

- **POST /api/auth/register**

  - Register a new user
  - Body: `{ "email": "string", "password": "string", "name": "string", "dateOfBirth": "Date" }`

- **POST /api/auth/login**

  - Authenticate a user
  - Body: `{ "email": "string", "password": "string" }`

- **GET /api/auth/profile**
  - Get user profile
  - Headers: `Authorization: Bearer <token>`

## Development

- Frontend: `npm run dev` (Runs at http://localhost:5173)
- Backend: `npm run dev` (API at http://localhost:5000)

## Troubleshooting

- **MongoDB Connection**: Check MONGO_URI and network settings
- **JWT Issues**: Verify JWT_SECRET and token format

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push: `git push origin feature/YourFeature`
5. Open a pull request

## License

MIT License - see LICENSE for details.

## Support

For issues or questions, open an issue in the repository or email <your-email>.

---

### Notes

1. Replace `<your-repo-url>` with the actual repository URL
2. Replace `<your-mongodb-uri>` and `<your-secret-key>` with your actual credentials
3. Add your email in the Support section
4. Ensure LICENSE file exists in the repository
