import { useState, useRef, useEffect } from "react";
import { IoNotifications, IoSearch, IoChevronDown } from "react-icons/io5";
import Avatar from "../ui/Avatar";
import { BsStars } from "react-icons/bs";

const Header = ({ title, dropMenu = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subtitle, setSubtitle] = useState(dropMenu);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
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

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (err) {
        console.error("Invalid user data in localStorage", err);
      }
    }
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Title Section */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

          {/* Dropdown instead of subtitle text */}
          {dropMenu && (
            <select
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="ml-2 border border-gray-300 rounded-[7px] py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="FY (2024-2025)">FY (2024-2025)</option>
              <option value="FY (2023-2024)">FY (2023-2024)</option>
              <option value="FY (2022-2023)">FY (2022-2023)</option>
            </select>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* User Menu */}
          <div className="flex items-center space-x-3 relative" ref={menuRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer group relative"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="User"
                size="sm"
              />
              <span className="text-gray-600">{user?.name}</span>
              <IoChevronDown
                className={`text-gray-400 group-hover:text-gray-600 transition-transform duration-200 ${
                  menuOpen ? "rotate-180" : ""
                }`}
                size={16}
              />

              {/* Dropdown */}
              {menuOpen && (
                <div className="absolute -left-2 top-10 w-36 bg-white border border-gray-200 rounded-lg shadow-md z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Notifications */}
            <button className="p-[6px] text-gray-500 hover:text-gray-600 relative bg-gray-200 rounded-full border border-gray-300">
              <IoNotifications size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Quick Actions */}
            <div className="flex items-center space-x-2 border border-orange-300 p-[2px] rounded-[5px]">
              <span className="flex justify-center items-center bg-orange-100 text-orange-600 px-2 py-[6px] rounded-[4px] text-xs font-medium">
                <BsStars className="mr-2" />
                <span className="text-black">AI Chat</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
