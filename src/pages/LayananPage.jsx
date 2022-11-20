import React from "react";
import Navigation from "../components/navigation/Navigation";
import payment from "../assets/image/payment.png";
import reminder from "../assets/image/reminder.jpg";
import schduling from "../assets/image/schduling.jpg";

function LayananPage() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row featurette m-4">
          <div className="col-lg-12">
            <p
              className="blockquote-footer fw-bold text-dark text-start"
              style={{ marginTop: "" }}
            >
              LAYANAN KAMI
            </p>
          </div>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1" id="penj">
              Penjadwalan
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img src={schduling} alt="schduling" width="100%" />
          </div>
        </div>

        <div className="row featurette mb-5">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1" id="peng">
              Pengingat
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={reminder} alt="reminder" width="100%" />
          </div>
        </div>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1" id="pemb">
              Pembayaran
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <img src={payment} alt="payment" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayananPage;
