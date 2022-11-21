import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import register from "../assets/image/pict_regis.png";
import Navigation from "../components/navigation/Navigation";
function RegisterPage() {
  gsap.registerPlugin(TextPlugin);
  gsap.to(".lead", {
    duration: 4,
    delay: 2,
    text: "Orang Bijak Tidak Buang Sampah Sembarangan",
  });
  //gsap.from(".anim", { duration: 5, x: 0, opacity: 1, delay: 0.5, ease: "back" });

  const BASE_URL = "http://pitrash.masuk.web.id";

  const [nm, setNama] = useState("");
  const [eml, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [almt, setAlamt] = useState("");
  const [telp, setTelp] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${BASE_URL}/api/register`,
        {
          name: nm,
          phone: telp,
          email: eml,
          password: pwd,
          address: almt,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        // localStorage.setItem(response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navigation />
      <section
        className="my-2"
        style={{ backgroundColor: "#fff", fontFamily: "Manrope" }}
      >
        <div className="container me-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card card-register text-black"
                style={{ borderRadius: "20px", backgroundColor: "#fff" }}
              >
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-6 order-2 order-lg-1">
                      <p
                        className="text-center h1 fw-medium mb-4 mx-1 mx-md-4 mt-4"
                        style={{ fontFamily: "museo" }}
                      >
                        Register
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                          <input
                            type="text"
                            id="name"
                            placeholder="Nama Lengkap"
                            className="form-control rounded bg-light"
                            value={nm}
                            required
                            onChange={(e) => setNama(e.target.value)}
                          />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                          <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="form-control rounded bg-light"
                            onChange={(e) => setEmail(e.target.value)}
                            value={eml}
                            required
                            autoComplete="off"
                          />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>

                          <input
                            type="password"
                            id="password"
                            className="form-control rounded"
                            placeholder="Password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            style={{ backgroundColor: "#fff" }}
                          />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className=" flex-fill mb-0">
                            <input
                              type="number"
                              id="telepon"
                              placeholder="Telepon"
                              className="form-control rounded"
                              onChange={(e) => setTelp(e.target.value)}
                              value={telp}
                              required
                              style={{ backgroundColor: "#fff" }}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>

                          <input
                            type="text-area"
                            id="alamat"
                            placeholder="Alamat"
                            className="form-control rounded"
                            onChange={(e) => setAlamt(e.target.value)}
                            value={almt}
                            required
                            style={{ backgroundColor: "#fff" }}
                          />
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-regis btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-6 align-items-center order-1 order-lg-2">
                      <div className="judul">
                        <h3
                          className="text-center p-2 mt-4"
                          style={{ fontFamily: "museo" }}
                        >
                          Ayo Jaga Dan Lestarikan Lingkungan
                        </h3>
                        <p className="lead text-center small"></p>
                        <img
                          src={register}
                          className="img-fluid "
                          style={{
                            borderRadius: "20px",
                            position: "relative",
                            width: "80%",
                            top: "30px",
                          }}
                          alt="Sample"
                        />
                      </div>
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

export default RegisterPage;
