import classes from "./Friends.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useSearchParams } from "react";
import axios from "axios";

const Friends = (props) => {
  
  const [page, setPage] = useState(1);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${props.userId}/friends/${page}/20`
      )
      .then((res) => {
        setFriends([...friends, ...res.data.list]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  window.onscroll = async () => {
    const bottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <
      document.documentElement.clientHeight;
    if (bottom) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {friends.map((user) => {
          return (
            <div className={classes.col} key={user.id}>
              <div className={classes.card}>
                <Link to={`/User/${user.id}`}>
                  <img
                    src={user.imageUrl + `?v=${user.id}`}
                    className={classes.img}
                    alt="..."
                  />

                  <div className="card-body">
                    <h5 className="card-title">{`${user.prefix} ${user.name} ${user.lastName}`}</h5>
                    <p className="card-text">{user.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
