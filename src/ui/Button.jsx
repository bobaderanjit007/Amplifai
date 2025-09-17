"use client"

/**
 * Reusable Button component with multiple variants
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-[7px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-[#00a8e8] hover:bg-[#0092e8] text-white focus:ring-[#00a8e8]",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-primary-500",
    ghost: "hover:bg-gray-100 text-gray-700 focus:ring-gray-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
