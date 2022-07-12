import { useEffect, useState } from "react";
import "./Users.module.css";
import axios from "axios";
import "./Users.module.css";

const Users = (props) => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(
      `sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/12`
    );
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/12`
      )
      .then((res) => {
        console.log(res);
        setUsers(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3">
        {users.map((user) => {
          return (
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a loThis is a loThis is a loThis is a lo
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
