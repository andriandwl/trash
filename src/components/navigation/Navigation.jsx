import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-lg-2 col-md-4 col-sm-12">
          <p className="logo mt-3 text-center" style={{ color: "#5caa47" }}>
            PiTrash
          </p>
        </div>
        <div className="col-lg-10 col-md-8 col-sm-12">
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
                    <a
                      className="nav-link active text-light"
                      aria-current="page"
                      href="/"
                      style={{ fontFamily: "Manrope" }}
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/edukasi"
                      style={{ fontFamily: "Manrope" }}
                    >
                      Edukasi
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle text-light manrope"
                      to="/layanan"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Layanan
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/layanan">
                          Penjadwalan
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/layanan">
                          Pengingat
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/layanan">
                          Pembayaran
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/kontak-kami"
                      style={{ fontFamily: "Manrope" }}
                    >
                      Kontak Kami
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/tentang-kami"
                      style={{ fontFamily: "Manrope" }}
                    >
                      Tentang Kami
                    </Link>
                  </li>
                </ul>
                <div>
                  <Link className="me-2" to="/dashboard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-app-indicator"
                      style={{ color: "white" }}
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                  </Link>
                  <Link to="/auth">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      style={{ color: "white" }}
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
