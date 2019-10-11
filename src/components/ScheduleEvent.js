import React from "react"
import Line from "./Line"

const agenda = [
  {
    time: "8:30 AM - 9:15 AM",
    desc: "Welcome note 📝",
  },
  {
    time: "9:15 AM - 9:30 AM",
    desc: "Introduction to Hacktoberfest and Git 🔥",
  },
  {
    time: "9:30 AM - 10:15 AM",
    desc: "Your 1st PR at Hacktoberfest 👆",
  },
  {
    time: "10:15 AM - 10:30 AM",
    desc: "Give us a breakkk! 😬",
    type: "break",
  },
  {
    time: "10:30 AM - 11:00 AM",
    desc: "Did you just hack me? 😱",
  },
  {
    time: "11:00 AM - 11:30 AM",
    desc: "Live quiz ❓",
    type: "fun",
  },
  {
    time: "11:30 AM - 12:00 PM",
    desc: "Can't we automate this? - lazy einstein 😎",
  },
  {
    time: "12:00 PM - 1:00 PM",
    desc: "Lunch is early, huh? 🍜",
    type: "break",
  },
  {
    time: "1:00 PM - 1:30 PM",
    desc: "Cloud computing? Computers can fly now? ☁️",
  },
  {
    time: "1:30 PM - 2:00 PM",
    desc: "Guess who? 🤔💭",
    type: "fun",
  },
  {
    time: "2:00 PM - 2:30 PM",
    desc: "Show me what you got 🙈",
  },
  {
    time: "2:30 PM - 3:00 PM",
    desc: "Tea time ( team pairing & arrangement ) ☕",
    type: "break",
  },
  {
    time: "3:00 PM - 4:30 PM",
    desc: "It's a show time 🕒",
  },
  {
    time: "4:30 PM - 6:00 PM",
    desc: "I said play! 🎮",
    type: "fun",
  },
  {
    time: "6:00 PM - 6:15 PM",
    desc: "Award - Swag distribution and Photo session 📷",
  },
]

const ScheduleEvent = () => (
  <div>
    <Line />
    <h2 className="title is-2 is-spaced">Agenda</h2>
    <table className="event-schedule">
      <tbody>
        {agenda.map(i => (
          <tr className={i.type}>
            <td className="time">{i.time}</td>
            <td className="desc">{i.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default ScheduleEvent
