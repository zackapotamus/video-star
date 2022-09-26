import React, { useState } from "react";

function DeleteButton(props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  return (
    <>
      <button
        type="button"
        className={`btn ${confirmDelete ? "btn-danger" : "btn-outline-danger"}`}
        onClick={
          confirmDelete ? props.handleDelete : () => setConfirmDelete(true)
        }
      >
        Delete
      </button>
      {confirmDelete ? (
        <button
          type="button"
          disabled={!confirmDelete}
          className="btn btn-success"
          onClick={() => setConfirmDelete(false)}
        >
          Cancel
        </button>
      ) : 
        <></>
      }
    </>
  );
}

export default DeleteButton;
