import React from "react";
import NavigationDashboard from "../components/navigation/NavigationDashboard";

import axios from "axios";
import { slice } from "lodash";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";

function EducationPage() {
  const [educationPost, setEducationPost] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [index, setIndex] = React.useState(5);
  const initialPosts = slice(educationPost, 0, index);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  const [search, setSearch] = React.useState(keyword || "");

  const onKeywordChangeHandler = (search) => {
    setSearch(search);
    changeSearchParams(search);
  };

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

  const handleDelete = (id) => {
    axios
      .delete(`http://pitrash.masuk.web.id/api/education/${id}`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        getData();
      });
  };

  const handleEdit = (id) => {
    const formDataEdit = new FormData();
    formDataEdit.append("title", title);
    formDataEdit.append("content", content);
    formDataEdit.append("image", image);

    axios
      .post(`http://pitrash.masuk.web.id/api/education/${id}`, formDataEdit, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((res) => {
        setContent("");
        setTitle("");
      });
  };

  const filterPoke = React.useMemo(
    () =>
      initialPosts?.filter((edue) => {
        return edue.title.toLowerCase().includes(search.toLowerCase());
      }),
    [initialPosts, search]
  );

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
              <SearchBar
                keyword={search}
                keywordChange={onKeywordChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-9 mt-4">
          <div className="container">
            <div className="row g-0 justify-content-center">
              {filterPoke.map((edu) => {
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
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#examples"
                              className="btn rounded btn-success"
                              onClick={() => handleEdit(edu.id)}
                              style={{
                                backgroundColor: "transparent",
                                color: "black",
                              }}
                            >
                              Edit
                            </button>
                          </div>
                          <div className="col-lg-6 text-end">
                            <button
                              type="button"
                              className="btn rounded btn-success"
                              onClick={() => handleDelete(edu.id)}
                              style={{
                                backgroundColor: "transparent",
                                color: "black",
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
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

            <div
              className="modal fade"
              id="examples"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
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
                        className="btn mt-2 btn-outline-secondary"
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
      </div>
    </div>
  );
}

export default EducationPage;
