import Button from "../../ui/Button"
import { IoSearch, IoFunnel, IoDownload, IoAdd } from "react-icons/io5"

/**
 * Companies page header with search and action buttons
 */
const CompaniesHeader = ({
  searchTerm,
  onSearchChange,
  onAddCompany,
  totalCompanies,
  currentPage,
  totalPages,
  companiesPerPage,
}) => {
  const startIndex = (currentPage - 1) * companiesPerPage + 1
  const endIndex = Math.min(currentPage * companiesPerPage, totalCompanies)

  return (
    <div className="bg-white rounded-[8px] shadow-sm border border-gray-200 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        {/* Left Side - Search */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search Companies"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-64"
            />
          </div>

          <Button variant="outline" size="md" className="flex items-center space-x-2 bg-transparent border-1 border-[#00a8e8]">
            <IoFunnel size={17} className="text-[#00a8e8]" />
          </Button>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="md" className="flex items-center space-x-2 bg-transparent border-1 border-[#00a8e8]">
            <IoDownload size={16} className="text-[#00a8e8]" />
            <span className="text-[#00a8e8]">Export</span>
          </Button>

          <Button variant="outline" size="md" onClick={onAddCompany} className="flex items-center space-x-2 border-1 border-[#00a8e8]">
            <IoAdd size={16} className="text-[#00a8e8]" />
            <span className="text-[#00a8e8]">Add Company</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CompaniesHeader
