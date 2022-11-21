import EditProfile from "../components/navigation/EditProfile";
import Navigation from "../components/navigation/Navigation";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <>
      <Navigation />
      <section className="uppage">
        <div className="container bg-light me-5 mt-3">
          <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div className="card card-style1 border-0">
                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0 ">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..." />
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                        <h3 className="h2 text-white mb-0 " style={{ fontFamily: "Manrope" }}>
                         Muhammad Reza bin H.Sueb
                        </h3>
                      </div>
                      <ul className="list-unstyled mb-1-9 manrope text-black" >
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-black me-2 font-weight-600">Email :</span> kecapreza@mail.com
                        </li>

                        <li className="display-28 mb-2 mb-xl-3">
                          <span className="display-26 text-black me-2 font-weight-600">Telepon :</span>081914168177
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-black me-2 font-weight-600">Alamat :</span>Villa Situdaun, Jalan Desa Situdaun, RT.7/RW.2, Situ Daun, Tenjolaya, Kab. Bogor, Tenjolaya, Jawa barat{" "}
                        </li>
                      </ul>
                      <EditProfile />
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
};
export default Profile;
