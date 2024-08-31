<!-- @format -->
<script lang="ts">
	import { toggleTheme } from "../stores/themeStore";

	let darkModeValue: boolean;

	// Handle dark mode toggle
	const handleThemeToggle = () => {
		toggleTheme();
	};
</script>

<nav
	class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50"
>
	<div class="container mx-auto flex items-center justify-between p-4">
		<a
			href="/dashboard"
			class="text-2xl font-bold text-gray-900 dark:text-gray-100">To Do</a
		>
		<div class="space-x-4">
			<a
				href="/dashboard"
				class="text-gray-900 dark:text-gray-100 hover:underline">Dashboard</a
			>
			<a
				href="/register"
				class="text-gray-900 dark:text-gray-100 hover:underline">Register</a
			>
			<a href="/login" class="text-gray-900 dark:text-gray-100 hover:underline"
				>Login</a
			>
		</div>
		<button
			on:click={handleThemeToggle}
			class="p-2 bg-gray-200 dark:bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
		>
			{#if darkModeValue}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6 text-gray-900 dark:text-gray-100"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v9.75m-6.375-2.125a7.5 7.5 0 0112.75 4.75A7.5 7.5 0 015.625 12.625z"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6 text-gray-900 dark:text-gray-100"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v9.75m-6.375-2.125a7.5 7.5 0 0112.75 4.75A7.5 7.5 0 015.625 12.625z"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>

<!-- Add some padding to the top of the main content to avoid overlap with the fixed navbar -->
<style>
	main {
		padding-top: 4rem;
	}
</style>
