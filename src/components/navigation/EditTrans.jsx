import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function EditTrans({ trans }) {
  const [show, setShow] = useState(false);
  const [save, setSave] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }

  // console.log(getAccessToken());

  const handleSave = (id) => {
  // console.log(id);
    const data = new FormData();
    data.append("status", status);

    if (save === true) {
      axios
        .post(
          `http://pitrash.masuk.web.id/api/transaction/${id}`,
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
      <a variant="primary" onClick={handleShow}>
        Edit
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Transaksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSave(e)}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="email" defaultValue={trans.status} onChange={(e) => setStatus(e.target.value)} />
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

export default EditTrans;
