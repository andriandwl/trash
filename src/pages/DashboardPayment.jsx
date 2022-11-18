import React from "react";
import { Calendar } from "react-calendar";
import NavigationDashboard from "../components/navigation/NavigationDashboard";

function DashboardPayment() {
  const [date, setDate] = React.useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      <NavigationDashboard />
      <div className="row g-0">
        <div className="col-lg-3"></div>
        <div className="col-lg-9">
          <p className="museo text-center">Pembayaran</p>
        </div>
      </div>
      <div className="row g-0">
        <div
          className="col-lg-3"
          style={{
            backgroundColor: "#5caa47",
            borderRadius: "20px",
            boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="d-flex flex-wrap justify-content-between p-3">
            <h3 className="manrope" style={{ color: "white" }}>
              Date
            </h3>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card card-margin">
                  <div className="card-header no-border">
                    <h5 className="card-title">SUN</h5>
                  </div>
                  <div className="card-body pt-0">
                    <div className="widget-49">
                      <div className="widget-49-title-wrapper">
                        <div className="widget-49-date-primary">
                          <span className="widget-49-date-day">09</span>
                          <span className="widget-49-date-month">apr</span>
                        </div>
                        <div className="widget-49-meeting-info">
                          <span className="widget-49-pro-title">Payment</span>
                          <span className="widget-49-meeting-time">
                            Pukul 11:31:11
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
            </div>
          </div>
          <div className="row g-0">
            <div className="container">
              <div className="col-lg-12 mb-5"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="container">
            <div className="row g-0">
              <div className="row g-0">
                <div className="col-lg-12">
                  <div className="card profile-card-5">
                    <div className="row g-0 align-items-center">
                      <div className="col-lg-4">
                        <div className="card-img-block">
                          <Calendar onChange={onChange} value={date} />
                        </div>
                      </div>
                      <div className="col-lg-8 p-2">
                        <div class="input-group mb-3">
                          <span class="input-group-text">$</span>
                          <input
                            type="text"
                            value="15.000"
                            class="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <span class="input-group-text">.00</span>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                          <span
                            class="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            Date
                          </span>
                          <input
                            type="text"
                            value={date.toString()}
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        <div class="input-group mb-3">
                          <input
                            type="file"
                            class="form-control"
                            id="inputGroupFile03"
                            aria-describedby="inputGroupFileAddon03"
                            aria-label="Upload"
                          />
                        </div>
                        <div class="input-group mb-3">
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                          >
                            Button
                          </button>
                          <select
                            class="form-select"
                            id="inputGroupSelect03"
                            aria-label="Example select with button addon"
                          >
                            <option selected>Choose...</option>
                            <option value="1">Sudah Dibayar</option>
                            <option value="2">Belum Dibayar</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPayment;
