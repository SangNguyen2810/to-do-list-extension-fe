<!-- @format -->
<script>
	let darkMode = false;

	function toggleDarkMode() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}
</script>

<button
	class="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
	on:click={toggleDarkMode}
>
	{#if darkMode}
		☀️ Light Mode
	{:else}
		🌙 Dark Mode
	{/if}
</button>

<main class="flex justify-center items-center h-screen dark:bg-gray-900">
	<slot />
</main>
