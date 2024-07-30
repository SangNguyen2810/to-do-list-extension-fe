<script lang="ts">
	import { onMount } from 'svelte';
	import type { Task } from '../../types/to-do';

	let todos: Task[] = [];

	onMount(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
		if (storedTodos) {
			todos = storedTodos;
		}
	});

	function addTodo() {
		if (newTodo.trim() !== '') {
			const newTodoItem: Task = {
				id: `Date.now().toString()`,
				title: "",
				description: "",
				completed: false,
			};
			todos = [...todos, newTodoItem];
			newTodo = '';
			updateLocalStorage();
		}
	}

	function removeTodo(id: string) {
		todos = todos.filter(todo => todo.id !== id);
		updateLocalStorage();
	}

	function toggleTodoCompletion(id: string) {
		todos = todos.map(todo =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
		updateLocalStorage();
	}

	function updateLocalStorage() {
		localStorage.setItem('todos', JSON.stringify(todos));
	}
</script>

<style>
  .completed {
    text-decoration: line-through;
    color: gray;
  }
</style>

<main class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
	<h1 class="text-2xl font-bold text-center mb-4">Todo List</h1>
	<div class="flex mb-4">
		<input bind:value={newTodo} placeholder="Add a new task" class="flex-grow p-2 border rounded-l-lg" />
		<button on:click={addTodo} class="bg-blue-500 text-white p-2 rounded-r-lg">Add</button>
	</div>
	<ul>
		{#each todos as todo (todo.id)}
			<li class="flex justify-between items-center p-2 border-b">
				<span class:completed={todo.completed}>{todo.text}</span>
				<div class="flex space-x-2">
					<button class="bg-green-500 text-white p-2 rounded" on:click={() => toggleTodoCompletion(todo.id)}>
						{todo.completed ? 'Undo' : 'Complete'}
					</button>
					<button class="bg-red-500 text-white p-2 rounded" on:click={() => removeTodo(todo.id)}>Remove</button>
				</div>
			</li>
		{/each}
	</ul>
</main>