import axios from "axios";
import React, { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NavigationDashboard from "../components/navigation/NavigationDashboard";

function SchdulingPage() {
  const [date, setDate] = React.useState(new Date());
  const [master, setMaster] = React.useState([]);

  const onChange = (date) => {
    setDate(date);
  };

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }

  const getDataMaster = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/master`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setMaster(response.data.data);
      });
  };
  useEffect(() => {
    getDataMaster();
  }, []);

  return (
    <div>
      <NavigationDashboard />
      <div className="row g-0">
        <div className="col-lg-3"></div>
        <div className="col-lg-9">
          <h2 className="museo text-center">Penjadwalan</h2>
        </div>
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
                {master.map((mas) => {
                  return (
                    <div key={mas.id} className="card card-margin">
                      <div className="card-header no-border">
                        <h5 className="card-title">{mas.day}</h5>
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
                                Pickup
                              </span>
                              <span className="widget-49-meeting-time">
                                {mas.created_at}
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
                  );
                })}
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
                        <div className="input-group input-group-sm mb-3">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            Small
                          </span>
                          <input
                            type="text"
                            value={date.toString()}
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            Button
                          </button>
                          <select
                            className="form-select"
                            id="inputGroupSelect03"
                            aria-label="Example select with button addon"
                          >
                            <option selected>Choose...</option>
                            <option value="1">Pembayaran</option>
                            <option value="2">Pickup</option>
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

export default SchdulingPage;
