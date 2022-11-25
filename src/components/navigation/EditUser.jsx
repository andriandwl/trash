import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function EditUser({ users }) {
  const [show, setShow] = useState(false);
  const [save, setSave] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }

  // console.log(getAccessToken());

  const handleSave = (event) => {
    event.preventDefault();
    // console.log("clicked");
    const data = new FormData();
    data.append("name", name);
    data.append("phone", phone);
    data.append("email", email);
    data.append("address", address);

    if (save === true) {
      axios
        .post(
          `http://pitrash.masuk.web.id/api/user/edit`,
          data,

          {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data.data.author);
          setSave(response.data.data);
          console.log(response.data.data);
          alert("berhasil di ubah");
          navigate("/dashboard");
        });
    }
  };

  return (
    <>
      <button variant="primary" className="border-0" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSave(e)}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="email"
                defaultValue={users.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="telepon"
                defaultValue={users.phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="name"
                defaultValue={users.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="alamat"
                defaultValue={users.address}
                onChange={(e) => setAdress(e.target.value)}
              />
            </Form.Group>

            <Button onClick={handleSave} variant="primary" className="mt-2">
              Simpan
            </Button>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditUser;
