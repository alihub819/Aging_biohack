"use client"

import type React from "react"
import { useState } from "react"
import Layout from "../components/Layout"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    time: "", // New field for consultation time
  })
  const [errors, setErrors] = useState<any>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset errors
    setErrors({})

    // Validate form
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.subject) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    // If subject is consultation, ensure preferred time is provided
    if (formData.subject === "consultation" && !formData.time) {
      newErrors.time = "Please select a preferred time for your consultation"
    }

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("Sending...")

    try {
      const response = await fetch("https://codevengers.services/api/post/email/agingbiohack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result === true) {
        setSubmitStatus("Message sent!")
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          time: "",
        })

        // Reset button text after 3 seconds
        setTimeout(() => {
          setSubmitStatus("")
          setIsSubmitting(false)
        }, 3000)
      } else {
        setSubmitStatus("")
        setIsSubmitting(false)
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("")
      setIsSubmitting(false)
      alert("Failed to send message. Please try again later.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-teal-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Contact Us</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-teal-100">
              Get in touch with our team to schedule a consultation or learn more about our treatments.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <Phone className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-500">(305) 8641373</p>
              <a href="tel:+13055550123" className="mt-2 text-teal-600 hover:text-teal-700">
                Call now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <Mail className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">sportsrecoverypro@gmail.com</p>
              <a href="mailto:info@agingbiohacks.com" className="mt-2 text-teal-600 hover:text-teal-700">
                Send email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <MapPin className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Location</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                123 Medical Center Drive
                <br />
                Miami, FL 33101
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-teal-600 hover:text-teal-700"
              >
                Get directions
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <div className="mt-1">
                      <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Select a subject</option>
                        {/* <option value="consultation">Schedule Consultation</option> */}
                        <option value="information">Treatment Information</option>
                        <option value="pricing">Pricing & Insurance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                  </div>
                </div>

                {formData.subject === "consultation" && (
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                      Preferred Time
                    </label>
                    <div className="mt-1">
                      <input
                        type="time"
                        name="time"
                        id="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-70"
                  >
                    {submitStatus || "Send Message"}
                    {!submitStatus && <Send className="ml-2 h-5 w-5" />}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96">
        <iframe
          title="clinic location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14367.027205106444!2d-80.19179!3d25.76168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6823af5b959%3A0x55985f047ff467ed!2sBrickell%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1710851755276!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </Layout>
  )
}

