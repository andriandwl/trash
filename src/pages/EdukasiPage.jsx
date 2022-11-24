import sampah1 from "../assets/pictAgus/api.jpg";
import banner from "../assets/pictAgus/perpustakaan.png";
import sampah2 from "../assets/pictAgus/sam.jpg";
import sampah4 from "../assets/pictAgus/save.jpg";
import sampah3 from "../assets/pictAgus/trs.jpg";
import Crsl from "../components/Carousel";
import Navigation from "../components/navigation/Navigation";
import NavigationHome from "../components/navigation/NavigationHome";

function EdukasiPage() {
  return (
    <>
      {localStorage.getItem("name") === "admin" ? (
        <Navigation />
      ) : (
        <NavigationHome />
      )}
      <div className="container " style={{ marginTop: "50px" }}>
        <div className="row ">
          <div className="col-12">
            <p
              className="blockquote-footer fw-bold text-dark text-start"
              style={{ marginTop: "" }}
            >
              EDUKASI
            </p>
            <h1 className="text-dark" style={{ fontFamily: "museo" }}>
              Menjaga Lingkungan
            </h1>
            <small className="text-dark">
              Kebersihan lingkungan merupakan hal yang tak terpisahkan dari
              kehidupan manusia dan <br /> merupakan unsur yang fundamental
              dalam ilmu kesehatan dan pencegahan.
            </small>
          </div>

          <div className="col-12 text-center">
            <img src={banner} className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col text-start mt-2">
          <h5 style={{ fontFamily: "museo", marginLeft: "6em" }}>
            Yuk baca dulu edukasi tentang sampah...
          </h5>
        </div>
        <div className="container d-flex justify-content-center  ">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12 mt-4 box-media ">
              <div
                className="card d-block  mb-2 shadow-lg mx-auto anim"
                style={{ borderRadius: "5%", width: "18rem" }}
              >
                <img
                  src={sampah1}
                  className="card-img-top mt-4"
                  alt="..."
                  style={{ width: "10rem" }}
                />
              </div>
              <p>Pentingnya Edukasi pengelolaan sampah</p>
              <button className="btn btn-success">lihat detail</button>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 mt-4 ">
              <div
                className="card d-block  mb-2 shadow-lg mx-auto anim"
                style={{ borderRadius: "5%", width: "18rem" }}
              >
                <img
                  src={sampah4}
                  className="card-img-top mt-4 p-2"
                  alt="..."
                  style={{ width: "14rem" }}
                />
              </div>
              <p>Pentingnya Edukasi pengelolaan sampah</p>
              <button className="btn btn-success">lihat detail</button>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 mt-4 box-media">
              <div
                className="card d-block  mb-2 shadow-lg mx-auto anim"
                style={{ borderRadius: "5%", width: "18rem" }}
              >
                <img
                  src={sampah2}
                  className="card-img-top mt-4 "
                  alt="..."
                  style={{ width: "14rem" }}
                />
              </div>
              <p>Pentingnya Edukasi pengelolaan sampah</p>
              <button className="btn btn-success">lihat detail</button>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 mt-4 mr-3 ">
              <div
                className="card d-block mb-2 shadow-lg mx-auto anim"
                style={{ borderRadius: "5%", width: "18rem" }}
              >
                <img
                  src={sampah3}
                  className="card-img-top mt-4 "
                  alt="..."
                  style={{ width: "12rem" }}
                />
              </div>
              <p className="">Pentingnya Edukasi pengelolaan sampah</p>
              <button className="btn btn-success">lihat detail</button>
            </div>
          </div>
        </div>
      </div>

      <Crsl />
    </>
  );
}
export default EdukasiPage;
