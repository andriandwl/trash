import axios from "axios";
import React from "react";
import Edukasi from "../components/Edukasi";
import NavigationDashboard from "../components/navigation/NavigationDashboard";

function AddEducationPage() {
  const [educationPost, setEducationPost] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const [isEdit, setIsEdit] = React.useState(false);

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }

  const getData = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/education`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        setEducationPost(response.data.data);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const AddEducationPage = () => {
    const formDataEdit = new FormData();
    formDataEdit.append("title", title);
    formDataEdit.append("content", content);
    formDataEdit.append("image", image);
    if (isEdit === true) {
      axios
        .post(`http://pitrash.masuk.web.id/api/education/`, formDataEdit, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
            Accept: "application/json",
          },
        })
        .then(function (response) {
          getData();
          setTitle("");
          setContent("");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .post(
          `http://pitrash.masuk.web.id/api/education/create`,
          formDataEdit,
          {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
              Accept: "application/json",
            },
          }
        )
        .then(function (response) {
          getData();
          setTitle("");
          setContent("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <NavigationDashboard />
      <div className="row g-0">
        <div
          className="col-lg-3"
          style={{
            backgroundColor: "#5caa47",
            borderRadius: "20px",
            boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Edukasi allpost={educationPost} setIsEdit={setIsEdit} />
        </div>
        <div className="col-lg-9">
          <div className="container">
            <h2 className="museo text-center mb-5">Tambah Edukasi</h2>
            <div className="row g-0 justify-content-center">
              <div className="col-lg-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    AddEducationPage();
                  }}
                >
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Title
                    </span>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Content</span>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="form-control"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setImage(e.target.files[0])}
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      accept=".jpg, .jpeg, .png"
                    />
                  </div>
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    id="inputGroupFileAddon04"
                  >
                    Button
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEducationPage;
