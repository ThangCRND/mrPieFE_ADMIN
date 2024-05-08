import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Menu = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { adminInfo } = userLogin;

  useEffect(() => {
    if (!adminInfo) {
      redirectTo();
    }
  }, [dispatch, adminInfo]);

  const redirectTo = () => {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { referrer: "/" },
        }}
      />
    );
  };

  return (
    <aside className="main-sidebar min-vh-100 h-100 d-flex justify-content-center  sidebar-dark-primary elevation-4">
      {/* Brand Logo */}

      {/* Sidebar */}
      <div className="sidebar w-100  ">
        {/* Sidebar user panel (optional) */}
        <Link
          to={"/dashboard"}
          className="brand-link pb-3 d-flex justify-content-center  "
        >
          <img
            src="/logo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light"></span>
        </Link>
        
        {/* Sidebar Menu */}
        <nav className="">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-header"></li>
            {/* <li className="nav-item">
                            <Link to="/active" className="nav-link">
                                <i className="nav-icon fas fa-bell" />{" "}
                                <p> Active Orders</p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/delivery" className="nav-link">
                                <i className="nav-icon fas fa-truck" />{" "}
                                <p> Delivery</p>
                            </Link>
                        </li> */}

            <li className="nav-header">MANAGEMENT</li>

            <li className="nav-item">
              <Link to="/order" className="nav-link">
                <i className="nav-icon far fa-clipboard" /> <p> Orders</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/user" className="nav-link">
                <i className="nav-icon fas fa-users" /> <p> Users</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/category" className="nav-link">
                <i className="nav-icon fas fa-list-alt" /> <p> Categories</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/product" className="nav-link">
                <i className="nav-icon fas fa-hamburger" /> <p> Products</p>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/store/list" className="nav-link">
                <i className="nav-icon fas fa-store" /> <p> Store</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" /> <p> Report</p>
              </Link>
            </li> */}

            {/* <li className="nav-item">
                            <Link to="/client" className="nav-link">
                                <i className="nav-icon fas fa-user" />{" "}
                                <p> Clients</p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/table" className="nav-link">
                                <i className="nav-icon fas fa-border-all" />{" "}
                                <p> Tables</p>
                            </Link>
                        </li> */}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Menu;
