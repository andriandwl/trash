import React from "react";
import { Link } from "react-router-dom";
import account from "../../assets/icons/profiles.png";
import notifikasi from "../../assets/icons/notif.png";

function NavigationDashboard() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <p className="logo m-3 text-center" style={{ color: "/5caa47" }}>
            PiTrash
          </p>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <nav
            className="navbar navbar-expand-lg"
            style={{ borderRadius: "0px 0px 0px 30px" }}
          >
            <div className="container-fluid justify-content-end">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <Link
                      to="/dashboard"
                      className="nav-link active text-light"
                      aria-current="page"
                      href="/"
                      style={{ fontFamily: "Manrope" }}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/dashboard/edukasi"
                      style={{ fontFamily: "Manrope" }}
                    >
                      Edukasi
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-light manrope"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Layanan
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/dashboard/penjadwalan"
                        >
                          Penjadwalan
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Pengingat
                        </a>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/dashboard/pembayaran"
                        >
                          Pembayaran
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/dashboard/users"
                      style={{ fontFamily: "Manrope" }}
                    >
                      Users
                    </Link>
                  </li>
                </ul>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  <Link
                    className="me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src={notifikasi}
                      alt="icon-profile"
                      width="27px"
                      height="27px"
                      style={{
                        boxShadow: "5px",
                      }}
                    />
                  </Link>
                  <Link to="/">
                    <img
                      src={account}
                      alt="icon-profile"
                      width="30px"
                      height="30px"
                      style={{
                        boxShadow: "5px",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* modals */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div
                  className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
                  style={{ width: "100%" }}
                >
                  <a
                    href="/"
                    className="d-flex align-items-center flex-shrink-0 link-dark text-decoration-none border-bottom"
                  >
                    <svg
                      className="bi pe-none me-2"
                      width="30"
                      height="24"
                    ></svg>
                  </a>
                  <div className="list-group list-group-flush border-bottom scrollarea">
                    <a
                      href="/"
                      className="list-group-item list-group-item-action active py-3 lh-sm"
                      aria-current="true"
                    >
                      <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">
                          List group item heading
                        </strong>
                        <small>Wed</small>
                      </div>
                      <div className="col-10 mb-1 small">
                        Some placeholder content in a paragraph below the
                        heading and date.
                      </div>
                    </a>
                    <a
                      href="/"
                      className="list-group-item list-group-item-action py-3 lh-sm"
                    >
                      <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">
                          List group item heading
                        </strong>
                        <small className="text-muted">Tues</small>
                      </div>
                      <div className="col-10 mb-1 small">
                        Some placeholder content in a paragraph below the
                        heading and date.
                      </div>
                    </a>
                    <a
                      href="/"
                      className="list-group-item list-group-item-action py-3 lh-sm"
                    >
                      <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">
                          List group item heading
                        </strong>
                        <small className="text-muted">Mon</small>
                      </div>
                      <div className="col-10 mb-1 small">
                        Some placeholder content in a paragraph below the
                        heading and date.
                      </div>
                    </a>

                    <a
                      href="/"
                      className="list-group-item list-group-item-action py-3 lh-sm"
                      aria-current="true"
                    >
                      <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">
                          List group item heading
                        </strong>
                        <small className="text-muted">Wed</small>
                      </div>
                      <div className="col-10 mb-1 small">
                        Some placeholder content in a paragraph below the
                        heading and date.
                      </div>
                    </a>
                    <a
                      href="/"
                      className="list-group-item list-group-item-action py-3 lh-sm"
                    >
                      <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">
                          List group item heading
                        </strong>
                        <small className="text-muted">Tues</small>
                      </div>
                      <div className="col-10 mb-1 small">
                        Some placeholder content in a paragraph below the
                        heading and date.
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationDashboard;
