/**
 * Contact Service Stub
 * ============================================================================
 * Point this function to your form backend provider:
 * - Formspree: fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(data) })
 * - EmailJS: emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
 * - Custom API endpoint: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
 * ============================================================================
 */

export async function sendMessage(formData) {
  // 1. Check honeypot field to block automated spam
  if (formData._honey && formData._honey.trim() !== '') {
    // Silently reject spam bots without giving cues
    return { success: true, message: 'Message submitted.' }
  }

  // 2. Simulated network latency for testing UX states
  await new Promise((resolve) => setTimeout(resolve, 800))

  // 3. Stub response - replace with actual fetch call when connecting provider:
  /*
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      description: formData.description
    })
  })

  if (!response.ok) {
    throw new Error('Failed to send message. Please try again.')
  }
  return await response.json()
  */

  return {
    success: true,
    message: 'Thank you for your message. Fatima will review your formulation inquiry within 24-48 business hours.'
  }
}
