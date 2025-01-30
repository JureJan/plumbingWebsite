import emailjs from "@emailjs/browser";

export const sendEmail = async (serviceId, templateId, formData, publicKey) => {
  try {
    // Initialize EmailJS only if not already initialized
    if (!emailjs.init) {
      emailjs.init(publicKey);
    }

    await emailjs.send(serviceId, templateId, formData);
    return { success: true };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
}