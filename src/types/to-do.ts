export type Task = {
	id: number,
	title: string,
	description: string,
	completed: boolean,
	tag?: Tag
}

export type Tag = {
	id: number,
	title: string,
	color?: string,
}