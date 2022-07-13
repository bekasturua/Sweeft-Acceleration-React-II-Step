import classes from "./User.module.css";
import img from "../User/img.jpg";

const User = (props) => {
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <div>
          <img className={classes.img} src={img} alt="..." />
          <fieldset className={classes.info}>
            <legend>info</legend>
            <div className={classes.list}>
              <div>
                <strong>prefix, name, lastName</strong>
              </div>
              <div>title</div>
              <br />
              <div>Email:</div>
              <div>Ip Address:</div>
              <div>Ip Address:</div>
              <div>Job Area:</div>
              <div>Job Type:</div>
            </div>
          </fieldset>
          <fieldset className={classes.address}>
            <legend>Address</legend>
            <div>
              <strong>prefix, name, lastName</strong>
            </div>
            <div>City:</div>
            <div>Country:</div>
            <div>State:</div>
            <div>Street Adress:</div>
            <div>Zip:</div>
          </fieldset>
        </div>
      </div>
      <div>
        <div className={classes.space}></div>
        <h2>Friends:</h2>
      </div>
    </div>
  );
};

export default User;
