import { FC } from "react";
import Input from "../Input";
import Button from "../../components/Button";
import { useTodo } from "../../hooks/useTodo";

const AddTodoForm: FC = () => {
	const { error, handleChange, handleCreateTodo, isCreatingTodo, form } = useTodo();

	return (
		<>
			<div className="">
				<figure className="movie-form-banner">
					<Input
						type="text"
						onChange={(e) => handleChange("title", e)}
						error={error?.title}
						placeholder="Enter todo title"
						withAsterisk
						value={form?.title}
					/>
					<div style={{ marginTop: 20, marginBottom: 15 }}>
						<Input
							type="textArea"
							placeholder="Enter todo description"
							onChange={(e) => handleChange("description", e)}
							error={error?.description}
							withAsterisk
							value={form?.description}
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
								marginTop: 50,
							}}
							className="btn btn-primary"
							title={isCreatingTodo ? "Creating Todo..." : "Create Todo"}
						/>
					</div>
				</figure>
			</div>
		</>
	);
};

export default AddTodoForm;
