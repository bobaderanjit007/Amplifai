import { Navigate } from "react-router-dom"

/**
 * Protected Route component that checks authentication status
 */
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
