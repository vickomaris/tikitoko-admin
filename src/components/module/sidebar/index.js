import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        {/* <img src={logo} alt="logo" /> */}
        <div className="sidebar-brand-text mx-3">Tikitoko Admin</div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-home"></i>
          <span>Home</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Manage</div>

      {/* <!-- Nav Item - Users --> */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseUsers"
          aria-expanded="true"
          aria-controls="collapseUsers"
        >
          <i className="fas fa-fw fa-users"></i>
          <span>Users</span>
        </Link>
        <div
          id="collapseUsers"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Manage Users :</h6>
            <Link className="collapse-item" to="/buyer">
              Buyer
            </Link>
            <Link className="collapse-item" to="/seller">
              Seller
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Categories --> */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseCategories"
          aria-expanded="true"
          aria-controls="collapseCategories"
        >
          <i className="fas fa-fw fa-list"></i>
          <span>Categories</span>
        </Link>
        <div
          id="collapseCategories"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Manage Categories :</h6>
            <Link className="collapse-item" to="/categorynew">
              Insert
            </Link>
            <Link className="collapse-item" to="/category">
              Database
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Products --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/product">
          <i className="fas fa-fw fa-box"></i>
          <span>Products</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
