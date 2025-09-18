import { useState } from "react"
import Modal from "../../ui/Modal"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import { addCompanySchema, validateForm } from "../../utils/validation"

/**
 * Add Company Modal with Zod validation
 */
const AddCompanyModal = ({ isOpen, onClose, onAddCompany }) => {
  const [formData, setFormData] = useState({
    name: "",
    ceo: "",
    revenue: "",
    profit: "",
    ebitda: "",
    grossMargin: "",
    insights: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form data using Zod schema
    const validation = validateForm(addCompanySchema, formData)

    if (!validation.success) {
      setErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    // Simulate API call delay
    setTimeout(() => {
      onAddCompany(formData)
      handleClose()
      setIsSubmitting(false)
    }, 500)
  }

  // Handle modal close
  const handleClose = () => {
    setFormData({
      name: "",
      ceo: "",
      revenue: "",
      profit: "",
      ebitda: "",
      grossMargin: "",
      insights: "",
    })
    setErrors({})
    setIsSubmitting(false)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Add New Company" size="lg" className="rounded-[8px]">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Name */}
        <Input
          label="Company Name"
          name="name"
          type="text"
          placeholder="Enter company name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
          required
        />

        {/* CEO Name */}
        <Input
          label="CEO/Key Person"
          name="ceo"
          type="text"
          placeholder="Enter CEO or key person name"
          value={formData.ceo}
          onChange={handleInputChange}
          error={errors.ceo}
          required
        />

        {/* Financial Fields Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Revenue"
            name="revenue"
            type="text"
            placeholder="€245M"
            value={formData.revenue}
            onChange={handleInputChange}
            error={errors.revenue}
            required
          />

          <Input
            label="Profit"
            name="profit"
            type="text"
            placeholder="€35M or -€10M"
            value={formData.profit}
            onChange={handleInputChange}
            error={errors.profit}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="EBITDA"
            name="ebitda"
            type="text"
            placeholder="€25M or -€5M"
            value={formData.ebitda}
            onChange={handleInputChange}
            error={errors.ebitda}
            required
          />

          <Input
            label="Gross Margin"
            name="grossMargin"
            type="text"
            placeholder="28.5%"
            value={formData.grossMargin}
            onChange={handleInputChange}
            error={errors.grossMargin}
            required
          />
        </div>

        {/* Key Insights */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Key Insights
            <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            name="insights"
            rows={3}
            placeholder="Enter key insights separated by commas (e.g., Strong Growth, Market Leader, Tech)"
            value={formData.insights}
            onChange={handleInputChange}
            className={`
              w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 
              focus:border-primary-500 transition-colors resize-none
              ${errors.insights ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
            `}
          />
          {errors.insights && <p className="mt-1 text-sm text-red-600">{errors.insights}</p>}
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
          <Button type="button" variant="outline" onClick={handleClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Adding Company..." : "Add Company"}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddCompanyModal
