<!-- @format -->
<script lang="ts">
	import { onMount } from "svelte";
	import { login } from "../../stores/authStore";
	import type { LoginData } from "../../types/auth";
  import { goto } from '$app/navigation';
	import Navbar from "../../components/Navbar.svelte";

	let username: string = "";
	let password: string = "";
  let loginError: string = '';

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) {
      goto('/dashboard'); // Redirect to dashboard on successful login
    } else {
      loginError = 'Invalid credentials. Please try again.';
    }
  };
</script>

<Navbar />
<main
	class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900"
>
	<div
		class="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
	>
		<h2 class="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
			Login
		</h2>

		<form on:submit|preventDefault={handleLogin} class="space-y-6">
			<div>
				<label
					for="username"
					class="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>Username</label
				>
				<input
					type="text"
					id="username"
					bind:value={username}
					class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-100"
				/>
			</div>

			<div>
				<label
					for="password"
					class="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>Password</label
				>
				<input
					type="password"
					id="password"
					bind:value={password}
					class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-100"
				/>
			</div>

			<button
				type="submit"
				class="w-full py-3 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				Login
			</button>
		</form>
	</div>
</main>
