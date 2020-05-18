import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { GiSaveArrow } from "react-icons/gi";

const ProfileForm = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="username">Name: </label>
        <input
          readOnly={!props.editing}
          type="text"
          name="name"
          className="form-control"
          placeholder="Sara Buckingham"
          value={props.nameValue}
          onChange={props.handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="bio">Biography: </label>
        <input
        readOnly={!props.editing}
          type="text"
          name="bio"
          className="form-control"
          placeholder="Aristocrat, actress and billionaire."
          value={props.bioValue}
          onChange={props.handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
        readOnly={!props.editing}
          type="email"
          name="email"
          className="form-control"
          placeholder="sara@example.com"
          value={props.emailValue}
          onChange={props.handleChange}
        ></input>
      </div>
      {/* <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          className="form-control"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="text"
          name="confirmpassword"
          className="form-control"
        ></input>
      </div> */}

      <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit}>
        {props.savedState ? "Profile Saved" : "Save Profile"} <GiSaveArrow />
      </button>

      <a
        // href="/edit"
        className="btn btn-primary"
        style={{ float: "right", color: "white"}}
        onClick={props.handleEditClick}
      >
        {props.editing ? "Editing Profile" : "Edit Profile"} <FiEdit2 />
      </a>
    </form>
  );
};

export default ProfileForm;
