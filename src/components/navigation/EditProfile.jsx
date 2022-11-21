import { IconEdit } from "@tabler/icons";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} variant="success">
        <IconEdit /> Edit profile
      </Button>

      <Modal show={show} onHide={handleClose} style={{fontFamily:'Manrope'}}>
        <Modal.Header closeButton>
          <Modal.Title  style={{fontFamily:'Museo'}}>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Nama anda" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email@anda.com" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telepon</Form.Label>
              <Form.Control type="number" placeholder="0819xxxxxx" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control as="textarea" placeholder="Alamat" rows={3} />
            </Form.Group>
          </Form>
          <Button variant="success">
            <IconEdit /> Ganti foto
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Keluar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;
