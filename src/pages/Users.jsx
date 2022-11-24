import axios from "axios";
import React, { useEffect, useState } from "react";
import NavigationDashboard from "../components/navigation/NavigationDashboard";

function Users() {
  const [users, setUsers] = useState([]);

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }
  const getAllUser = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/user`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        setUsers(response.data.data);
        console.log(response.data.data);
      });
  };
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div>
      <NavigationDashboard />
      <div className="row g-0">
        <div className="col-lg-3"></div>
        <div className="col-lg-9">
          <h2 className="museo text-center">Users</h2>
        </div>
        <div
          className="col-lg-3"
          style={{
            backgroundColor: "#5caa47",
            borderRadius: "20px",
            boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center p-3">
            <div className="col-lg-4">
              <h3 className="manrope" style={{ color: "white" }}>
                Edukasi
              </h3>
            </div>
            <div className="col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="find ..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="container">
            <table className="table table-striped">
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
  );
}

export default Users;
