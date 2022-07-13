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
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`
      )
      .then((res) => {
        setUsers([...users, ...res.data.list]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setPage(page + 1);
    }
  };

  return (
    <div
      style={{
        height: "700px",
        overflow: "scroll",
        overflowX: "hidden",
      }}
      onScroll={handleScroll}
    >
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {users.map((user) => {
          return (
            <div className={classes.col} key={user.id}>
              <div className={classes.card}>
                <img src={user.imageUrl + `?v=${user.id}`} className={classes.img} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{`${user.prefix} ${user.name} ${user.lastName}`}</h5>
                  <p className="card-text">{user.title}</p>
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
