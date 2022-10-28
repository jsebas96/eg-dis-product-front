import React, { FC } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import styles from "./styles.module.scss";

const NavBar: FC<{}> = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <Container>
        <Link
          to="/home"
          className="fs-3 ubuntu navbar-brand"
          style={{ color: "#00a859" }}
        >
          Ever
          <span style={{ color: "#048569" }}>Green</span>
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style>
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }

              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>
          <i className="fas fa-bars open fw-bold text-dark"></i>
          <i className="fas fa-times close fw-bold text-dark"></i>
        </Button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-6">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `nav-link ${styles.active}` : "nav-link mx-5"
              }
            >
              Productos
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? `nav-link ${styles.active}` : "nav-link mx-5"
              }
            >
              Nuevo Producto
            </NavLink>
          </div>
        </div>
      </Container>
    </Nav>
  );
};

export default NavBar;
