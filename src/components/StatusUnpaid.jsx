import axios from "axios";
import React from "react";

function StatusUnpaid() {
  const [unpaid, setUnpaid] = React.useState([]);

  function getAccessToken() {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  }

  const getStatusUnpaid = () => {
    axios
      .get(`http://pitrash.masuk.web.id/api/transaction`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
      .then((response) => {
        setUnpaid(response.data.data);
      });
  };

  const handleEditTransaction = () => {};

  React.useEffect(() => {
    getStatusUnpaid();
  }, []);

  return (
    <div>
      <div className="row g-0">
        <div className="col-lg-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">user id</th>
                <th scope="col">price</th>
                <th scope="col">image</th>
                <th scope="col">status</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {unpaid
                .filter((item) => item.status === "Belum Dibayar")
                .map((trans) => {
                  return (
                    <tr key={trans.id}>
                      <th scope="row">{trans.id}</th>
                      <td>{trans.user_id}</td>
                      <td>{trans.price}</td>
                      <td>{trans.image}</td>
                      <td>{trans.status}</td>
                      <td>
                        <button
                          type="button"
                          className="btn"
                          style={{
                            backgroundColor: "transparent",
                            border: "0",
                          }}
                          onClick={handleEditTransaction}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StatusUnpaid;
