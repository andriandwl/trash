// import bg from "../../assets/Group.png";
import jadwal from "../assets/pictAgus//jadwal.png";
import bg from "../assets/pictAgus/background3.png";
import mark1 from "../assets/pictAgus/mark.png";
import mark2 from "../assets/pictAgus/mark2.png";
import mark3 from "../assets/pictAgus/mark3.png";
import notif from "../assets/pictAgus/notif.png";
import pohon from "../assets/pictAgus/pohon-removebg-preview.png";
import trash from "../assets/pictAgus/trash.png";
import truck from "../assets/pictAgus/truck.png";
import Navigation from "../components/navigation/Navigation";

const About = () => {
  return (
    <>
    <Navigation/>
      <div className="container top-container ">
        <div className="row text-left mt-lg-3">
          <p className="blockquote-footer fw-bold text-dark text-start" style={{ marginTop: "" }}>
            TENTANG KAMI
          </p>

          <div className="col col-xl-5 col-12">
            <h3 className="text-black" style={{ fontFamily: "Museo" }}>
              Kami adalah lembaga nonprofit yang bekerja untuk masyarakat
            </h3>
          </div>
          <div className="col col-xl-7 col-12justify-content-right space-right2 ">
            <img src={pohon} width="50%" className="float-end img-fluid " alt="gambar" style={{opacity:'60%'}}  />
          </div>
        </div>
      </div>

      <section className=" " style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat:'no-repeat',padding:'7rem' }}>
        <div className="container ">
          <div className="row ">
            <div className=" mt-5 col-md-12 col-sm-12 col-lg-6 text-start text-black p-5">
              <div className="col-12 gap-2 d-flex mt-2 justify-content-start">
                <img className="" src={mark2} alt="mark" style={{ width: "40px", objectFit: "contain" }} />
                <p className="mt-4">Melestarikan Lingkungan <br />
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates nemo ratione.</small></p>
              </div>

              <div className="col-12 gap-2 d-flex mt-2 justify-content-start">
                <img className="" src={mark1} alt="mark" style={{ width: "40px", objectFit: "contain" }} />

                <p className="mt-4">Peduli tentang tanggung jawab menjaga alam <br />
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quae obcaecati alias!</small></p>
              </div>

              <div className="col gap-2 d-flex mt-2 justify-content-start">
                <img className="" src={mark3} alt="mark" style={{ width: "40px", objectFit: "contain" }} />

                  <p className="mt-4">Menjaga lingkungan bersih tanpa sampah <br /><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, hic.</small></p>


              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-6">
              <div className="col-auto  d-lg-flex justify-content-end">
                <img className="img-fluid" src={trash} alt="" width="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="position-relative">
        <div className="container container-fluid text-center mt-4 p-5">
          <img src={bg} alt="" style={{ marginTop: "100", position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", margin: "0", padding: "0px" }} />
          <div className="row py-lg-5 position-sticky">
            <div className="col-lg-6 col-md-8 mx-auto p-2">

              <p className="lead text-light">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            </div>
          </div>
        </div>
      </section> */}

      <div className="container ">
        <div className="row text-center text-black mb-10 ">
          <h2 className="mt-5" style={{ fontFamily: "museo" }}>
            Layanan Kami
          </h2>

          <div className="container d-flex justify-content-center align-content-center mb-4 " style={{ background: `rgba(92, 170, 71, 0.7)`, borderRadius: "80px 80px 0 0" }}>
            <div className="row m-2">
              <div className="col-md-12 col-sm-12 col-lg-4 ">
                <div className="card mx-auto d-block mb-2" style={{ borderRadius: "5%", width: "15rem" }}>
                  <div className="d-flex justify-content-center m-1 ">
                    <img src={notif} className="card-img-top mt-4" alt="..." style={{ width: "9rem" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Pengingat</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-4">
                <div className="card mx-auto d-block mb-2" style={{ borderRadius: "5%", width: "15rem" }}>
                  <div className="d-flex justify-content-center m-1 ">
                    <img src={jadwal} className="card-img-top mb-2  mt-4" alt="..." style={{ width: "8.5rem" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Penjadwalan</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-4 ">
                <div className="card mx-auto d-block mb-2 " style={{ borderRadius: "5%", width: "15rem" }}>
                  <div className="d-flex justify-content-center m-1">
                    <img src={truck} className="card-img-top mt-4" alt="..." style={{ width: "10rem" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Penjemputan</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
