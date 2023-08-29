import { Select, Switch, TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";

import { FC } from "react";
type DataAttr = {
	value: string;
	label: string;
};
type InputAttr = {
	placeholder?: string;
	label?: string;
	withAsterisk?: boolean;
	type: "text" | "select" | "textArea" | "file" | "number" | "date" | "switch";
	data?: DataAttr[];
	multitple?: boolean;
	minRows?: number;
	maxRows?: number;
	onChange?: (e: string | Date) => void;
	error?: string;
	dateValue?: Date | null;
	value?: string;
};

const Input: FC<InputAttr> = ({
	placeholder,
	label,
	withAsterisk,
	type,
	data,
	multitple,
	maxRows,
	minRows,
	onChange = () => {},
	error,
	dateValue,
	value,
}) => {
	return (
		<>
			<div>
				{type === "text" && (
					<TextInput
						onChange={(e) => onChange(e.target.value)}
						styles={{ input: { padding: 23 } }}
						placeholder={placeholder}
						label={label}
						withAsterisk={withAsterisk}
						value={value}
					/>
				)}
				{type === "number" && (
					<TextInput
						type="number"
						onChange={(e) => onChange(e.target.value)}
						styles={{ input: { padding: 23 } }}
						placeholder={placeholder}
						label={label}
						value={value}
						withAsterisk={withAsterisk}
					/>
				)}
				{type === "select" && (
					<Select
						styles={{ input: { padding: 23 } }}
						label={label}
						onChange={(e) => onChange(e || "")}
						placeholder={placeholder}
						data={data ?? []}
						multiple={multitple}
						value={value}
					/>
				)}

				{type === "textArea" && (
					<Textarea
						label={label}
						onChange={(e) => onChange(e.target.value)}
						placeholder={placeholder}
						autosize
						minRows={minRows}
						maxRows={maxRows}
						value={value}
					/>
				)}
				{type === "date" && (
					<DateInput
						value={dateValue}
						onChange={(e) => onChange(e)}
						styles={{ input: { padding: 23 } }}
						label={label}
						placeholder={placeholder}
					/>
				)}

				{type === "switch" && <Switch label={label} onChange={(e) => onChange(e.target.value)} />}
				<p style={{ color: "white", fontSize: 12 }}>{error && error}</p>
			</div>
		</>
	);
};

export default Input;
