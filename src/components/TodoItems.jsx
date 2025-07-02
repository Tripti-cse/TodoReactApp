import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems =({todoItems,onDeleteClick})=>
{
    return(
     <div className={styles.itemsContainer}>
        {todoItems.map((item)=>(
         <TodoItem  
          id={item.id}
          todoName={item.name}
          todoDate= {item.dueDate}
         onDeleteClick={onDeleteClick}></TodoItem>
       ) )}
     </div>
    );
};
export default TodoItems;