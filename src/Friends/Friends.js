import "./Friends.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
      <div className="row">
        {friends.map((friend) => {
          return (
            <div className="col" key={friend.id}>
              <div className="card">
                <Link to={`/User/${friend.id}`}>
                  <img
                    src={friend.imageUrl + `?v=${friend.id}`}
                    className="img"
                    alt="..."
                  />

                  <div className="card-body">
                    <h5 className="card-text">{`${friend.prefix} ${friend.name} ${friend.lastName}`}</h5>
                    <p className="card-text">{friend.title}</p>
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
