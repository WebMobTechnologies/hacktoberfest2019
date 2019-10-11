import React from "react"
import Line from "./Line"

const HacktoberFest = () => (
  <div>
    <Line />
    <h2 className="title is-2 is-spaced">What's Hacktoberfest?</h2>
    <p className="p">
      <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">
        Hacktoberfest — brought to you by DigitalOcean
      </a>{" "}
      in partnership with{" "}
      <a href="https://dev.to/" target="_blank" rel="noopener noreferrer">
        DEV
      </a>{" "}
      — is a month-long celebration of open source software. Maintainers are
      invited to guide would-be contributors toward issues that will help move
      the project forward, and contributors get the opportunity to give back to
      both projects they like and others they've just discovered. No
      contribution is too small — bug fixes and documentation updates are valid
      ways of participating.
    </p>
    <p className="p">
      This year, <a href="https://webmobtech.com" target="_blank" rel="noopener noreferrer">WebMob Technologies</a> will
      hold the second official Hacktoberfest event in Ahmedabad.{" "}
      <strong>The event takes place on October 16.</strong>
    </p>

    <p className="p">
      Can't make it to this event? Hacktoberfest is virtual and open to
      participants from around the globe. Sign up to participate today at{" "}
      <a href="https://hacktoberfest.digitalocean.com" target="_blank" rel="noopener noreferrer" className="overflow-break">
        https://hacktoberfest.digitalocean.com
      </a>
      .
    </p>
  </div>
)

export default HacktoberFest
