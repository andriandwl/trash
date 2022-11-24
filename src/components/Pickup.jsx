import React from "react";
import { Link } from "react-router-dom";

function Pickup({ schedule, incoming }) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  return (
    <div className="container">
      <div className="row g-0 mb-4 gap-4 justify-content-between">
        <div className="col-lg-12">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <h2 className="manrope p-2">History</h2>
          </div>
          <div className="row g-0 gap-2">
            {schedule.map((his) => {
              return (
                <div className="col-lg-3 card-group" key={his.id}>
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title">{his.Begin_Date}</h5>
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
                              {his.Category}
                            </span>
                            <span className="widget-49-meeting-time">
                              {his.Due_Date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <h2 className="manrope p-2">Incoming</h2>
            <button
              data-bs-toggle="modal"
              data-bs-target="#examplePickup"
              type="button"
              className="border-0"
              style={{ backgroundColor: "transparent" }}
            >
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
            </button>
          </div>
          <div
            className="modal fade"
            id="examplePickup"
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
                  <form>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        user_id
                      </span>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        Date
                      </span>
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2018-07-22"
                        onChange={(e) => setTitle(e.target.value)}
                        min="2018-01-01"
                        max="2018-12-31"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Due Date</span>
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2018-07-22"
                        onChange={(e) => setTitle(e.target.value)}
                        min="2018-01-01"
                        max="2018-12-31"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option disabled>Category</option>
                        <option value="1">Pickup</option>
                        <option value="2">Pembayaran</option>
                      </select>
                    </div>
                    <button
                      className="btn mt-2 btn-outline-secondary"
                      type="submit"
                      id="inputGroupFileAddon04"
                    >
                      Button
                    </button>
                  </form>
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
          <div className="row g-0 gap-2">
            {incoming.map((inc) => {
              return (
                <div key={inc.id} className="col-lg-3 card-group">
                  <div className="card card-margin">
                    <div
                      className="card-header border-2 mb-2"
                      style={{ backgroundColor: "#5caa47", color: "white" }}
                    >
                      <h5 className="card-title">{inc.Begin_Date}</h5>
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
                              {inc.Category}
                            </span>
                            <span className="widget-49-meeting-time">
                              {inc.Due_Date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pickup;
