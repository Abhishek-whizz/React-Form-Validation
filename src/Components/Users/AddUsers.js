import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  // const userNameHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enterName = nameInputRef.current.value;
    const enterAge = ageInputRef.current.value;
    if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({ title: "Invalid", message: "Please enter correct name" });
      return;
    }
    if (+enterAge < 1) {
      setError({ title: "Invalid age", message: "Please enter correct age" });
      return;
    }

    props.onAddUser(enterName, enterAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUserName("");
    // setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            // onChange={userNameHandler}
            // value={enteredUserName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            // onChange={ageHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add Users </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
