"use client";

import { useEffect, useState } from "react";
import "../../styles/schedule.css"; // Path to schedule styles

// Activity data
const activities = [
  { id: 1, day: "PON", time: "06:45-07:30", title: "BOOTCAMP", message: "Get fit fast!" },
  { id: 2, day: "PON", time: "08:00-08:45", title: "CORE", message: "Build your core strength." },
  { id: 3, day: "PON", time: "09:00-10:00", title: "PILATES", message: "Find your balance." },
  { id: 4, day: "PON", time: "17:00-18:00", title: "BOOTCAMP", message: "End your day strong!" },
  { id: 5, day: "TOR", time: "06:45-07:30", title: "BOOTCAMP", message: "Morning energy!" },
  { id: 6, day: "TOR", time: "08:00-09:00", title: "FIT SENIORS", message: "Stay active!" },
  { id: 7, day: "TOR", time: "17:15-18:00", title: "CORE", message: "Focus and stability." },
  { id: 8, day: "SRE", time: "06:45-07:30", title: "BOOTCAMP", message: "Early morning workout." },
  { id: 9, day: "SRE", time: "08:00-09:00", title: "BODY PUMP", message: "Strength session!" },
  { id: 10, day: "SRE", time: "09:00-10:00", title: "PILATES", message: "Stretch and tone." },
  { id: 11, day: "ČET", time: "06:45-07:30", title: "BOOTCAMP", message: "Power start!" },
  { id: 12, day: "ČET", time: "08:00-09:00", title: "FIT SENIORS", message: "Active lifestyle." },
  { id: 13, day: "ČET", time: "17:15-18:00", title: "CORE", message: "Evening focus." },
  { id: 14, day: "PET", time: "06:45-07:30", title: "BOOTCAMP", message: "Weekend vibes!" },
  { id: 15, day: "PET", time: "08:00-09:00", title: "BODY PUMP", message: "Lift heavy." },
  { id: 16, day: "PET", time: "17:30-18:00", title: "GRIT", message: "Push your limits." },
  { id: 17, day: "PET", time: "18:30-19:30", title: "MOBILITY", message: "Relax and recover." },
  { id: 18, day: "PET", time: "19:00-20:00", title: "BODY ATTACK", message: "High-energy cardio." },
  { id: 19, day: "PET", time: "20:00-21:00", title: "BODY STEP", message: "Step into fitness." },
  { id: 20, day: "SOB", time: "09:30-10:30", title: "BOOTCAMP", message: "Start your weekend!" },
  { id: 21, day: "SOB", time: "18:00-19:00", title: "MAXX BOOTY", message: "Glute-focused workout." },
  { id: 22, day: "NED", time: "09:30-10:30", title: "BOOTCAMP", message: "Keep moving!" },
];

export default function Schedule() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", time: "", day: "", message: "" });

  const handleOpenModal = (activity, day) => {
    setModalInfo({
      title: activity.title,
      time: activity.time,
      day: day,
      message: activity.message,
    });
    setIsOpen(true);
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("overlay")) {
      setIsOpen(false);
    }
  };

  const daysOfWeek = ["PON", "TOR", "SRE", "ČET", "PET", "SOB", "NED"];

  // Prepare a grid structure for the table
  const timeSlots = [...new Set(activities.map((activity) => activity.time))];
  const scheduleGrid = timeSlots.map((time) => {
    const row = { time };
    daysOfWeek.forEach((day) => {
      const activity = activities.find(
        (act) => act.time === time && act.day === day
      );
      row[day] = activity ? activity : null;
    });
    return row;
  });

  return (
    <div className="schedule">
      {isOpen && (
        <div className="overlay" onClick={handleCloseModal} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1000 }}>
          <div className="modal" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px", borderRadius: "8px", zIndex: 1001 }}>
            <button className="close-button" onClick={() => setIsOpen(false)} style={{ position: "absolute", top: "10px", right: "10px", background: "none", border: "none", fontSize: "18px", cursor: "pointer" }}>
              &times;
            </button>
            <h3>{modalInfo.title}</h3>
            <p>{modalInfo.time}</p>
            <p>{modalInfo.day}</p>
            <p>{modalInfo.message}</p>
          </div>
        </div>
      )}
      <h2>Urnik Vadbe</h2>
      <table className="schedule-table" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#black" }}>Čas</th>
            {daysOfWeek.map((day) => (
              <th key={day} style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#black" }}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scheduleGrid.map((row, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f9f9f9" }}>{row.time}</td>
              {daysOfWeek.map((day) => (
                <td key={day} style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                  {row[day] ? (
                    <button
                      className="activity-button"
                      onClick={() => handleOpenModal(row[day], day)}
                      style={{ background: "none", border: "none", color: "#007BFF", cursor: "pointer", textDecoration: "underline" }}
                    >
                      {row[day].title}
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
