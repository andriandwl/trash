import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/image/pictlogin.png";

function LoginPage({ setToken }) {
  const BASE_URL = "http://pitrash.masuk.web.id";

  const [email, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  // React.useEffect(() => {
  //   setAuthedUser();
  //   setInitializing(false);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}/api/login`,
        {
          email: email,
          password: pwd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        localStorage.setItem("accessToken", response.data.data.token);
        localStorage.setItem("name", response.data.data.user.name);
        setToken(response.data.data);

        if (localStorage.getItem("name") === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <section className="vh-100" style={{ backgroundColor: "#fff" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card card-login text-black"
                style={{ borderRadius: "20px", backgroundColor: "#D5F0C5" }}
              >
                <div className="card-body p-md-2">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        style={{ fontFamily: "manrope" }}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                          <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            className="form-control rounded"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={email}
                            required
                            style={{ backgroundColor: "#fff" }}
                          />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="form-control rounded"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            style={{ backgroundColor: "#fff" }}
                          />
                        </div>

                        <div className="d-flex justify-content-center mx-1 mb-5 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-login fw-bold btn-lg"
                            onClick={handleSubmit}
                          >
                            Login
                          </button>
                        </div>

                        <div className="form-check d-flex justify-content-end ">
                          <label
                            className="form-check-label fw-bold"
                            htmlFor="form2Example3"
                          >
                            Belum punya akun?
                            <Link to="/register">
                              <small>Register disini.</small>
                            </Link>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={login}
                        className="img-fluid "
                        style={{ borderRadius: "" }}
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
