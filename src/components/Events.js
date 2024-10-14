import Event from './Event'

const Todo = ({ event, onDelete, onToggle }) => {
    return (
        <>
           {event.map((list) => (
           <Event key={list.id} list={list} 
           onDelete={onDelete} 
           onToggle={onToggle}/>
           ))}
        </>
    )
}

export default Todo
