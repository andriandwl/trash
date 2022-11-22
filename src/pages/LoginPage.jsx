import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/image/pictlogin.png";
import Navigation from "../components/navigation/Navigation";

function LoginPage({setToken}) {
  const BASE_URL = "http://pitrash.masuk.web.id";

  const [email, setEmail] = useState("");
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
        localStorage.setItem("accessToken", response.data.data.token)
        localStorage.setItem("id", response.data.data.user.id)
        localStorage.setItem("name", response.data.data.user.name);
        setToken(response.data.data);

        if (localStorage.getItem("name") === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navigation />
      <section className="mb-5 login-container" style={{ backgroundColor: "#fff" }}>
        <div className="container me-5 ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-10 col-xl-10 col-10">
              <div className="card card-login text-black" style={{ borderRadius: "20px", backgroundColor: "#fff" }}>
                <div className="card-body">
                  <div className="row ">
                    <div className=" col-md-6 order-2 order-lg-1">
                      <form className="mx-1 mx-md-4  text-end  " style={{ fontFamily: "manrope", marginTop: "7em"}}>
                        <p className="text-center h1 fw-medium mb-4 mx-1 mx-md-4" style={{ fontFamily: "museo" }}>
                          Login
                        </p>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                          <input type="text" id="email" placeholder="Email"   className="form-control rounded" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required style={{ backgroundColor: "#fff" }} />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>

                          <input type="password" id="password" placeholder="Password" className="form-control rounded" onChange={(e) => setPwd(e.target.value)} value={pwd} style={{ backgroundColor: "#fff" }} />
                        </div>

                        <div className="d-flex justify-content-center mx-1 mb-5 mb-lg-4">
                          <button type="button" className="btn btn-login fw-medium btn-lg" onClick={handleSubmit}>
                            Login
                          </button>
                        </div>
                        <hr style={{ height: "2px", borderWidth: "0", color: "gray", backgroundColor: "gray", marginTop: "6em" }} />
                        <label className="text-end " style={{ fontFamily: "manrope" }}>
                          Belum punya akun?
                          <Link to="/register" style={{ textDecoration: "none" }}>
                            <span style={{ color: "#5caa47" }}> Register disini.</span>
                          </Link>
                        </label>
                      </form>
                    </div>
                    <div className="col-md-6 d-flex align-items-center order-1 order-lg-2">
                      <img src={login} className="img-fluid text-center" style={{ width: "90%" }} alt="Sample" />
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
