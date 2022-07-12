import { useEffect, useState } from "react";
import "./Users.module.css";
import axios from "axios";
import classes from "./Users.module.css";

const Users = (props) => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/12`
      )
      .then((res) => {
        setUsers(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((user) => {
          return (
              <div className={classes.col}>
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
