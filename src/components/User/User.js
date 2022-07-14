import img from "../User/img.jpg";
import "./User.css";
import Friends from "../../Friends/Friends";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const User = (props) => {
  const [user, setUser] = useState();
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${params.userId}`
      )
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return user ? (
    <div className="profile">
      <div className="header">
        <img src={img} alt="" />
        <div className="left-info">
          <span>Info</span>
          <div className="left-info-top">
            <strong>{`${user.prefix} ${user.name} ${user.lastName}`}</strong>
            <i>hi</i>
          </div>
          <div className="left-top-bottom">
            <p>
              <u>Email</u>hi
            </p>
            <p>
              <u>Ip Address</u>:hi
            </p>
            <p>
              <u>Ip Address</u>:hi
            </p>
            <p>
              <u>Job Area</u>: hi
            </p>
            <p>
              <u>Job Type</u>: hi
            </p>
          </div>
        </div>
        <div className="right-info">
          <span>Adress</span>
          <div className="right-info-top">
            <strong>Stokes, Hermann and Hackett and Sons</strong>
          </div>
          <p>
            <u>City</u>: hi
          </p>
          <p>
            <u>Country</u>: hi
          </p>
          <p>
            <u>State</u>: hi
          </p>
          <p>
            <u>Street Address</u>: hi
          </p>
          <p>
            <u>ZIP</u>: ih
          </p>
        </div>
      </div>
      <div className="breadcrumbs">
        <a href="#">Prev</a>><a href="#">Prev</a>
      </div>
      <h2 className="friends">Friends:</h2>
      <Friends userId={params.userId} />
    </div>
  ) : null;
};

export default User;
