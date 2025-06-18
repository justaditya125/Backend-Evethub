# Eventify Backend

A Node.js backend API for the Eventify application with MongoDB Atlas integration.

## 🚀 Live Deployment

**Backend Server:** https://backend-eventhub-l23x.onrender.com

## 📋 Features

- User authentication (register, login, logout)
- Event management (CRUD operations)
- JWT token-based authentication
- Input validation and error handling
- CORS enabled
- MongoDB Atlas integration

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Express Validator
- **Deployment:** Render

## 📁 Project Structure

```
src/
├── config/
│   └── db.js          # Database configuration
├── controllers/
│   ├── authController.js
│   └── eventController.js
├── middleware/
│   ├── auth.js        # JWT authentication
│   └── validation.js  # Input validation
├── models/
│   ├── Event.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── eventRoutes.js
└── index.js           # Main server file
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user (protected)

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event (protected)
- `PUT /api/events/:id` - Update event (protected)
- `DELETE /api/events/:id` - Delete event (protected)

## 🚀 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/justaditya125/Backend-Evethub.git
   cd Backend-Evethub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🚀 Production Deployment

The application is deployed on Render at: https://backend-eventhub-l23x.onrender.com

### Environment Variables for Production
- `MONGODB_URI` - MongoDB Atlas connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (set by Render)
- `NODE_ENV` - Set to 'production'

## 📝 License

This project is part of the Eventify application.

## 🔗 Links

- **Backend API:** https://backend-eventhub-l23x.onrender.com
- **GitHub Repository:** https://github.com/justaditya125/Backend-Evethub 