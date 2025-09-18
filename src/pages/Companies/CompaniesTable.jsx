import React from "react";
import Card from "../../ui/Card";
import Avatar from "../../ui/Avatar";
import {
  IoTrendingUp,
  IoTrendingDown,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";

/**
 * Companies table component with pagination
 */
const CompaniesTable = ({
  companies,
  currentPage,
  totalPages,
  onPageChange,
  startIndex,
  endIndex,
  totalCompanies,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <Card className="p-0 overflow-hidden rounded-[8px]">
      {/* Table */}
      <div className="overflow-x-auto">
        {/* Pagination */}
        <div className="bg-white px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-end">
            <div className="text-sm text-gray-600">
              {startIndex} - {endIndex} of {totalCompanies}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <IoChevronBack size={16} />
                <span>Previous</span>
              </button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((page) => {
                    if (totalPages <= 5) return true;
                    if (page === 1 || page === totalPages) return true;
                    if (page >= currentPage - 1 && page <= currentPage + 1)
                      return true;
                    return false;
                  })
                  .map((page, index, array) => (
                    <React.Fragment key={page}>
                      {index > 0 && array[index - 1] !== page - 1 && (
                        <span className="px-2 py-1 text-gray-400">...</span>
                      )}
                      <button
                        onClick={() => handlePageClick(page)}
                        className={`px-3 py-2 text-sm rounded-lg ${
                          page === currentPage
                            ? "bg-primary-100 text-primary-600 font-medium"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    </React.Fragment>
                  ))}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <IoChevronForward size={16} />
              </button>
            </div>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-gray-600 text-xs">
                Company Name
              </th>
              <th className="text-left py-4 px-6 font-medium text-gray-600 text-xs">
                CEO/Key Person
              </th>
              <th className="text-right py-4 px-6 font-medium text-gray-600 text-xs">
                Revenue
              </th>
              <th className="text-right py-4 px-6 font-medium text-gray-600 text-xs">
                Profit
              </th>
              <th className="text-right py-4 px-6 font-medium text-gray-600 text-xs">
                EBITDA
              </th>
              <th className="text-right py-4 px-6 font-medium text-gray-600 text-xs">
                Gross Margin
              </th>
              <th className="text-left py-4 px-6 font-medium text-gray-600 text-xs">
                Key Insights
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr
                key={company.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <FaTableList className="h-5 w-5" />
                    <span className="font-medium text-gray-900 text-sm">
                      {company.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <Avatar src={company.avatar} alt={company.ceo} size="sm" />
                    <span className="text-sm text-gray-900">{company.ceo}</span>
                  </div>
                </td>
                <td className="text-right py-4 px-6 text-sm font-medium text-gray-900">
                  {company.revenue}
                </td>
                <td className="text-right py-4 px-6">
                  <span
                    className={`text-sm font-medium ${
                      company.profit.includes("-")
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {company.profit}
                  </span>
                </td>
                <td className="text-right py-4 px-6 text-sm font-medium text-gray-900">
                  {company.ebitda}
                </td>
                <td className="text-right py-4 px-6">
                  <div className="flex items-center justify-end space-x-2">
                    <span
                      className={`text-sm font-medium ${
                        company.marginPositive
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {company.grossMargin}
                    </span>
                    {company.marginPositive ? (
                      <IoTrendingUp className="text-green-600" size={14} />
                    ) : (
                      <IoTrendingDown className="text-red-600" size={14} />
                    )}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap gap-1">
                    {company.insights.slice(0, 2).map((insight, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {insight}
                      </span>
                    ))}
                    {company.insights.length > 2 && (
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                        +{company.insights.length - 2}
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CompaniesTable;
