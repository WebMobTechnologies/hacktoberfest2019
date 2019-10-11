import React from "react"
import Line from "./Line"

const EventDetail = () => (
  <div>
    <Line />
    <h2 className="title is-2 is-spaced">Event details</h2>
    <p className="p">
      It's Hacktoberfest 2019! Let's celebrate open source over food, drinks,
      learning, and great company!
    </p>
    <p className="p">
      The event will feature lectures and workshops focused on enabling
      participants to collaborate on Open Source projects, so that all
      interested people (regardless of their level of knowledge / experience)
      can participate.
    </p>
    <p className="p">
      <strong>Do not forget:</strong> to participate in the event it is
      essential that you bring your machine. The event will be completely
      hands-on!
    </p>
    <ul>
      <li className="bullet">
        <span className="p">
          Hacktoberfest is open to everyone in our global community!
        </span>
      </li>
      <li className="bullet">
        <span className="p">
          Pull requests can be made in any GitHub-hosted repositories/projects.
        </span>
      </li>
      <li className="bullet">
        <span className="p">
          Sign up anytime between October 1 and October 31.
        </span>
      </li>
    </ul>
  </div>
)

export default EventDetail
