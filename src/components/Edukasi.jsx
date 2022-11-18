import React from "react";

import { Link } from "react-router-dom";

function Edukasi({ allpost }) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between p-3">
        <h3 className="manrope" style={{ color: "white" }}>
          Edukasi
        </h3>
        <Link to="/dashboard/tambah-edukasi ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            style={{ fontWeight: "bold" }}
            className="bi bi-plus-square m-2 text-light"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </Link>
      </div>
      <div className="row g-0">
        <div className="container">
          {allpost.map((edu) => {
            return (
              <div key={edu.id} className="col-lg-12 mb-5">
                <div className="card profile-card-5">
                  <div className="card-img-block">
                    <img className="card-img-top" src={edu.image} alt="Card" />
                  </div>
                  <div className="card-body pt-0">
                    <h5 className="card-title text-center">{edu.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Edukasi;
