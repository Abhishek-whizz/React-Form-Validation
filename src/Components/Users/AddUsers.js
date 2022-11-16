import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "Invalid", message: "Please enter correct name" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid age", message: "Please enter correct age" });
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">UserName:</label>
          <input
            id="username"
            type="text"
            onChange={userNameHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            onChange={ageHandler}
            value={enteredAge}
          />
          <Button type="submit">Add Users </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
