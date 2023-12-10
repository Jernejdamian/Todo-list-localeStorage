import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {

  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
  };
  
  return (
    <form
      onSubmit={onFormSubmit}
      className="form">
      <input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?" />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
}

export default Form;