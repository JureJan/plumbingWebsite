"use client"; // Mark as Client Component
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { useTranslation } from "next-i18next"; // Import useTranslation for translations
import "../../styles/bmicalculator.css";

export default function BmiCalculator() {
  const { t } = useTranslation("common"); // Initialize translations
  const [formData, setFormData] = useState({
    name: "", // Added name field
    surname: "", // Added surname field
    gender: "",
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
    goal: "",
    email: "",
  });

  const [bmi, setBMI] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    if (typeof window !== "undefined") {
      emailjs.init("4seHCGovjmExB5X_K"); // Replace with your actual EmailJS public key
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateBMI = () => {
    const heightInMeters = formData.height / 100;
    const calculatedBMI = formData.weight / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI.toFixed(2));
    return calculatedBMI.toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const calculatedBMI = calculateBMI();

    const templateParams = {
      name: formData.name, // Name
      surname: formData.surname, // Surname
      gender: formData.gender, // Gender
      age: formData.age, // Age
      weight: formData.weight, // Weight
      height: formData.height, // Height
      activityLevel: formData.activityLevel, // Activity Level
      goal: formData.goal, // Goal
      email: formData.email, // Email
      message: `Your calculated BMI is ${calculatedBMI}.`, // BMI Result
    };

    // Validate required fields
    if (!formData.name || !formData.surname || !formData.email || !formData.weight || !formData.height) {
      alert(t("form.validationError", "Please fill out all required fields."));
      return;
    }

    try {
      const response = await emailjs.send(
        "service_h9tgu0l", // Replace with your EmailJS Service ID
        "template_7uflgdk", // Replace with your EmailJS Template ID
        templateParams,
        "4seHCGovjmExB5X_K" // Replace with your EmailJS Public Key
      );

      if (response.status === 200) {
        alert(t("form.successMessage", "BMI results sent to your email!"));
        // Reset form fields
        setFormData({
          name: "",
          surname: "",
          gender: "",
          age: "",
          weight: "",
          height: "",
          activityLevel: "",
          goal: "",
          email: "",
        });
        setBMI(null); // Reset BMI
      } else {
        alert(t("form.errorMessage", "Failed to send email. Please try again later."));
      }
    } catch (error) {
      console.error("EmailJS Error:", error); // Log the error for debugging
      alert(t("form.errorMessage", "Failed to send email. Please try again later."));
    }
  };

  return (
    <div className="bmiContainer">
      {bmi !== undefined ? <div onClick={bmi}> </div> : <div></div>}
      <h1>{t("bmi.title", "BMI Calculator")}</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>{t("bmi.name", "Name")}:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>

        {/* Surname Field */}
        <div>
          <label>{t("bmi.surname", "Surname")}:</label>
          <input
            type="text"
            name="surname"
            onChange={handleChange}
            value={formData.surname}
            required
          />
        </div>

        {/* Gender Field */}
        <div>
          <label>{t("bmi.gender", "Gender")}:</label>
          <select name="gender" onChange={handleChange} value={formData.gender}>
            <option value="">{t("bmi.selectGender", "Select Gender")}</option>
            <option value="male">{t("bmi.male", "Male")}</option>
            <option value="female">{t("bmi.female", "Female")}</option>
          </select>
        </div>

        {/* Age Field */}
        <div>
          <label>{t("bmi.age", "Age (years)")}:</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={formData.age}
            required
          />
        </div>

        {/* Weight Field */}
        <div>
          <label>{t("bmi.weight", "Weight (kg)")}:</label>
          <input
            type="number"
            name="weight"
            onChange={handleChange}
            value={formData.weight}
            required
          />
        </div>

        {/* Height Field */}
        <div>
          <label>{t("bmi.height", "Height (cm)")}:</label>
          <input
            type="number"
            name="height"
            onChange={handleChange}
            value={formData.height}
            required
          />
        </div>

        {/* Activity Level Field */}
        <div>
          <label>{t("bmi.activityLevel", "Activity Level")}:</label>
          <select
            name="activityLevel"
            onChange={handleChange}
            value={formData.activityLevel}
          >
            <option value="">{t("bmi.selectActivityLevel", "Select Activity Level")}</option>
            <option value="inactive">{t("bmi.inactive", "Inactive")}</option>
            <option value="lightly_active">{t("bmi.lightlyActive", "Lightly Active")}</option>
            <option value="moderately_active">{t("bmi.moderatelyActive", "Moderately Active")}</option>
            <option value="very_active">{t("bmi.veryActive", "Very Active")}</option>
            <option value="extremely_active">{t("bmi.extremelyActive", "Extremely Active")}</option>
          </select>
        </div>

        {/* Goal Field */}
        <div>
          <label>{t("bmi.goal", "Goal")}:</label>
          <select name="goal" onChange={handleChange} value={formData.goal}>
            <option value="">{t("bmi.selectGoal", "Select Goal")}</option>
            <option value="maintain">{t("bmi.maintain", "Maintain Weight")}</option>
            <option value="lose">{t("bmi.lose", "Lose Weight")}</option>
            <option value="gain">{t("bmi.gain", "Gain Weight")}</option>
          </select>
        </div>

        {/* Email Field */}
        <div>
          <label>{t("bmi.email", "Email")}:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">{t("bmi.submitButton", "Calculate & Send BMI")}</button>
      </form>

      {/* Display BMI Result */}
      {bmi && (
        <div>
          <h2>{t("bmi.result", "Your BMI")}: {bmi}</h2>
        </div>
      )}
    </div>
  );
}