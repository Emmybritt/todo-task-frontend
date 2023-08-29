import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myAxios } from "../../src/config/axios";
export type TodoAttr = {
	_id: string;
	title: string;
	description: string;
	priority: string;
	status: string;
	dueDate: string;
	archived: boolean;
	createdAt: string;
	updatedAt: string;
};

type InitialStateAttr = {
	todos: TodoAttr[];
	isLoading: boolean;
	isCreatingTodo: boolean;
	todo: TodoAttr | null;
	isDeletingTodo: boolean;
};

export type CreatTodoPayloadAttr = {
	title: string;
	description: string;
	priority: string;
	status: string;
	dueDate: string;
	archived: boolean;
};

const initialState: InitialStateAttr = {
	todos: [],
	isLoading: false,
	isCreatingTodo: false,
	todo: null,
	isDeletingTodo: false,
};

export const getTodo = createAsyncThunk("getTodo", async () => {
	try {
		const res = await myAxios.get("/todos");
		return res.data;
	} catch (error) {
		console.log(error);
	}
});

export const createTodo = createAsyncThunk("createTodo", async (action: CreatTodoPayloadAttr) => {
	try {
		const res = await myAxios.post("/create/todo", { ...action });
		if (res.data.status) {
			alert("Todo created succesfully");
		}
		return res.data;
	} catch (error) {
		alert("Something went wrong!!!");
	}
});

export const getTodoById = createAsyncThunk("getTodoById", async (action: string) => {
	try {
		const res = await myAxios.get(`/todo/${action}`);
		return res.data.result;
	} catch (error) {
		console.log(error);
	}
});

export const deleteTodo = createAsyncThunk("deleteTodoById", async (action: string) => {
	try {
		const res = await myAxios.delete(`/delete-todo/${action}`);
		if (res.data.status) {
			alert("Todo deleted successfully");
		} else {
			alert("Todo was not deleted");
		}
	} catch (error) {
		console.log(error);
		alert("An error occured while trying to delete a todo");
	}
});

export const TodoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createTodo.pending, (state) => {
			state.isCreatingTodo = true;
		});
		builder.addCase(createTodo.rejected, (state) => {
			state.isCreatingTodo = false;
		});
		builder.addCase(createTodo.fulfilled, (state) => {
			state.isCreatingTodo = false;
		});

		builder.addCase(getTodo.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getTodo.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(getTodo.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.todos = payload.todos;
		});
		builder.addCase(getTodoById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getTodoById.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(getTodoById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.todo = payload;
		});
		builder.addCase(deleteTodo.pending, (state) => {
			state.isDeletingTodo = true;
		});
		builder.addCase(deleteTodo.rejected, (state) => {
			state.isDeletingTodo = false;
		});
		builder.addCase(deleteTodo.fulfilled, (state) => {
			state.isDeletingTodo = false;
		});
	},
});

export default TodoSlice.reducer;
