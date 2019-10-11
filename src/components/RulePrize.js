import React from "react"
import Line from "./Line"

const RulePrize = () => (
  <div>
    <Line />
    <h2 className="title is-2 is-spaced">Rules and prizes</h2>
    <p className="p">
      To qualify for the official limited edition Hacktoberfest shirt, you must
      register and make <strong>four pull requests (PRs)</strong> between{" "}
      <strong>October 1-31 (in any time zone)</strong>. PRs can be made to any
      public repo on GitHub, not only the ones with issues labeled
      Hacktoberfest. If a maintainer reports your pull request as spam or
      behavior not in line with the project’s code of conduct, you will be
      ineligible to participate. This year, the first 50,000 participants who
      successfully complete the challenge will earn a T-shirt.
    </p>
  </div>
)

export default RulePrize
