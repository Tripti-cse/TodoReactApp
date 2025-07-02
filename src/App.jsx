import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import Container from "./components/Container";
function App() {
const [todoItems,setTodoItems] = useState([]);

const handleNewItem = (itemName,itemDueDate)=> {
  const newTodoItems=[
    ...todoItems,
    { 
      id: Date.now(),
      name: itemName,
      dueDate: itemDueDate,
    },
  ];
  setTodoItems(newTodoItems);
};

const handleDeleteItem =(todoItemId) =>{
  const newTodoItems =todoItems.filter((item)=>item.id!==todoItemId);
  setTodoItems(newTodoItems);
};
  return (
      <Container>
  <center className="todo-container">
     <AppName />
     <AddTodo onNewItem={handleNewItem}/>
     {todoItems.length ===0 &&<WelcomeMessage/> }
     <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
  </center>
  </Container>
  );
}

export default App;
