import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function EditEducation() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const { id } = useParams();

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }

  const handleEdit = (id) => {
    const formDataEdit = new FormData();
    formDataEdit.append("title", title);
    formDataEdit.append("content", content);
    formDataEdit.append("image", image);

    axios
      .post(`http://pitrash.masuk.web.id/api/education/${id}`, formDataEdit, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        setTitle("");
        setContent("");
      });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(id);
        }}
      >
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
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
  );
}

export default EditEducation;
