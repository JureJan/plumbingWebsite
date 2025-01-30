"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "next-i18next";

export const useFormHandler = () => {
  const { t } = useTranslation("common");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e, serviceId, templateId, formFields) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const templateParams = {};
    formFields.forEach((field) => {
      templateParams[field] = formData.get(field);
    });

    // Basic validation
    if (!templateParams.name || !templateParams.email || !templateParams.message) {
      alert(t("form.validationError", "Please fill out all required fields."));
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(serviceId, templateId, templateParams);
      alert(t("form.successMessage", "Your message was sent successfully!"));
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(t("form.errorMessage", "An error occurred while sending your message."));
    } finally {
      setIsLoading(false);
    }
  };

  return { handleFormSubmit, isLoading };
};
