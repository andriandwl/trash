import React from "react";
import Navigation from "../components/navigation/Navigation";
import NavigationHome from "../components/navigation/NavigationHome";

function ContactUsPage() {
  return (
    <div>
      {localStorage.getItem("name") === "admin piTrash" ? (
        <Navigation />
      ) : (
        <NavigationHome />
      )}
      <div className="container">
        <div>
          <h2 className="museo text-center mb-5">Kontak Kami</h2>
        </div>
        <div className="row g-0 gap-3">
          <div className="col-lg-6">
            <div className="mapouter rounded-2">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=west%20java&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="caurra"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card border-dark mb-3">
              <div className="card-header">Jam Kerja</div>
              <div className="card-body text-dark">
                <h5 className="card-title">09.00 - 16.00 (Setiap Minggu)</h5>
              </div>
              <div className="card-header">Hubungi Kami di</div>
              <div className="card-body text-dark">
                <h5 className="card-title">
                  Email : andriandwiharyantoe@gmail.com
                </h5>
                <h5 className="card-title">No.Telp : 083898866191</h5>
              </div>
              <div className="card-header">Alamat</div>
              <div className="card-body text-dark">
                <h5 className="card-title">
                  Jl. Tegallega, Kelurahan Tegallega, Kecamatan Bogor Tengah,
                  Kota Bogor, Jawa Barat
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
