import { useState } from "react";

function AddTodo ({onNewItem}) {

  const [todoName, setTodoName]=useState("");
  const [dueDate,setDueDate] = useState("");

  const handleNameChange =(event) =>{
   setTodoName(event.target.value);
  }
   const handleDateChange =(event) =>{
   setDueDate(event.target.value);
  };

  const handleAddBtnClick =()=>{
    onNewItem(todoName,dueDate);
    setTodoName("");
    setDueDate("");
  };

    return (
    <div className="container text-center">
  <div className="row rowbtn">
    <div className="col-6">
    <input type="text" placeholder="Enter Your Todo's"
    value={todoName} onChange={handleNameChange}/></div>
    <div className="col-4">
    <input type ="date"value={dueDate} onChange={handleDateChange}/></div>
    <div className="col-2">
    <button type="button" className="btn btn-success" 
    onClick={handleAddBtnClick}>Add
      </button></div>
  </div>
  </div>
    );
}

export default AddTodo;