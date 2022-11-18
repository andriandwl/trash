import React from "react";
import NavigationDashboard from "../components/navigation/NavigationDashboard";

import bguser from "../assets/image/bg-1.jpg";
import bgedukasi from "../assets/image/bg-2.jpg";
import bgnotif from "../assets/image/bg-5.jpg";

import "../styles/Dashboard.css";
import Pickup from "../components/Pickup";
import EdukasiDashboard from "../components/EdukasiDashboard";
import axios from "axios";

function Dashboard() {
  const [educationPost, setEducationPost] = React.useState([]);
  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  const getData = () => {
    axios
      .get(`https://jcc.brandingyou.id/api/post`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        setEducationPost(response.data.data);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <NavigationDashboard />
      <main>
        <div className="row g-0">
          <div className="col-lg-3"></div>
          <div className="col-lg-9">
            <h2 className="museo text-center">Overview</h2>
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
            <EdukasiDashboard educationPost={educationPost} />
          </div>

          <div className="col-lg-9">
            <div className="container">
              <div className="row g-0 gap-2 justify-content-between ms-2 me-2 mb-5">
                <div className="col-lg-4 mt-4">
                  <div
                    className="card profile-card-5"
                    style={{ boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div
                      className="card-img-block "
                      style={{ boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)" }}
                    >
                      <img className="card-img-top" src={bguser} alt="Card" />
                      <div
                        className="centered"
                        style={{
                          backgroundColor: "white",
                          padding: "20px",
                          borderRadius: "20px",
                          color: "black",
                          fontSize: "24px",
                        }}
                      >
                        <h2 className="museo">20</h2>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <h5 className="card-title text-center">Users</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mt-4">
                  <div
                    className="card profile-card-5"
                    style={{ boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div
                      className="card-img-block "
                      style={{ boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)" }}
                    >
                      <img
                        className="card-img-top"
                        src={bgedukasi}
                        alt="Card"
                      />
                      <div
                        className="centered"
                        style={{
                          backgroundColor: "white",
                          padding: "20px",
                          borderRadius: "20px",
                          color: "black",
                          fontSize: "24px",
                        }}
                      >
                        <h2 className="museo">{educationPost.length}</h2>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <h5 className="card-title text-center">Education</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-lg- mt-4 ">
                  <div
                    className="card profile-card-5"
                    style={{ boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div
                      className="card-img-block"
                      style={{ boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)" }}
                    >
                      <img className="card-img-top" src={bgnotif} alt="Card" />
                      <div
                        className="centered"
                        style={{
                          backgroundColor: "white",
                          padding: "20px",
                          borderRadius: "20px",
                          color: "black",
                          fontSize: "24px",
                        }}
                      >
                        <p className="manrope" style={{ textAlign: "center" }}>
                          Pengambilan sampah akan dilakukan pada hari Minggu
                        </p>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <h5 className="card-title text-center">Reminder</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tanggal */}
            <Pickup />

            {/* Table */}
            <div className="container">
              <div className="row g-0 ms-2 me-2">
                <div className="col-lg-12">
                  <h3 className="manrope mb-">Users</h3>
                  <div
                    className="table-responsive"
                    style={{ borderRadius: "10px" }}
                  >
                    <table className="table table-success table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nama</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Alamat</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>@mdo</td>
                          <td>0898977282</td>
                          <td>Bogor</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>@fat</td>
                          <td>0898977282</td>
                          <td>Bogor</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>0898977282</td>
                          <td>Bogor</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
