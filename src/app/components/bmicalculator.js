"use client"; // Označi kot Client Component
import { useEffect, useState } from "react";
//import emailjs from "emailjs-com";
import  '../../styles/bmicalculator.css';


export default function bmiCalculator() {

  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
    goal: "",
    email: "",
  });

  const [bmi, setBMI] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedBMI = calculateBMI();

    const emailData = {
      to_name: "User",
      to_email: formData.email,
      message: `Your calculated BMI is ${calculatedBMI}.`,
    };

    // emailjs
    //   .send(
    //     "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
    //     "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
    //     emailData,
    //     "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
    //   )
    //   .then(
    //     (response) => {
    //       console.log("Email sent successfully:", response);
    //       alert("BMI results sent to your email!");
    //     },
    //     (error) => {
    //       console.error("Error sending email:", error);
    //       alert("Failed to send email. Please try again later.");
    //     }
    //   );
  };

  return (
    <div className="bmiContainer">
    {bmi!=undefined? <div onClick={bmi}> </div> : <div></div> }
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Gender:</label>
          <select name="gender" onChange={handleChange} value={formData.gender}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Age (years):</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={formData.age}
            required
          />
        </div>

        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            onChange={handleChange}
            value={formData.weight}
            required
          />
        </div>

        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            onChange={handleChange}
            value={formData.height}
            required
          />
        </div>

        <div>
          <label>Activity Level:</label>
          <select
            name="activityLevel"
            onChange={handleChange}
            value={formData.activityLevel}
          >
            <option value="">Select Activity Level</option>
            <option value="inactive">Inactive</option>
            <option value="lightly_active">Lightly Active</option>
            <option value="moderately_active">Moderately Active</option>
            <option value="very_active">Very Active</option>
            <option value="extremely_active">Extremely Active</option>
          </select>
        </div>

        <div>
          <label>Goal:</label>
          <select name="goal" onChange={handleChange} value={formData.goal}>
            <option value="">Select Goal</option>
            <option value="maintain">Maintain Weight</option>
            <option value="lose">Lose Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        <button type="submit">Calculate & Send BMI</button>
      </form>

      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
        </div>
      )}
    </div>
  );
}
