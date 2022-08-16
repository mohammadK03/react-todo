import Todo from "./Todo";

const TodoList = ({ plans }) => {
    console.log(plans)
    return (
        <div className="todo-list-container container">
            { plans ? 
                (
                    plans.map((plan, i) => {
                        return (
                            <Todo 
                            key={i}
                            plan={plan}/>
                        )
                    })
                ) : 
                (
                    <p> هنوز برنامه ای نریختی! </p>
                ) 
            }
        </div>
    );
}
 
export default TodoList;