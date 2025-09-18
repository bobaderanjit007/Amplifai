import { useState, useEffect } from "react"
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import CompaniesTable from "./CompaniesTable"
import CompaniesHeader from "./CompaniesHeader"
import AddCompanyModal from "./AddCompanyModal"
import { companiesData } from "../../data/dummyData"

/**
 * Companies list page component
 */
const Companies = () => {
  const [companies, setCompanies] = useState([])
  const [filteredCompanies, setFilteredCompanies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const companiesPerPage = 10

  // Load companies from localStorage or use dummy data
  useEffect(() => {
    const savedCompanies = localStorage.getItem("companies")
    if (savedCompanies) {
      const parsedCompanies = JSON.parse(savedCompanies)
      setCompanies(parsedCompanies)
      setFilteredCompanies(parsedCompanies)
    } else {
      setCompanies(companiesData)
      setFilteredCompanies(companiesData)
      localStorage.setItem("companies", JSON.stringify(companiesData))
    }
  }, [])

  // Filter companies based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCompanies(companies)
    } else {
      const filtered = companies.filter(
        (company) =>
          company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          company.ceo.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredCompanies(filtered)
    }
    setCurrentPage(1) // Reset to first page when searching
  }, [searchTerm, companies])

  // Calculate pagination
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage)
  const startIndex = (currentPage - 1) * companiesPerPage
  const endIndex = startIndex + companiesPerPage
  const currentCompanies = filteredCompanies.slice(startIndex, endIndex)

  // Handle adding new company
  const handleAddCompany = (newCompany) => {
    const companyWithId = {
      ...newCompany,
      id: companies.length + 1,
      avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face`,
      marginPositive: !newCompany.grossMargin.includes("-"),
      insights: newCompany.insights.split(",").map((insight) => insight.trim()),
    }

    const updatedCompanies = [...companies, companyWithId]
    setCompanies(updatedCompanies)
    localStorage.setItem("companies", JSON.stringify(updatedCompanies))
    setIsAddModalOpen(false)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header title="List of Companies" />

        {/* Companies Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Companies Header with Search and Actions */}
            <CompaniesHeader
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onAddCompany={() => setIsAddModalOpen(true)}
              totalCompanies={filteredCompanies.length}
              currentPage={currentPage}
              totalPages={totalPages}
              companiesPerPage={companiesPerPage}
            />

            {/* Companies Table */}
            <CompaniesTable
              companies={currentCompanies}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              startIndex={startIndex}
              endIndex={Math.min(endIndex, filteredCompanies.length)}
              totalCompanies={filteredCompanies.length}
            />
          </div>
        </main>
      </div>

      {/* AddCompanyModal component */}
      <AddCompanyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddCompany={handleAddCompany}
      />
    </div>
  )
}

export default Companies
