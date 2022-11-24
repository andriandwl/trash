import React from "react";
import { Navigation } from "react-calendar";
import NavigationHome from "../components/navigation/NavigationHome";
import "../styles/Profile.css";

function ProfilePage() {
  return (
    <>
      {localStorage.getItem("name") === "admin" ? (
        <Navigation />
      ) : (
        <NavigationHome />
      )}
      <section className="uppage">
        <div className="container bg-light">
          <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div className="card card-style1 border-0">
                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0 ">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                        <h3
                          className="h2 text-white mb-0 "
                          style={{ fontFamily: "Manrope" }}
                        >
                          John mark Doe Kyzer
                        </h3>
                      </div>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Email:
                          </span>{" "}
                          jdoe@mail.com
                        </li>

                        <li className="display-28 mb-2 mb-xl-3">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Telepon:
                          </span>
                          081914168177
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Alamat:
                          </span>
                          Villa Situdaun, Jalan Desa Situdaun, RT.7/RW.2, Situ
                          Daun, Tenjolaya, Kab. Bogor, Tenjolaya, Jawa barat{" "}
                        </li>
                      </ul>

                      <button className="btn btn-success text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                          <path d="M16 5l3 3"></path>
                        </svg>
                      </button>
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

export default ProfilePage;
