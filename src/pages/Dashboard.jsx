import React from "react";
import NavigationDashboard from "../components/navigation/NavigationDashboard";

import bguser from "../assets/image/bg-1.jpg";
import bgedukasi from "../assets/image/bg-2.jpg";
import bgnotif from "../assets/image/bg-5.jpg";

import "../styles/Dashboard.css";
import Pickup from "../components/Pickup";
import EdukasiDashboard from "../components/EdukasiDashboard";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import SearchBarTrans from "../components/SearchBarTrans";
import EditUser from "../components/navigation/EditUser";

function Dashboard() {
  const [educationPost, setEducationPost] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [schedule, setSchdule] = React.useState([]);
  const [incoming, setIncoming] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [statusId, setStatusId] = React.useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  const [search, setSearch] = React.useState(keyword || "");

  const onKeywordChangeHandler = (search) => {
    setSearch(search);
    changeSearchParams(search);
  };

  const [image, setImage] = React.useState("");
  const [statusTransaction, setStatusTransaction] = React.useState("");
  const [poster, setPoster] = React.useState([]);
  const [transaction, setTransaction] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const navigate = useNavigate();

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
        setFilteredData(response.data.data);
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

  const getSchduleHistory = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/schedule/pickup`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        setSchdule(response.data.data.history);
      });
  };

  const getSchduleIncoming = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/schedule/pickup`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        setIncoming(response.data.data.incoming);
      });
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "User Id",
      selector: (row) => row.user_id,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Image",
      selector: (row) => row.image,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-dark"
          onClick={() => {
            handleEditTransaction(row.id);
            setStatusTransaction(row.status);
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModale"
        >
          Edit
        </button>
      ),
    },
  ];

  const handleDelete = (id) => {
    axios
      .delete(`http://pitrash.masuk.web.id/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        getAllUser();
      });
  };

  const columnsUser = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <>
            <EditUser users={row} />
            <button
              type="button"
              onClick={() => handleDelete(row.id)}
              className="btn border-0"
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];

  const handleStatus = () => {
    console.log(statusId);
    const formDataEdit = new FormData();
    formDataEdit.append("status", statusTransaction);
    axios
      .post(
        `http://pitrash.masuk.web.id/api/transaction/${statusId}`,
        formDataEdit,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setStatusTransaction("");
      });
  };
  const handleEditTransaction = (id) => {
    setStatusId(id);
  };

  const getTransaction = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/transaction`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        setTransaction(response.data.data);
      });
  };

  const addPoster = (e) => {
    e.preventDefault();
    const formDataEdit = new FormData();
    formDataEdit.append("image", image);
    axios
      .post(`http://pitrash.masuk.web.id/api/poster/create`, formDataEdit, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          Accept: "application/json",
        },
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const getPoster = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/poster`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        setPoster(response.data.data);
      });
  };

  const handleEditUser = () => {};

  const filterTransaction = React.useMemo(
    () =>
      transaction?.filter((edue) => {
        return edue.status.toLowerCase().includes(search.toLowerCase());
      }),
    [transaction, search]
  );

  React.useEffect(() => {
    getData();
    getAllUser();
    getSchduleHistory();
    getSchduleIncoming();
    getPoster();
    getTransaction();

    setIsLoading(false);
  }, []);

  return isLoading ? (
    <>
      <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  ) : (
    <div>
      <NavigationDashboard />
      <main>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3"></div>
            <div className="col-lg-9">
              <h2 className="museo text-center">Overview</h2>
            </div>
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
                <div className="col-lg-4 mt-4 col-md-12 col-sm-12 card-group">
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
                <div className="col-lg-3 mt-4 card-group" id="screen">
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
                    <div className="card-body">
                      <h5 className="card-title text-center">Education</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mt-4 card-group ">
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
                          padding: "20px",
                          borderRadius: "20px",
                          color: "black",
                          fontSize: "24px",
                        }}
                      >
                        <h2 className="museo">{poster.length}</h2>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <h5 className="card-title text-center">Poster</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-0">
                <div className="col-lg-12">
                  <h1 className="manrope text-center">Search</h1>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with dropdown button"
                    />
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Filter
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link className="dropdown-item" to="/">
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          User
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Transaction
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tanggal */}
            <Pickup schedule={schedule} incoming={incoming} />

            <div className="container">
              <div className="row g-0 mb-5 justify-content-center">
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
                {poster.map((post) => {
                  return (
                    <div
                      key={post.id}
                      className="col-lg-4 mt-4 col-md-12 col-sm-12"
                    >
                      <div
                        className="card profile-card-5"
                        style={{
                          boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <div
                          className="card-img-block "
                          style={{
                            boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          <img
                            className="card-img-top"
                            src={post.image}
                            alt="Card"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
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

            {/* data tables user*/}
            <div className="container mb-4">
              <div className="row g-0">
                <div className="col-lg-12">
                  <p className="manrope">Users</p>
                </div>

                <div className="col-lg-12">
                  <DataTable
                    columns={columnsUser}
                    data={users}
                    pagination
                  ></DataTable>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row g-0">
                <div className="col-lg-8">
                  <p className="manrope">Transaction</p>
                </div>
                <div className="col-lg-4">
                  <SearchBarTrans
                    keyword={search}
                    keywordChange={onKeywordChangeHandler}
                  />
                </div>
                <div className="col-lg-12">
                  <DataTable
                    columns={columns}
                    data={filterTransaction}
                    pagination
                  ></DataTable>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModale"
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
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleStatus();
                      }}
                    >
                      <div className="input-group input-group-sm mb-3">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Status
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          value={statusTransaction}
                          onChange={(e) => setStatusTransaction(e.target.value)}
                        />
                      </div>
                      <button type="submit">Submit</button>
                    </form>
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
