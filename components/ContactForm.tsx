"use client"; // Indicate this is a Client Component

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: formData.email ? "" : "Email is required.",
      company: formData.company ? "" : "Company is required.",
      licenseType: formData.licenseType ? "" : "License type is required.",
      message: formData.message ? "" : "Message is required.",
    };

    setErrors(newErrors);

    const isFormValid = !Object.values(newErrors).some((error) => error);

    if (isFormValid) {
      // Form is valid, handle submission
      console.log("Form submitted", formData);

      // Show success message
      setSuccessMessage("Your message has been sent successfully!");

      // Clear the form after submission
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-950" id="contact">
      <div className="max-w-xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 text-center mb-6">
          Contact Us
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          {/* Company Field */}
          <div>
            <input
              type="text"
              name="company"
              value={formData.company}
              placeholder="Your Company"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              onChange={handleChange}
            />
            {errors.company && <p className="text-red-600 text-sm">{errors.company}</p>}
          </div>

          {/* License Type Dropdown */}
          <div>
            <select
              name="licenseType"
              value={formData.licenseType}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              onChange={handleChange}
            >
              <option value="">Select License Type</option>
              <option value="Software">Software</option>
              <option value="Subscription">Subscription</option>
            </select>
            {errors.licenseType && <p className="text-red-600 text-sm">{errors.licenseType}</p>}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition dark:bg-purple-700 dark:hover:bg-purple-600 w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-6 text-green-600 font-semibold text-center">
            {successMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
