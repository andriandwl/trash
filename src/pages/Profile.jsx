import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import EditProfile from "../components/navigation/EditProfile";
import Navigation from "../components/navigation/Navigation";
import "../styles/Profile.css";

const Profile = () => {
  const [edit, setIsEdit] = useState([]);
  const navigate = useNavigate();

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }

  const id = localStorage.getItem("id");
  const handleEdit = (id) => {
    axios
      .get(`http://pitrash.masuk.web.id/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        // console.log(response.data.data.author);
        setIsEdit(response.data.data);
      });
  };

  // const handleLogout = () => {
  //   axios
  //     .post(`http://pitrash.masuk.web.id/api/auth/logout`, {
  //       headers: {
  //         Authorization: `Bearer ${getAccessToken()}`,
  //       },
  //     })
  //     .then((response) => {
  //       localStorage.removeItem("accessToken");
  //       navigate("/");
  //     });
  // };
  function Logout(){
    Swal.fire({
      title:"Apakah Anda Yakin?",
      text:"Anda Akan keluar dari akun anda",
      icon:"warning",
      showCancelButton:true,
      confirmButtonColor:"#3085d5",
      cancelButtonColor:"#d33",
      confirmButtonText:"Ya, Keluar",
    }).then((result)=>{
      if(result.isConfirmed){

        Swal.fire("Berhasil!", "Anda telah keluar dari akun Anda", "success");
        deleteToken();
        navigate("/")
      }else{
        return
      }

    })
  }


function deleteToken(){
  return localStorage.clear()
}

  useEffect(() => {
    handleEdit(id);
  }, []);

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
                      <img
                        src={edit.user_detail?.image}
                        alt="..."
                        width=" 50%"
                      />
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                        <h3
                          className="h2 text-white mb-0 "
                          style={{ fontFamily: "Manrope" }}
                        >
                          {edit.name}
                        </h3>
                      </div>
                      <ul className="list-unstyled mb-1-9 manrope text-black">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-black me-2 font-weight-600">
                            Email :
                          </span>
                          {edit.email}
                        </li>

                        <li className="display-28 mb-2 mb-xl-3">
                          <span className="display-26 text-black me-2 font-weight-600">
                            Telepon :
                          </span>
                          {edit.phone}
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-black me-2 font-weight-600">
                            Alamat :
                          </span>
                          {edit.user_detail?.address}
                        </li>
                      </ul>
                      <EditProfile edit={edit} />
                      <button
                        type="button"
                        className="ms-2 btn btn-danger"
                        onClick={Logout}
                      >
                        Logout
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
};
export default Profile;
