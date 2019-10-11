import React from "react"
import PropTypes from "prop-types"
import CookieConsent from "react-cookie-consent"
import Header from "./Header"
import "./layout.css"

class Layout extends React.Component {
  componentDidMount() {
    let toSlider = document.getElementById("slider")
    let d = [1, 2, 3]
    function next(i) {
      return i < d.length - 1 ? i + 1 : 0
    }
    setInterval(() => {
      let dset = parseInt(toSlider.getAttribute("data-set"))
      toSlider.classList.remove(`main-img${dset}`)
      toSlider.classList.add(`main-img${next(dset)}`)
      toSlider.setAttribute("data-set", next(dset))
    }, 5000)
  }

  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <CookieConsent
          location="bottom"
          buttonText="OK"
          cookieName="hacktoberfest_wmt"
          containerClasses="cookie-content"
          buttonClasses="cookie-btn"
          acceptOnScroll={true}
          acceptOnScrollPercentage={50}
        >
          We use cookies to provide enhance the user experience. By continuing
          to browse our website, you agree to our use of&nbsp;cookies.
        </CookieConsent>
        <div className="top-bg">
          <Header siteTitle="Hacktoberfest Open Hack Day" />
          <main className="main-img0 sliderimg" id="slider" data-set="0">
            {children}
          </main>
        </div>
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
