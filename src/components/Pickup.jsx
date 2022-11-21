import React from "react";
import { Link } from "react-router-dom";

function Pickup({ incoming, history }) {
  return (
    <div className="row gap-4 p-2 g-0 mb-2">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h2 className="manrope p-2">History Pickup</h2>
        <Link to="/dashboard/penjadwalan">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </Link>
      </div>

      {history
        .filter((item, idx) => item.Category === "Pickup" && idx < 3)
        .map((date) => {
          return (
            <div className="col-lg-3" key={date.id}>
              <div className="card card-margin">
                <div className="card-header no-border">
                  <h5 className="card-title">{date.Date}</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                      <div className="widget-49-date-primary">
                        <span className="widget-49-date-day">09</span>
                        <span className="widget-49-date-month">apr</span>
                      </div>
                      <div className="widget-49-meeting-info">
                        <span className="widget-49-pro-title">
                          {date.Category}
                        </span>
                        <span className="widget-49-meeting-time">
                          {date[`Due Date`]}
                        </span>
                      </div>
                    </div>
                    <div className="widget-49-meeting-action">
                      <a
                        href="/"
                        className="btn btn-sm btn-flash-border-primary"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div className="row gap-4  g-0 mb-2">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <h2 className="manrope p-2">History Pembayaran</h2>
          <Link to="/dashboard/payment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </Link>
        </div>

        {history
          .filter((item) => item.Category === "Pembayaran")
          .map((pay) => {
            return (
              <div key={pay.id} className="col-lg-3">
                <div className="card card-margin">
                  <div
                    className="card-header border-2 mb-2"
                    style={{ backgroundColor: "#5caa47", color: "white" }}
                  >
                    <h5 className="card-title">{pay.Date}</h5>
                  </div>
                  <div className="card-body pt-0">
                    <div className="widget-49">
                      <div className="widget-49-title-wrapper">
                        <div className="widget-49-date-primary">
                          <span className="widget-49-date-day">01</span>
                          <span className="widget-49-date-month">apr</span>
                        </div>
                        <div className="widget-49-meeting-info">
                          <span className="widget-49-pro-title">
                            {pay.Category}
                          </span>
                          <span className="widget-49-meeting-time">
                            {pay[`Due Date`]}
                          </span>
                        </div>
                      </div>
                      <div className="widget-49-meeting-action">
                        <a
                          href="/"
                          className="btn btn-sm btn-flash-border-primary"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Pickup;
