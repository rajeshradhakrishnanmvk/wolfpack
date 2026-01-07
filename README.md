# Wolfpack - User Management Starter

A full-stack starter boilerplate with Angular frontend, .NET backend, and SQLite database for user management.

## 🚀 Features

- **Frontend**: Angular 19 with standalone components
- **Backend**: ASP.NET Core Web API (.NET 10)
- **Database**: SQLite with Entity Framework Core
- **CRUD Operations**: Complete user management (Create, Read, Update, Delete)
- **User Attributes**: Name, Pod Name, Domain Name
- **GitHub Codespaces**: Ready-to-use development environment

## 📋 Prerequisites

### Local Development
- [.NET SDK 10.0+](https://dotnet.microsoft.com/download)
- [Node.js 20+ (LTS)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### GitHub Codespaces
No prerequisites needed! Just open in Codespaces and start coding.

## 🏃 Quick Start

### Option 1: GitHub Codespaces (Recommended)

1. Click the "Code" button on GitHub
2. Select "Codespaces" tab
3. Click "Create codespace on main"
4. Wait for the environment to set up (dependencies will be installed automatically)
5. Follow the "Running the Application" steps below

### Option 2: Local Development

1. Clone the repository:
```bash
git clone https://github.com/rajeshradhakrishnanmvk/wolfpack.git
cd wolfpack
```

2. Install backend dependencies:
```bash
cd Backend
dotnet restore
cd ..
```

3. Install frontend dependencies:
```bash
cd Frontend
npm install
cd ..
```

## 🎮 Running the Application

### Start Backend (Terminal 1)

```bash
cd Backend
dotnet run
```

The backend API will start on `http://localhost:5000`

### Start Frontend (Terminal 2)

```bash
cd Frontend
npm start
```

The frontend will start on `http://localhost:4200`

### Access the Application

Open your browser and navigate to: `http://localhost:4200`

## 📁 Project Structure

```
wolfpack/
├── Backend/                    # .NET Web API
│   ├── Controllers/           # API Controllers
│   │   └── UsersController.cs # User CRUD endpoints
│   ├── Data/                  # Database context
│   │   └── ApplicationDbContext.cs
│   ├── Models/                # Data models
│   │   └── User.cs
│   ├── Program.cs             # App configuration
│   └── Backend.csproj         # .NET project file
│
├── Frontend/                   # Angular Application
│   ├── src/
│   │   └── app/
│   │       ├── components/
│   │       │   └── user-list/  # User management UI
│   │       ├── models/
│   │       │   └── user.model.ts # User interface
│   │       ├── services/
│   │       │   └── user.ts     # User API service
│   │       └── app.ts          # Main component
│   └── package.json           # npm dependencies
│
└── .devcontainer/             # GitHub Codespaces config
    └── devcontainer.json
```

## 🔌 API Endpoints

### Users API (`/api/users`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/{id}` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/{id}` | Update user |
| DELETE | `/api/users/{id}` | Delete user |

### Example Request Body (POST/PUT)

```json
{
  "name": "John Doe",
  "podName": "Engineering",
  "domainName": "Development"
}
```

## 🛠️ Development

### Backend Development

- **Build**: `cd Backend && dotnet build`
- **Run**: `cd Backend && dotnet run`
- **Clean**: `cd Backend && dotnet clean`

The SQLite database (`users.db`) is created automatically on first run.

### Frontend Development

- **Start Dev Server**: `cd Frontend && npm start`
- **Build**: `cd Frontend && npm run build`
- **Build for Production**: `cd Frontend && npm run build --configuration production`

### Database

The SQLite database is stored in `Backend/users.db`. To reset the database:
```bash
cd Backend
rm users.db
dotnet run  # Database will be recreated
```

## 🎨 Features Overview

### User Management UI

- **Add User**: Fill in the form and click "Add User"
- **Edit User**: Click "Edit" button on any user row
- **Delete User**: Click "Delete" button with confirmation
- **View Users**: All users displayed in a responsive table

### User Fields

1. **Name**: User's full name
2. **Pod Name**: The pod/team the user belongs to
3. **Domain Name**: The domain/department the user belongs to

## 🔧 Configuration

### Backend Port Configuration

Edit `Backend/Properties/launchSettings.json` to change the port.

### Frontend API URL

Edit `Frontend/src/app/services/user.ts` and update the `apiUrl` variable:
```typescript
private apiUrl = 'http://localhost:5000/api/users';
```

### CORS Configuration

The backend is configured to accept requests from `http://localhost:4200` and `https://localhost:4200`. To add more origins, edit `Backend/Program.cs`.

## 📝 Notes

- The database uses SQLite for simplicity. For production, consider upgrading to PostgreSQL or SQL Server.
- CORS is configured for local development. Adjust for production deployment.
- The application uses HTTP (not HTTPS) for simplicity. Enable HTTPS for production.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🐛 Troubleshooting

### Backend Issues

**Problem**: "Cannot connect to database"
- Solution: Delete `users.db` and restart the backend

**Problem**: Port 5000 already in use
- Solution: Kill the process using port 5000 or change the port in `launchSettings.json`

### Frontend Issues

**Problem**: "Cannot connect to backend"
- Solution: Ensure backend is running on `http://localhost:5000`

**Problem**: CORS errors
- Solution: Check that the backend CORS configuration includes your frontend URL

### GitHub Codespaces Issues

**Problem**: Ports not forwarding
- Solution: Check the "Ports" tab in VS Code and make sure ports 5000 and 4200 are forwarded

## 🌟 Next Steps

- Add authentication and authorization
- Implement pagination for large user lists
- Add search and filter capabilities
- Deploy to Azure/AWS/GCP
- Add unit and integration tests
- Implement Docker containerization
