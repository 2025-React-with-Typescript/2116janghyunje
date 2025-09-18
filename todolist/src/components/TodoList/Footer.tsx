import {type TabState, type Todo} from "../../App"

interface FooterProps {
    todos: Todo[];
    currentTab: TabState;
}

const Footer = ({todos}: FooterProps)=> {
    return (
        <div>
            <p>{todos.filter((todo)=> !todo.completed).length}left</p>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            {todos.some((todo)=> todo.completed) && <button>Clear completed</button>}
        </div>
    )
}

export default Footer;