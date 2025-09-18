import {type TabState, type Todo} from "../../App";
import Header from "./Header"
import TodoItem from "./TodoItem";
import Footer from "./Footer";

interface TodoProps {
    todos: Todo[];
    currentTab : TabState;
}

const TodoList = ({todos, currentTab}: TodoProps) => {
    return (
        <div>
            <Header />
            {todos.map((todo) => (
                <TodoItem key = {todo.id} todo={todo}/>
            ))}
            <Footer todos={todos} currentTab={currentTab} />
        </div>
    )
}

export default TodoList;