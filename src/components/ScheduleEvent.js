import React from "react"
import Line from "./Line"

const ScheduleEvent = () => (
  <div>
    <Line />
    <h2 className="title is-2 is-spaced">Schedule</h2>
    <table className="event-schedule">
        <tbody>
            <tr>
                <td className="time">October 09, 2019 12:18</td>
                <td className="desc">Add Description here</td>
            </tr>
            <tr>
                <td className="time">October 09, 2019 12:18</td>
                <td className="desc">Add Description here</td>
            </tr>
            <tr>
                <td className="time">October 09, 2019 12:18</td>
                <td className="desc">Add Description here</td>
            </tr>
        </tbody>
    </table>
  </div>
)

export default ScheduleEvent
