/* eslint-disable react/prop-types */
/**todos=[
 * {
 *  todos: "go to gym",
 *  description: "goto gym"
 * }
 * ]
 */

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button disabled={todo.completed}>
            {todo.completed ? "Completed" : "Mark as complete"}
          </button>
        </div>
      ))}
    </div>
  );
}
