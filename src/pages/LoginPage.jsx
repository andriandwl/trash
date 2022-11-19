import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import login from "../assets/image/pictlogin.png";
import Navigation from "../components/navigation/Navigation";

function LoginPage() {
  const BASE_URL = "https://jcc.brandingyou.id/api";

  const [email, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}/login`,
        {
          username: email,
          password: pwd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.data.token);
        localStorage.setItem("accessToken", response.data.data.token);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navigation />

        <section className="my-3" style={{ backgroundColor: "#fff" }}>
          <div className="container me-5 ">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-lg-12 col-xl-11">
                <div className="card card-login text-black" style={{ borderRadius: "20px", backgroundColor: "#D5F0C5" }}>
                  <div className="card-body p-md-2">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <form className="mx-1 mx-md-4 " style={{ fontFamily: "manrope", marginTop:'7em' }}>
                        <p className="text-center h1 fw-medium mb-4 mx-1 mx-md-4" style={{ fontFamily: "museo",  }}>
                          Login
                        </p>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                            <input type="text" id="email" placeholder="Email" className="form-control rounded" autoComplete="off" onChange={(e) => setUser(e.target.value)} value={email} required style={{ backgroundColor: "#fff" }} />
                          </div>

                          <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>

                            <input type="password" id="password" placeholder="Password" className="form-control rounded" onChange={(e) => setPwd(e.target.value)} value={pwd} required style={{ backgroundColor: "#fff" }} />
                          </div>

                          <div className="form-check d-flex justify-content-end mb-4">
                            <label className="form-check-label fw-bold" htmlFor="form2Example3">
                              Belum punya akun?
                              <Link to="/register" style={{ textDecoration: "none" }}>
                                <small> Register disini.</small>
                              </Link>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-1 mb-5 mb-lg-4">
                            <button type="button" className="btn btn-login fw-medium btn-lg" onClick={handleSubmit}>
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-12 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src={login} className="img-fluid text-center" style={{width:'90%'}} alt="Sample" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}

export default LoginPage;
