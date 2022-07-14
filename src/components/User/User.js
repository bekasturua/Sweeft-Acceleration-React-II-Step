import classes from "./User.module.css";
import img from "../User/img.jpg";

const User = (props) => {
  return (
    <div className={classes.d}>
      <div className={classes.header}>
        <img src={img} alt="profile" />
        <fieldset className={classes.info}>
          <legend>Info</legend>
          <div>
            <strong>Hi</strong>
          </div>
          <div>
            <i>Bye</i>
          </div>
          <br />
          <div>
            <span>email: </span>
            beqasturua3@gmail.com
          </div>
          <div>
            <span>Ip Address: </span>
            Tbilisi
          </div>
          <div>
            <span>Ip Address: </span>
            234235325
          </div>
          <div>
            <span>Job Area: </span>
            Front-end
          </div>
          <div>
            <span>Job Type: </span>
            front
          </div>
        </fieldset>

        <fieldset className={classes.addressInfo}>
          <legend>Address</legend>
          <div>
            <strong>hello</strong>
            <div>
              <span>City: </span> tbilisi
            </div>
            <div>
              <span>Country: </span> georgia
            </div>
            <div>
              <span>State: </span> georgia
            </div>
            <div>
              <span>Street Address: </span>
              tbilisi
            </div>
            <div>
              <span>ZIP: </span>0103
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default User;
