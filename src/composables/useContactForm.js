import { reactive, ref } from 'vue'
import { sendMessage } from '@/services/contact'

/**
 * Composable for managing contact form state, client-side validation, and submission
 */
export function useContactForm() {
  const values = reactive({
    name: '',
    email: '',
    phone: '',
    description: '',
    _honey: '' // Honeypot field (hidden from real users)
  })

  const errors = reactive({
    name: '',
    email: '',
    phone: '',
    description: ''
  })

  const submitting = ref(false)
  const submitted = ref(false)
  const submitError = ref('')

  // Validation rules
  const validateField = (field) => {
    switch (field) {
      case 'name':
        if (!values.name || values.name.trim().length < 2) {
          errors.name = 'Please provide your full name (minimum 2 characters).'
        } else {
          errors.name = ''
        }
        break

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!values.email || !values.email.trim()) {
          errors.email = 'Email address is required.'
        } else if (!emailRegex.test(values.email.trim())) {
          errors.email = 'Please enter a valid email address (e.g. name@domain.com).'
        } else {
          errors.email = ''
        }
        break

      case 'phone':
        if (values.phone && values.phone.trim()) {
          // Permissive regex for international and standard phone formats
          const phoneRegex = /^[\d\s+\-().]{7,20}$/
          if (!phoneRegex.test(values.phone.trim())) {
            errors.phone = 'Please enter a valid phone number (or leave blank).'
          } else {
            errors.phone = ''
          }
        } else {
          errors.phone = ''
        }
        break

      case 'description':
        if (!values.description || values.description.trim().length < 15) {
          errors.description = 'Please describe your formulation or project inquiry (minimum 15 characters).'
        } else {
          errors.description = ''
        }
        break
    }
  }

  const validateAll = () => {
    validateField('name')
    validateField('email')
    validateField('phone')
    validateField('description')

    return !errors.name && !errors.email && !errors.phone && !errors.description
  }

  const submit = async () => {
    submitError.value = ''
    if (!validateAll()) {
      return { success: false }
    }

    submitting.value = true
    try {
      const response = await sendMessage(values)
      submitted.value = true
      return { success: true, message: response.message }
    } catch (err) {
      submitError.value = err.message || 'An unexpected error occurred. Please try again.'
      return { success: false, error: submitError.value }
    } finally {
      submitting.value = false
    }
  }

  const reset = () => {
    values.name = ''
    values.email = ''
    values.phone = ''
    values.description = ''
    values._honey = ''
    errors.name = ''
    errors.email = ''
    errors.phone = ''
    errors.description = ''
    submitted.value = false
    submitError.value = ''
  }

  return {
    values,
    errors,
    submitting,
    submitted,
    submitError,
    validateField,
    validateAll,
    submit,
    reset
  }
}
