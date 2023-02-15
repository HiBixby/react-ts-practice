import { useSelector } from "react-redux";

interface Todo {
  id: number;
  timestamp: number;
  title: string;
  link: string;
  noti: boolean;
}

const TodosList = () => {
  const todos: Todo[] =
    useSelector((state: { todos: Todo[] }) => state.todos) || [];

  const renderedTodos: JSX.Element[] = todos.map((todo: Todo) => (
    <div key={todo.id}>{todo.title}</div>
  ));

  return <>{renderedTodos}</>;
};

export default TodosList;
