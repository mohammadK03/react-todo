const Todo = ({ plan }) => {
    return (
        <div className="todo">
            <h3>{ plan.title }</h3>
            <p>{ plan.description }</p>
        </div>
    );
}
 
export default Todo;