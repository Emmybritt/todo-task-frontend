import { FC } from "react";
import AddTodoForm from "../../components/AddTodoForm";
import { useTodo } from "../../hooks/useTodo";
import TodoCard from "../../components/TodoCard";

const TodoPage: FC = () => {
	const { todos } = useTodo();
	console.log(todos);

	return (
		<section className="movie-detail">
			<AddTodoForm />
			<section className="movie-detail">
				<div className="">
					<figure className="movie-form-banner"></figure>
				</div>
				{todos.map((todo) => {
					return (
						<TodoCard
							archived={todo.archived}
							title={todo.title}
							description={todo.description}
							dueDate={todo.dueDate}
							priority={todo.priority}
							status={todo.status}
							_id={todo._id}
							key={todo._id}
							createdAt={todo.createdAt}
							updatedAt={todo.updatedAt}
						/>
					);
				})}
			</section>
		</section>
	);
};

export default TodoPage;
