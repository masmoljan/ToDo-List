import { FaTimesCircle, FaCheck } from 'react-icons/fa'

const TodoTask = ({ list, onDelete, onToggle }) => {
    return (
        <div className={`event ${list.done ? 'done' : ''}`} >
            <h3>{list.text}
            <span className="fa-stack">
                <span title="Mark as done">
                    <FaCheck style={{color: 'green', marginLeft: "6px"}} onClick={() => onToggle(list.id)}/>
                </span>
                <span title="Delete event">
                    <FaTimesCircle style={{color: 'red', marginLeft: "6px"}} onClick={() => onDelete(list.id)}/>
                </span>
            </span>
            </h3>
            <p>{list.date}</p>
        </div>
    )
}

export default TodoTask
