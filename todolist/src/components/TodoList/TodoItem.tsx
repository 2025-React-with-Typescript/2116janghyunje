import {type Todo} from "../../App";
import {FaRegTrashAlt, FaRegCheckCircle, FaRegCircle} from "react-icons/fa"

interface TodoItemProps{
    todo: Todo;
}

const TodoItem = ({todo}:TodoItemProps) => {
    return (
        <div>
            {todo.completed ?(
                <button>
                    <FaRegCheckCircle />
                </button>
            ) : (
                <button>
                    <FaRegCircle />
                </button>
            )} 
            <p>{todo.content}</p>
            <button>
                <FaRegTrashAlt />
            </button>
        </div>
    )
}

export default TodoItem;