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
      <Navigation />
      <div className="container top-container ">
        <div className="row text-left mt-lg-3">
          <p className="blockquote-footer fw-bold text-dark text-start" style={{ marginTop: "" }}>
            TENTANG KAMI
          </p>

          <div className="col col-xl-9 col-12">
            <h3 className="text-black" style={{ fontFamily: "Museo" }}>
              Apa itu PiTrash?
            </h3>
            <p style={{ fontFamily: "manrope" }}>
              Sebuah web dan mobile aplikasi yang ditujukan untuk penjadwalan & pengambilan sampah yang akan berguna bagi masyarakat. <br />
              Fokus kami mengembangkan web dan aplikasi mobile untuk membantu masyarakat Jawa barat, dan untuk saat ini lingkupnya masih wilayah Kota Banjar, dimana wilayah tersebut masih kurang efektif dan efisien dalam pengambilan sampah,
              di wilayah tersebut masih manual dan kurang terdigitalisasi, untuk itu kami memberikan solusi dan terobosan untuk mempermudah dan meng-efektifkan pengerjaan tersebut, dan memberikan edukasi untuk lebih peduli terhadap masalah
              sampah, demi kenyamanan dan kebersihan di lingkungan kehidupan Masyarakat.
            </p>
          </div>
          <div className="col col-xl-3 col-12justify-content-right space-right2 ">
            <img src={pohon} width="" className="float-end img-fluid " alt="gambar" style={{ opacity: "60%" }} />
          </div>
        </div>
      </div>

      <section className=" " style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", padding: "7rem", marginTop: "-2em" }}>
        <div className="container ">
          <div className="row ">
            <div className=" mt-5 col-md-12 col-sm-12 col-lg-6 text-start text-black p-5">
              <h4 className="" style={{ fontFamily: "museo" }}>
                Mari Bersama Mewujudkan Jawa barat Nyaman dan Asri dengan..
              </h4>
              <div className="col-12 gap-2 d-flex mt-2 justify-content-start" style={{ fontFamily: "Manrope" }}>
                <img className="" src={mark2} alt="mark" style={{ width: "40px", objectFit: "contain" }} />
                <p className="mt-4  fw-medium">
                  Melestarikan Lingkungan.
                  <br />
                  <small>Salah satu contoh sikap bertanggung jawab menjaga lingkungan adalah menjaga kelestarian lingkungan. Meningkatkan pemanfaatan sumber-sumber energi yang enggak akan habis.</small>
                </p>
              </div>

              <div className="col-12 gap-2 d-flex mt-2 justify-content-start">
                <img className="" src={mark1} alt="mark" style={{ width: "40px", objectFit: "contain" }} />

                <p className="mt-4  fw-medium">
                  Peduli tentang tanggung jawab menjaga lingkungan dan alam. <br />
                  <small>Menjaga lingkungan dapat dilakukan dengan cara mengurangi sampah, menghemat penggunaan listrik, menghemat penggunaan air, melestarikan hutan, dan melestarikan hewan.</small>
                </p>
              </div>

              <div className="col gap-2 d-flex mt-2 justify-content-start">
                <img className="" src={mark3} alt="mark" style={{ width: "40px", objectFit: "contain" }} />

                <p className="mt-4  fw-medium">
                  Menjaga lingkungan bersih tanpa sampah.
                  <br />
                  <small>Sebagai upaya menjaga kelestarian lingkungan, Anda dapat memisahkan sampah menjadi sampah anorganik, sampah organik, dan sampah kaca atau logam.</small>
                </p>
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

          <div className="container  d-flex justify-content-center align-content-center mb-4 " style={{ background: `rgba(92, 170, 71, 0.7)`, borderRadius: "80px 80px 0 0" }}>
            <div className="row m-2 ">
              <div className="col-md-12 col-sm-12 col-lg-4 ">
                <div className="card anim mx-auto d-block mb-2" style={{ borderRadius: "5%", width: "15rem" }}>
                  <div className="d-flex justify-content-center m-1 img-float ">
                    <img src={notif} className="card-img-top mt-4" alt="..." style={{ width: "9rem" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Pengingat</h5>
                    <p className="card-text">Pemberitahuan/notifikasi untuk pengambilan sampah dan pembayaran.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-4">
                <div className="card anim mx-auto d-block mb-2" style={{ borderRadius: "5%", width: "15rem" }}>
                  <div className="d-flex justify-content-center m-1 ">
                    <img src={jadwal} className="card-img-top mb-2  mt-4" alt="..." style={{ width: "8.5rem" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Penjadwalan</h5>
                    <p className="card-text">Jadwal pengambilan / pick up ditentukan hari minggu setiap bulannya.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-4 ">
                <div className="card anim mx-auto d-block mb-2 " style={{ borderRadius: "5%", width: "15rem" }}>
                  <div className="d-flex justify-content-center m-1">
                    <img src={truck} className="card-img-top mt-4" alt="..." style={{ width: "10rem" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Penjemputan</h5>
                    <p className="card-text">Penjemputan akan dilakukan kesetiap rumah pengguna /user oleh petugas kami</p>
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
