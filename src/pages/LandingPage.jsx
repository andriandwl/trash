import React from "react";
import Navigation from "../components/navigation/Navigation";

import section1 from "../assets/image/section-1.jpg";
import section2 from "../assets/image/section-2.jpg";
import edukasi1 from "../assets/image/edukasi-1.jpg";
import store from "../assets/image/store.png";
import { Helmet } from "react-helmet-async";

function LandingPage() {
  return (
    <div>
      <Helmet>
        <title>Pi Trash</title>
        <link rel="icon" href="../assets/image/logor.png"></link>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <Navigation />
      <main>
        <div className="row g-0">
          <div className="col-12 text-center">
            <p className="museo">Selamatkan Bumi Kita</p>
          </div>
          <div className="col-12 text-center">
            <p className="manrope">
              “Planet bumi kita yang indah adalah satu-satunya planet di tata
              surya tempat kehidupan ada”
            </p>
          </div>
          <div className="col-12">
            <img src={section1} className="img-fluid" alt="..." />
          </div>
          <div className="container">
            <div className="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 pb-5">
              <div className="col-lg-6 col-md-6 col-sm-12  p-4 d-flex flex-column position-static">
                <h3 className="mb-5 museo">Ayo Jaga Lingkungan</h3>
                <p
                  className="card-text mb-2 manrope"
                  style={{ textAlign: "justify" }}
                >
                  Kebersihan lingkungan merupakan hal yang tak terpisahkan dari
                  kehidupan manusia dan merupakan unsur yang fundamental dalam
                  ilmu kesehatan dan pencegahan. Yang dimaksud dengan kebersihan
                  lingkungan adalah menciptakan lingkungan yang sehat sehingga
                  tidak mudah terserang berbagai penyakit seperti demam
                  berdarah, muntaber dan lainnya. Ini dapat dicapai dengan
                  menciptakan suatu lingkungan yang bersih indah dan nyaman.
                  Kebersihan akan lebih menjamin kebersihan seseorang dan
                  menyehatkan.
                </p>
                <div className="d-flex justify-content-end gap-2 mt-5">
                  <button
                    className="btn  p-3"
                    style={{
                      borderRadius: "50px 50px 0 50px",
                      backgroundColor: "#D5F0C5",
                      color: "#5caa47",
                    }}
                  >
                    Pelajari lebih lanjut
                  </button>
                  <button
                    className="btn"
                    style={{
                      borderRadius: "50px 50px 50px 0",
                      backgroundColor: "#D5F0C5",
                      color: "#5caa47",
                    }}
                  >
                    Ketahui lebih banyak
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 text-center my-5">
                <img src={section2} alt="section2" width="400vh" />
              </div>
            </div>
          </div>

          {/* Layanan Kami */}

          <div className="row g-0 align-items-center my-5 mb-5">
            <div className="col-lg-12 museo text-center mb-5">Layanan Kami</div>
            <div className="row g-0 justify-content-center gap-3 mb-3">
              <div className="col-lg-3">
                <div
                  className="card-header text-center"
                  style={{
                    backgroundColor: "#5caa47",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  <h5 className="card-title">Penjadwalan</h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="card-header text-center"
                  style={{
                    backgroundColor: "#5caa47",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  <h5 className="card-title">Pengingat</h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="card-header text-center"
                  style={{
                    backgroundColor: "#5caa47",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  <h5 className="card-title">Pembayaran</h5>
                </div>
              </div>
            </div>
            <div className="row g-0 justify-content-center gap-3">
              <div className="col-lg-3">
                <div className="card border-light mb-5">
                  <div className="card-body" style={{ height: "30vh" }}>
                    <p className="card-text">
                      Penjadwalan, memberikan cara yang efisien untuk
                      menjadwalkan pembayaran dan pickup untuk aktivitas
                      layanan. Mempertimbangkan kesiapan pengumpulan sampah dan
                      perlengkapan untuk merencanakan jadwal yang sesuai.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card border-light mb-5">
                  <div className="card-body" style={{ height: "30vh" }}>
                    <p className="card-text">
                      Bisa dikatakan sebagai aplikasi yang berfungsi untuk
                      memberi tahu pada hari/waktu itu ada sebuah kegiatan atau
                      hal yang harus dilakukan
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card border-light mb-5">
                  <div className="card-body" style={{ height: "30vh" }}>
                    <p className="card-text">
                      Layanan Pembayaran adalah payment service yaitu bentuk
                      layanan yang melaksanakan pesan atau perintah untuk
                      melakukan pembayaran
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 mt-5">
            <div className="col-lg-12 text-center museo">
              <p>Edukasi</p>
            </div>
            <div className="row g-0">
              <div className="col-lg-4 mt-4 card-group">
                <div className="card profile-card-5">
                  <div className="card-img-block">
                    <img className="card-img-top" src={edukasi1} alt="Card" />
                  </div>
                  <div className="card-body pt-0">
                    <h5 className="card-title">Reuse</h5>
                    <p className="card-text">
                      Reuse berarti menggunakan kembali sampah yang masih dapat
                      digunakan untuk fungsi yang sama ataupun fungsi lainnya.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4 card-group">
                <div className="card profile-card-5">
                  <div className="card-img-block">
                    <img className="card-img-top" src={edukasi1} alt="Card" />
                  </div>
                  <div className="card-body pt-0">
                    <h5 className="card-title">Reduce</h5>
                    <p className="card-text">
                      Reduce berarti mengurangi segala sesuatu yang
                      mengakibatkan sampah menjadi banyak
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mt-4 card-group">
                <div className="card profile-card-5">
                  <div className="card-img-block">
                    <img className="card-img-top" src={edukasi1} alt="Card" />
                  </div>
                  <div className="card-body pt-0">
                    <h5 className="card-title">Recycle</h5>
                    <p className="card-text">
                      Recycle berarti mengolah kembali (daur ulang) sampah
                      menjadi barang atau produk baru yang bermanfaat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-3 border-top">
          <div className="col-lg-3 mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <p className="logo">PiTrash</p>
            </a>
            <p className="text-muted">&copy; 2022</p>
          </div>
          <div className="col-lg-3 mb-3 text-center">
            <h5>Section</h5>
            <ul className="nav flex-column gap-2">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Beranda
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/layanan" className="nav-link p-0 text-muted">
                  Layanan
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/edukasi" className="nav-link p-0 text-muted">
                  Edukasi
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/kontak-kami" className="nav-link p-0 text-muted">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mb-3 text-center">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/" className="nav-link p-0 text-muted">
                  Download Aplikasi :
                </a>
              </li>
              <li className="nav-item">
                <img src={store} width="300vh" height="100vh" alt="" />
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Ikuti Social Media Kami :
                </a>
              </li>
              <li className="d-flex justify-content-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
