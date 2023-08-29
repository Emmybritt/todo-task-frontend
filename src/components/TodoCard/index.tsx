import React from "react";
import { TodoAttr } from "../../../store/features/todoSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useTodo } from "../../hooks/useTodo";
import Button from "../Button";

const TodoCard: React.FC<TodoAttr> = ({ description, title, _id }) => {
	const { deletedTodo } = useTodo();
	return (
		<div
			style={{
				width: "70%",
				opacity: 2,
				border: "1px solid grey",
				padding: 8,
				borderRadius: 9,
			}}>
			<div style={{ color: "white", paddingLeft: 9, display: "flex", justifyContent: "space-between" }}>
				<div>
					<p>{title}</p>
					<p style={{ fontSize: 12, color: "#ddd" }}>{description}</p>
				</div>
				<div>
					<Button icon={<EditIcon color="primary" />} />
					<Button onClick={() => deletedTodo(_id)} icon={<DeleteOutlineOutlinedIcon color="error" />} />
				</div>
			</div>
		</div>
	);
};

export default TodoCard;
