/**
 * Reusable Avatar component for user profile images
 */
const Avatar = ({ src, alt, size = "md", className = "" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  return (
    <div
      className={`${sizes[size]} rounded-full overflow-hidden bg-gray-200 flex items-center justify-center ${className}`}
    >
      {src ? (
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-500 font-medium text-sm">{alt?.charAt(0)?.toUpperCase() || "?"}</span>
      )}
    </div>
  )
}

export default Avatar
