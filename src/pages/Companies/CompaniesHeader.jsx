"use client"
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-64"
            />
          </div>

          <Button variant="outline" size="md" className="flex items-center space-x-2 bg-transparent">
            <IoFunnel size={16} />
            <span>Filter</span>
          </Button>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="md" className="flex items-center space-x-2 bg-transparent">
            <IoDownload size={16} />
            <span>Export</span>
          </Button>

          <Button variant="primary" size="md" onClick={onAddCompany} className="flex items-center space-x-2">
            <IoAdd size={16} />
            <span>Add Company</span>
          </Button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <span>
          {startIndex} - {endIndex} of {totalCompanies}
        </span>
        <div className="flex items-center space-x-4">
          <span>Previous</span>
          <div className="flex items-center space-x-2">
            {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => (
              <span
                key={i + 1}
                className={`px-2 py-1 rounded ${
                  i + 1 === currentPage ? "bg-primary-100 text-primary-600" : "text-gray-500"
                }`}
              >
                {i + 1}
              </span>
            ))}
            {totalPages > 3 && <span className="text-gray-400">...</span>}
          </div>
          <span>Next</span>
        </div>
      </div>
    </div>
  )
}

export default CompaniesHeader
