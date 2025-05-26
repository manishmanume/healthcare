export const calendarData = {
  month: "October 2021",
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  dates: [
    { day: 25, appointments: ["10:00", "11:00", "12:00"] },
    { day: 26, appointments: ["08:00", "09:00", "10:00"] },
    { day: 27, appointments: ["12:00", null, "12:00"] }, // Null for empty slots
    { day: 28, appointments: ["10:00", "14:00", null] },
    { day: 29, appointments: [null, "14:00", "16:00"] },
    { day: 30, appointments: ["12:00", "15:00", "16:00"] },
    { day: 31, appointments: ["10:00", "15:00", "17:00"] },
  ],
};

export const upcomingAppointments = [
  {
    id: 1,
    day: "On Thursday",
    cards: [
      { title: "Health checkup complete", time: "11:00 AM" },
      { title: "Ophthalmologist", time: "14:00 PM" },
    ],
  },
  {
    id: 2,
    day: "On Saturday",
    cards: [
      { title: "Cardiologist", time: "12:00 AM" },
      { title: "Neurologist", time: "16:00 PM" },
    ],
  },
];