<!-- @format -->
<script lang="ts">
	import { onMount } from "svelte";
	import { isAuthenticated, checkAuth } from "../stores/authStore";
	import { goto } from "$app/navigation";

	let authenticated: boolean;

	onMount(async () => {
		await checkAuth();
		isAuthenticated.subscribe((value) => {
			authenticated = value;
			if (authenticated) {
				goto("/dashboard"); // Redirect to dashboard if logged in
			} else {
				goto("/login"); // Redirect to login if not logged in
			}
		});
	});
</script>
<main>
	<slot></slot>
	<!-- Page content will be rendered here -->
</main>
