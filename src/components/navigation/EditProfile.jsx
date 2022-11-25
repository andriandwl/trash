import { IconEdit } from "@tabler/icons";
import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function EditProfile({ edit }) {
  const [show, setShow] = useState(false);
  const [save, setSave] = useState(true);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState();

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }

  // console.log(getAccessToken());

  const handleSave = (event) => {
    event.preventDefault();
    console.log("clicked");
    const data = new FormData();
    data.append("name", name);
    data.append("address", address);
    data.append("phone", phone);
    data.append("email", email);
    data.append("image", image);

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
          navigate("/profile");
        });
    }
  };

  return (
    <>
      <Button onClick={handleShow} variant="success">
        <IconEdit /> Edit profile
      </Button>
      <Modal show={show} onHide={handleClose} style={{ fontFamily: "Manrope" }}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "Museo" }}>
            Edit Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSave(e)}>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                type="text"
                placeholder="nama"
                defaultValue={edit.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                type="email"
                placeholder="email"
                defaultValue={edit.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                type="number"
                placeholder="telepon"
                defaultValue={edit.phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Alamat"
                rows={3}
                defaultValue={edit.user_detail?.address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <Button onClick={handleSave} variant="primary" className="mt-2">
                Simpan
              </Button>
            </Form.Group>

            {/* <Button variant="success">
            <IconEdit /> Ganti foto
          </Button> */}
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Batal
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditProfile;
