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
  const [users, setUsers] = React.useState([]);
  const [schdule, setSchdule] = React.useState([]);

  const [image, setImage] = React.useState("");

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }

  const getData = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/education`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        setEducationPost(response.data.data);
      });
  };
  const getAllUser = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/user`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        setUsers(response.data.data);
      });
  };

  const getSchdule = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/master`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setSchdule(response.data.data);
      });
  };

  const addPoster = () => {
    const formDataEdit = new FormData();
    formDataEdit.append("image", image);
    axios
      .post(`http://127.0.0.1:8000/api/poster/create`, formDataEdit, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          Accept: "application/json",
        },
      })
      .then(function (response) {
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getData();
    getAllUser();
    getSchdule();
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
                <div className="col-lg-4 mt-4 col-md-12 col-sm-12">
                  <div
                    className="card profile-card-5"
                    style={{
                      boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
                    }}
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
                        <h2 className="museo">{users.length}</h2>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <h5 className="card-title text-center">Users</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mt-4" id="screen">
                  <div
                    className="card profile-card-5"
                    style={{
                      boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
                    }}
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
                    <div className="card-body pt-0 p-5 mt-3">
                      <h5 className="card-title text-center">Education</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mt-4 ">
                  <div
                    className="card profile-card-5"
                    style={{
                      boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
                    }}
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
                          padding: "10px",
                          borderRadius: "20px",
                          color: "black",
                          fontSize: "24px",
                        }}
                      >
                        <p className="manrope" style={{ textAlign: "center" }}>
                          Pembayaran Sampah bulan ini
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
            <Pickup schdule={schdule} />

            <div className="container">
              <div className="row g-0">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <h2 className="manrope p-2">Poster</h2>
                  <button
                    className="border-0"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
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
              </div>
            </div>

            {/* modal */}

            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Poster
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={addPoster}>
                      <input
                        type="file"
                        className="form-control mb-2"
                        onChange={(e) => setImage(e.target.files[0])}
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                        accept=".jpg, .jpeg, .png"
                      />

                      <button
                        className="btn btn-outline-secondary w-100"
                        type="submit"
                        id="inputGroupFileAddon04"
                      >
                        Upload
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

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
                          <th scope="col">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => {
                          return (
                            <tr key={user.id}>
                              <th scope="row">{user.id}</th>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>{user.role}</td>
                            </tr>
                          );
                        })}
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
