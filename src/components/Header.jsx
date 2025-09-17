import { useState, useRef, useEffect } from "react";
import { IoNotifications, IoSearch, IoChevronDown } from "react-icons/io5";
import Avatar from "../ui/Avatar";

const Header = ({ title, subt }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subtitle, setSubtitle] = useState(subt);
  const menuRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    // Redirect to login
    window.location.href = "/login";
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Title Section */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

          {/* Dropdown instead of subtitle text */}
          <select
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="ml-2 border border-gray-300 rounded-[7px] py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="FY (2024-2025)">FY (2024-2025)</option>
            <option value="FY (2023-2024)">FY (2023-2024)</option>
            <option value="FY (2022-2023)">FY (2022-2023)</option>
          </select>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* User Menu */}
          <div className="flex items-center space-x-3 relative" ref={menuRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="User"
                size="sm"
              />
              <IoChevronDown
                className={`text-gray-400 group-hover:text-gray-600 transition-transform duration-200 ${
                  menuOpen ? "rotate-180" : ""
                }`}
                size={16}
              />
            </div>

            {/* Notifications */}
            <button className="p-[6px] text-gray-500 hover:text-gray-600 relative bg-gray-200 rounded-full border border-gray-300">
              <IoNotifications size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 top-12 w-36 bg-white border border-gray-200 rounded-lg shadow-md z-50 -left-[14%]">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}

            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-[4px] text-xs font-medium">
                AI Chat
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
