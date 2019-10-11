import PropTypes from "prop-types"
import React from "react"
import Logo from '../../static/images/header-logo.svg'

const Header = ({ siteTitle }) => 
<header>
  <nav class="navbar" id="navbar">
  <img id="header-logo" src={Logo} alt="Hacktoberfest Logo" width="475" />
  {/* <ul class="navbar-end">
    <li><a class="active navLink" href="/">home</a></li>
    <li><a class="navLink" href="#detail">details</a></li>
    <li><a class="navLink" href="#schedule">schedule</a></li>
    <li><a class="navLink" href="#rules">rules</a></li>
  </ul> */}
  </nav>
</header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
