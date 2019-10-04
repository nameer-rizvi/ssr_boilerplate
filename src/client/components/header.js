import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <header>
        <Link to="/" className="logo">
          {name}
        </Link>
        <nav>
          <a
            href="https://github.com/nameer-rizvi/ssr_boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline"
          >
            github
          </a>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.config.name
  };
}

export default connect(mapStateToProps)(Header);