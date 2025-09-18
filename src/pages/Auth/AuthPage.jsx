import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import {
  loginSchema,
  registerSchema,
  validateForm,
} from "../../utils/validation";
import logo from "../../assets/images/amplifai-logo.png";

/**
 * Authentication page with login and register forms
 */
const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form data
    const schema = isLogin ? loginSchema : registerSchema;
    const validation = validateForm(schema, formData);

    if (!validation.success) {
      setErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Set authentication flag
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: formData.name || "John Doe",
          email: formData.email,
        })
      );

      // Redirect to dashboard
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  // Toggle between login and register
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="text-center flex justify-start">
            <div className="flex items-center justify-center mb-4 gap-1">
              <img src={logo} alt="Amplifai logo" className="h-8 w-8" />
              <h1 className="text-3xl font-semibold text-[#00a8e8]">
                FlowState
              </h1>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Login" : "Create Account"}
            </h2>
            <p className="text-gray-600 mb-8">
              {isLogin
                ? "Enter your email below to login to your account."
                : "Enter your information to create an account."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field for registration */}
              {!isLogin && (
                <Input
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  required
                />
              )}

              {/* Email field */}
              <Input
                label="Business Email Address"
                name="email"
                type="email"
                placeholder="username@domain.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />

              {/* Password field */}
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
                required
              />

              {/* Confirm Password for registration */}
              {!isLogin && (
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                  required
                />
              )}

              {/* Forgot Password Link (Login only) */}
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-[#00a8e8] hover:text-[#0092e8] underline"
                  >
                    Forgot your password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading
                  ? "Please wait..."
                  : isLogin
                  ? "Login"
                  : "Create Account"}
              </Button>

              {/* Toggle Mode */}
              <div className="text-center">
                <span className="text-gray-600">
                  {isLogin
                    ? "Don't have an account? "
                    : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-[#00a8e8] hover:text-[#0092e8] font-medium underline"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Section */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#163459] via-[#143155] to-[#0a1f39] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-white rounded-lg transform -rotate-12"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-2 left-32 w-28 h-28 border-2 border-white rounded-lg transform rotate-45"></div>
        </div>

        {/* Content */}
        <div className="flex items-center justify-center p-12 relative z-10">
          <div className="max-w-lg text-center px-12">
            {/* Logo */}
            <img src={logo} alt="Amplifai logo" className="h-10 w-10 mb-4" />

            {/* Heading */}
            <h1 className="text-4xl font-light text-left text-white mb-6 leading-tight">
              Drive Better Decisions with Centralized Performance & Account
              Intelligence.
            </h1>

            {/* Decorative Elements */}
            <div className="absolute bottom-16 right-16 opacity-20">
              <div className="w-24 h-24 border-2 border-white rounded-lg transform rotate-12 relative">
                <div className="absolute inset-2 border-2 border-white rounded-lg"></div>
                <div className="absolute inset-4 border-2 border-white rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
