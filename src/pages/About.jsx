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

          <div className="col-md-6 col-xl-9 col-sm-12">
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
          <div className="col-xl-3 col-md-6 col-sm-12 justify-content-right ">

            <img src={pohon} width="90%" className="float-end img-fluid pohon" alt="gambar" style={{ opacity: "60%" }} />
          </div>
        </div>
      </div>
      {/* style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", padding: "10rem"}} */}
      <section className="bg-media "style={{ backgroundImage: `url(${bg})`}} >
        <div className="container ">
          <div className="row ">
            <div className="col  col-12 col-xl-6  text-black mt-5 p-5 advice">
              <h4 className="text-center " style={{ fontFamily: "museo" }}>
                Mari Bersama Mewujudkan Linkungan Nyaman dan Asri dengan..
              </h4>

              <div className="col gap-2 d-flex mt-2 " style={{ fontFamily: "Manrope" }}>
                <img className="" src={mark2} alt="mark" style={{ width: "40px", objectFit: "contain" }} />
                <p className="mt-4  fw-medium">
                  Melestarikan Lingkungan.
                  <br />
                  <small>Salah satu contoh sikap bertanggung jawab menjaga lingkungan adalah menjaga kelestarian lingkungan. Meningkatkan pemanfaatan sumber-sumber energi yang enggak akan habis.</small>
                </p>
              </div>


              <div className="col gap-2 d-flex mt-2 ">
                <img className="" src={mark1} alt="mark" style={{ width: "40px", objectFit: "contain" }} />

                <p className="mt-4  fw-medium">
                  Peduli tentang tanggung jawab menjaga lingkungan dan alam. <br />
                  <small>Menjaga lingkungan dapat dilakukan dengan cara mengurangi sampah, menghemat penggunaan listrik, menghemat penggunaan air, melestarikan hutan, dan melestarikan hewan.</small>
                </p>
              </div>


              <div className="col gap-2 d-flex mt-2 ">
                <img className="" src={mark3} alt="mark" style={{ width: "40px", objectFit: "contain" }} />

                <p className="mt-4  fw-medium">
                  Menjaga lingkungan bersih tanpa sampah.
                  <br />
                  <small>Sebagai upaya menjaga kelestarian lingkungan, Anda dapat memisahkan sampah menjadi sampah anorganik, sampah organik, dan sampah kaca atau logam.</small>
                </p>
              </div>

            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="col-auto  d-flex justify-content-end mt-5">
                <img className="img-fluid trash" src={trash} alt="" width="" />
              </div>
            </div>

          </div>
        </div>
      </section>



      <div className="container ">
        <div className="row text-center text-black  ">
          <h2 clasName="service" style={{ fontFamily: "museo" }}>
            Layanan Kami
          </h2>

          <div className="container layanan  d-flex justify-content-center align-content-center mb-4 " >
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
