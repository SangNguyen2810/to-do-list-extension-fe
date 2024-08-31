<script lang="ts">
  import { onMount } from 'svelte';
  import { isAuthenticated, checkAuth } from '../../stores/authStore';
  import { goto } from '$app/navigation';

  let authenticated: boolean;

  onMount(async () => {
    await checkAuth();
    isAuthenticated.subscribe(value => {
      authenticated = value;
      if (!authenticated) {
        goto('/login'); // Redirect to login if not authenticated
      }
    });
  });
</script>

<main class="p-8">
  <h1 class="text-3xl font-bold">Dashboard</h1>
  <!-- Dashboard content here -->
</main>