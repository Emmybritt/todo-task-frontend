import { FC } from "react";
import Input from "../../components/Input";
import { useTodo } from "../../hooks/useTodo";
import Button from "../../components/Button";

const TodoPage: FC = () => {
	const { error, handleChange, handleCreateTodo } = useTodo();

	return (
		<section className="movie-detail">
			<div className="">
				<figure className="movie-form-banner">
					<Input
						type="text"
						onChange={(e) => handleChange("title", e)}
						error={error?.title}
						placeholder="Enter todo title"
						withAsterisk
					/>
					<div style={{ marginTop: 20 }}>
						<Input
							type="textArea"
							placeholder="Enter todo description"
							onChange={(e) => handleChange("description", e)}
							error={error?.description}
							withAsterisk
						/>
					</div>

					<Input
						type="date"
						placeholder="Enter todo date"
						onChange={(e) => handleChange("dueDate", e)}
						error={error?.dueDate}
						withAsterisk
					/>

					<div style={{ position: "relative" }}>
						<Button
							onClick={handleCreateTodo}
							style={{
								width: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								marginTop: 30,
							}}
							className="btn btn-primary"
							title="Create Todo"
						/>
					</div>
				</figure>
			</div>
		</section>
	);
};

export default TodoPage;
