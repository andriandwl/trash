import { IconEdit } from "@tabler/icons";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditProfile({edit}) {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState([]);
  const [image, setImage] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }


  return (
    <>
      <Button onClick={handleShow} variant="success">
        <IconEdit /> Edit profile
      </Button>
      <Modal show={show} onHide={handleClose} style={{ fontFamily: "Manrope" }}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "Museo" }}>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>{edit.address}</Form.Label>
              <Form.Control as="textarea" placeholder="Alamat" rows={3} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>{edit.image}</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>

          {/* <Button variant="success">
            <IconEdit /> Ganti foto
          </Button> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Keluar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Simpan
          </Button>l
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default EditProfile;
