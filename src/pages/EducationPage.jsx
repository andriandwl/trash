import React from "react";
import NavigationDashboard from "../components/navigation/NavigationDashboard";

import axios from "axios";
import { slice } from "lodash";

function EducationPage() {
  const [educationPost, setEducationPost] = React.useState([]);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [index, setIndex] = React.useState(5);
  const initialPosts = slice(educationPost, 0, index);

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

  const loadMore = () => {
    setIndex(index + 5);
    console.log(index);
    if (index >= educationPost.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavigationDashboard />
      <div className="row g-0">
        <div className="col-lg-3"></div>
        <div className="col-lg-9">
          <h2 className="museo text-center">Education</h2>
        </div>
      </div>
      <div className="row g-0">
        <div
          className="col-lg-3"
          style={{
            backgroundColor: "#5caa47",
            borderRadius: "20px",
            boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center p-3">
            <div className="col-lg-4">
              <h3 className="manrope" style={{ color: "white" }}>
                Edukasi
              </h3>
            </div>
            <div className="col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="find ..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 mt-4">
          <div className="container">
            <div className="row g-0 justify-content-center">
              {initialPosts.map((edu) => {
                return (
                  <div key={edu.id} className="col-lg-4 mb-5 card-group">
                    <div className="card profile-card-5">
                      <div className="card-img-block">
                        <img
                          className="card-img-top"
                          src={edu.image}
                          alt="Card"
                        />
                      </div>
                      <div className="card-body pt-0">
                        <h5 className="card-title text-center">{edu.title}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row g-0 m-2">
              <div className="col-12 text-center">
                {isCompleted ? (
                  <button
                    onClick={loadMore}
                    type="button"
                    className="btn btn-danger disabled"
                  >
                    That's Itx
                  </button>
                ) : (
                  <button
                    onClick={loadMore}
                    type="button"
                    className="btn btn-danger"
                  >
                    Load More +
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
