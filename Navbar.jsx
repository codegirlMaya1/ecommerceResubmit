import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">ORDERS</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customer">Customer</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/all-customers">All Customers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/management">Management Database</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;