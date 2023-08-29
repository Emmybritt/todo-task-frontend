import { useEffect, useState } from "react";
import { CreatTodoPayloadAttr, createTodo, deleteTodo, getTodo } from "../../store/features/todoSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export const useTodo = () => {
	const [form, setForm] = useState<CreatTodoPayloadAttr>();
	const [error, setError] = useState<CreatTodoPayloadAttr>();
	const { isCreatingTodo, isDeletingTodo, isLoading, todos, todo } = useAppSelector((store) => store.todo);
	const dispatch = useAppDispatch();
	const handleChange = (name: string, val: string | Date) => {
		if (val == "") {
			setError((prev: CreatTodoPayloadAttr) => ({
				...prev,
				[name]: `${name} is required`,
			}));
			setForm(null);
			return;
		}
		setError(null);
		setForm((prev: CreatTodoPayloadAttr) => ({
			...prev,
			[name]: val,
		}));
	};

	useEffect(() => {
		dispatch(getTodo());
	}, []);

	const handleCreateTodo = () => {
		const object = { ...form, status: "active", archived: false, priority: "high" };
		dispatch(createTodo(object)).then(() => {});
	};

	const deletedTodo = (todoId: string) => {
		console.log(todoId);
		if (window.confirm("Are you sure you want to delete this todo")) {
			dispatch(deleteTodo(todoId));
		}
	};
	return {
		form,
		setForm,
		error,
		setError,
		handleChange,
		handleCreateTodo,
		deletedTodo,
		isCreatingTodo,
		isDeletingTodo,
		isLoading,
		todos,
		todo,
	};
};
