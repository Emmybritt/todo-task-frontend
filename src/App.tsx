import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoDetailsPage from "./pages/TodoPage";
import NoMatch from "./pages/NoMatch";
import TodoPage from "./pages/TodoPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/">
					<Route path="" element={<TodoPage />} />
					<Route path="/view-todo/:id" element={<TodoDetailsPage />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
