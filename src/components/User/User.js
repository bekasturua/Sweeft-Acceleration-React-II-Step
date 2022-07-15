import "./User.css";
import Friends from "../../Friends/Friends";
import { NavLink, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {v4 as uuid} from 'uuid'

const User = (props) => {
  const [user, setUser] = useState();
  const params = useParams();
  const [usersWay, setUsersWay] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${params.userId}`
      )
      .then((res) => {
        setUser(res.data);
        setUsersWay([...usersWay, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.userId]);

  return user ? (
    <div className="profile">
      <div className="header">
        <img src={user.imageUrl + `?v=${user.id}`} alt="" />
        <div className="left-info">
          <span>Info</span>
          <div className="left-info-top">
            <strong>{`${user.prefix} ${user.name} ${user.lastName}`}</strong>
            <i>{user.title}</i>
          </div>
          <div className="left-top-bottom">
            <p>
              <u>Email</u>: {user.email}
            </p>
            <p>
              <u>Ip Address</u>: {user.ip}
            </p>
            <p>
              <u>Ip Address</u>: {user.ip}
            </p>
            <p>
              <u>Job Area</u>: {user.jobArea}
            </p>
            <p>
              <u>Job Type</u>: {user.jobType}
            </p>
          </div>
        </div>
        <div className="right-info">
          <span>Address</span>
          <div className="right-info-top">
            <strong>{`${user.company.name} ${user.company.suffix}`}</strong>
          </div>
          <p>
            <u>City</u>: {user.address.city}
          </p>
          <p>
            <u>Country</u>: {user.address.country}
          </p>
          <p>
            <u>State</u>: {user.address.state}
          </p>
          <p>
            <u>Street Address</u>: {user.address.streetAddress}
          </p>
          <p>
            <u>ZIP</u>: {user.address.zipCode}
          </p>
        </div>
      </div>
      <div className="breadcrumbs">
        {usersWay.map((userWay, index) => (
          <Fragment key={uuid()}>
            <NavLink
              to={`/User/${userWay.id}`}
            >{`${userWay.prefix} ${userWay.name} ${userWay.lastName}`}</NavLink>
            {index !== usersWay.length - 1 ? <span>{" > "}</span> : null}
          </Fragment>
        ))}
      </div>
      <h2 className="friends">Friends:</h2>
      <Friends userId={params.userId} />
    </div>
  ) : null;
};

export default User;
