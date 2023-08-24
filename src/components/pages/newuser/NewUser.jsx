import React from "react";
import "./newuser.css";

function NewUser() {
  return (
    <div className="newusser">
      <h2 className="newuserTitle">New User</h2>
      <form className="newuserForm">
        <div className="newuserItem">
          <label>UserName</label>
          <input type="text" placeholder="saket" />
        </div>
        <div className="newuserItem">
          <label>Full Name</label>
          <input type="text" placeholder="saket garg" />
        </div>
        <div className="newuserItem">
          <label>Email</label>
          <input type="email" placeholder="saket@gmail.com" />
        </div>
        <div className="newuserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newuserItem">
          <label>phone</label>
          <input type="text" placeholder="+91 12344 56789" />
        </div>
        <div className="newuserItem">
          <label>Adress</label>
          <input type="text" placeholder="bangalore | India" />
        </div>
        <div className="newuserItem">
          <label>Gender</label>
          <div className="newuserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Make</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="newuserItem">
          <label>Active</label>
          <select className="newuserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <div className="newuserButt">
        {" "}
        <button className="newuserButton">Create</button>
      </div>
    </div>
  );
}

export default NewUser;
