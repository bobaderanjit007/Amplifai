import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./routes/ProtectedRoute"
import AuthPage from "./pages/Auth/AuthPage"
import Dashboard from "./pages/Dashboard/Dashboard"
import Companies from "./pages/Companies/Companies"

/**
 * Main App component with routing configuration
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<AuthPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/companies"
            element={
              <ProtectedRoute>
                <Companies />
              </ProtectedRoute>
            }
          />

          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Catch all - redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
