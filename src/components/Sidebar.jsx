import { NavLink } from "react-router-dom";
import {
  IoGrid,
  // IoDocument,
  IoBusiness,
  // IoSettings,
  // IoMail,
  // IoAnalytics,
} from "react-icons/io5";
import logo from "./../assets/images/amplifai-logo.png";

/**
 * Sidebar navigation component
 */
const Sidebar = () => {
  const navItems = [
    { icon: IoGrid, path: "/dashboard", label: "Dashboard" },
    { icon: IoBusiness, path: "/companies", label: "Companies" },
    // { icon: IoDocument, path: "/reports", label: "Reports" },
    // { icon: IoAnalytics, path: "/analytics", label: "Analytics" },
    // { icon: IoMail, path: "/messages", label: "Messages" },
    // { icon: IoSettings, path: "/settings", label: "Settings" },
  ];

  return (
    <div className="w-16 bg-gray-900 h-screen flex flex-col items-center py-4">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-white rounded-[7px] flex items-center justify-center">
          <img src={logo} alt="Amplifai logo" className="h-5 w-5" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-4">
        {navItems.map(({ icon: Icon, path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `p-2 rounded-[7px] transition-colors group relative ${
                isActive
                  ? "bg-[#00a8e8] text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`
            }
            title={label}
          >
            <Icon size={16} />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
