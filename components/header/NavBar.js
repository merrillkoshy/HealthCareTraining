import React, { useState } from "react";
import { withRouter } from "next/router";

import Link from "../../utils/ActiveLink";
import SideDrawer from "./SideDrawer";
import SearchForm from "./SearchForm";
import LoginModal from "./LoginModal";

class Navbar extends React.Component {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
    modalShow: false
  };

  setModalShow = () => {
    this.setState({
      modalShow: !this.state.modalShow
    });
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleDrawer = () => {
    this.setState(prevState => {
      return {
        drawer: !prevState.drawer
      };
    });
  };

  handleSearchForm = () => {
    this.setState(prevState => {
      return {
        searchForm: !prevState.searchForm
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let layOutCls = "";
    let logo = "/images/logo.png";

    const { collapsed } = this.state;
    const { modalShow } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <React.Fragment>
        <header id="header">
          <div id="navbar" className={`crake-nav ${layOutCls}`}>
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src={logo} alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="icofont-navigation-menu"></i>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav nav ml-auto">
                    <li className="nav-item">
                      <Link activeClassName="active" href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="#">
                        <a className="nav-link">About Us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="#">
                        <a className="nav-link">Course List</a>
                      </Link>
                      <ul className="dropdown_menu">
                        <li>
                          <Link activeClassName="active" href="#">
                            <a>Course 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="#">
                            <a>Course 2</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="#">
                            <a>Course 3</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="#">
                            <a>Course 4</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link activeClassName="active" href="#">
                        <a className="nav-link">Media</a>
                      </Link>
                      <ul className="dropdown_menu">
                        <li>
                          <Link activeClassName="active" href="#">
                            <a>Research</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="#">
                            <a>Industry updates</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="#">
                            <a>Blogs</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="#">
                            <a> Features Talks</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link activeClassName="active" href="#">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="user-interaction">
                  <ul className="navbar-nav">
                    <a onClick={this.setModalShow} title="Login">
                      {" "}
                      Login
                    </a>
                  </ul>
                </div>
                <div className=" others-option">
                  <ul className="navbar-nav">
                    <li className="header-search-box">
                      <Link activeClassName="active" href="#">
                        <a
                          onClick={e => {
                            e.preventDefault();
                            this.handleSearchForm();
                          }}
                          title="Search"
                        >
                          <i className="icofont-search-2"></i>
                        </a>
                      </Link>
                    </li>
                    <li onClick={this.handleDrawer}>
                      <div className="side-menu">
                        <span className="bar-1"></span>
                        <span className="bar-2"></span>
                        <span className="bar-3"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ""}
        {this.state.searchForm ? (
          <SearchForm onClick={this.handleSearchForm} />
        ) : (
          ""
        )}
        <LoginModal show={modalShow} onHide={this.setModalShow} />
      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);
