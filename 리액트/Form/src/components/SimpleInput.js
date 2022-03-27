import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const inputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValue, setEnteredNameIsValue] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValue) {
      console.log("aa");
    }
  }, [enteredNameIsValue]);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValue(false);
      setEnteredNameIsTouched(true);
      return;
    }

    setEnteredNameIsValue(true);

    const enteredValue = inputRef.current.value;

    console.log(enteredValue);
  };

  const enteredCondition = !enteredNameIsValue && enteredNameIsTouched;

  return (
    <form>
      <div
        className={enteredCondition ? "form-control invalid" : "form-control"}
      >
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      {enteredCondition && <p className="error-text">이름을 입력해주세요</p>}
      <div className="form-actions">
        <button onClick={formSubmissionHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
