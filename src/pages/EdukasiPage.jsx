import React from "react";

import sampah1 from "../assets/pictAgus/api.jpg";
import banner from "../assets/pictAgus/perpustakaan.png";
import sampah2 from "../assets/pictAgus/sam.jpg";
import sampah4 from "../assets/pictAgus/save.jpg";
import sampah3 from "../assets/pictAgus/trs.jpg";
import Crsl from "../components/Carousel";
import Navigation from "../components/navigation/Navigation";

function EdukasiPage() {
  return (
    <div>
      <Navigation />
      <div className="container " style={{ marginTop: "100px" }}>
        <div className="row text-left mt-lg-5">
          <div className="col-6">
            <p
              className="blockquote-footer fw-bold text-dark text-start"
              style={{ marginTop: "" }}
            >
              EDUKASI
            </p>
            <h4 className="text-dark display-4">Menjaga Lingkungan</h4>
            <small className="text-dark">
              Kebersihan lingkungan merupakan hal yang tak terpisahkan dari
              kehidupan manusia dan merupakan unsur yang fundamental dalam ilmu
              kesehatan dan pencegahan.
            </small>
          </div>

          <div className="col-12 text-dark">
            <img src={banner} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="container d-flex p-5 ">
        <div className="row text-center">
          <div className="col text-start">
            <h5 style={{ fontFamily: "manrope" }}>
              Yuk baca dulu edukasi tentang sampah...
            </h5>
          </div>
          <div className="container d-flex justify-content-center align-content-center ">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-12 mt-4 ">
                <div
                  className="card mx-auto d-block mb-2 shadow-lg "
                  style={{ borderRadius: "5% 5% 5% 5%", width: "18rem" }}
                >
                  <img
                    src={sampah1}
                    className="card-img-top mt-4"
                    alt="..."
                    style={{ width: "10rem" }}
                  />
                </div>
                <p>Pentingnya Edukasi pengelolaan sampah</p>
                <button className="btn btn-success">see more</button>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 mt-4 ">
                <div
                  className="card mx-auto d-block mb-2 shadow-lg "
                  style={{ borderRadius: "5% 5% 5% 5%", width: "18rem" }}
                >
                  <img
                    src={sampah4}
                    className="card-img-top mt-4 p-2"
                    alt="..."
                    style={{ width: "14rem" }}
                  />
                </div>
                <p>Pentingnya Edukasi pengelolaan sampah</p>
                <button className="btn btn-success">see more</button>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 mt-4 ">
                <div
                  className="card mx-auto d-block mb-2 shadow-lg "
                  style={{ borderRadius: "5% 5% 5% 5%", width: "18rem" }}
                >
                  <img
                    src={sampah2}
                    className="card-img-top mt-4 "
                    alt="..."
                    style={{ width: "14rem" }}
                  />
                </div>
                <p>Pentingnya Edukasi pengelolaan sampah</p>
                <button className="btn btn-success">see more</button>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 mt-4 ">
                <div
                  className="card mx-auto d-block mb-2 shadow-lg "
                  style={{ borderRadius: "5% 5% 5% 5%", width: "18rem" }}
                >
                  <img
                    src={sampah3}
                    className="card-img-top mt-4"
                    alt="..."
                    style={{ width: "12rem" }}
                  />
                </div>
                <p>Pentingnya Edukasi pengelolaan sampah</p>
                <button className="btn btn-success">see more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Crsl />
    </div>
  );
}

export default EdukasiPage;
