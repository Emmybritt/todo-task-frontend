import { useState } from "react";
import { CreatTodoPayloadAttr, createTodo, deleteTodo } from "../../store/features/todoSlice";
import { useAppDispatch } from "../../store/store";

export const useTodo = () => {
	const [form, setForm] = useState<CreatTodoPayloadAttr>();
	const [error, setError] = useState<CreatTodoPayloadAttr>();
	const dispatch = useAppDispatch();
	const handleChange = (name: string, val: string) => {
		if (!val) {
			return setError((prev: CreatTodoPayloadAttr) => ({
				...prev,
				[name]: `${name} is required`,
			}));
		}
		setError(null);
		setForm((prev: CreatTodoPayloadAttr) => ({
			...prev,
			[name]: val,
		}));
	};

	const handleCreateTodo = () => {
		const object = { ...form, status: "active", archived: false, priority: "high" };
		console.log(object);
		dispatch(createTodo(object));
	};

	const deletedTodo = (todoId: string) => {
		dispatch(deleteTodo(todoId));
	};
	return {
		form,
		setForm,
		error,
		setError,
		handleChange,
		handleCreateTodo,
		deletedTodo,
	};
};
