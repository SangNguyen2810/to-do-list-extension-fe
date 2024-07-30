<script lang="ts">
  import styles from './Login.module.css';
  import { onMount } from "svelte";
  import { goto } from '$app/navigation';

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  function handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
    // You can send this token to your server for verification and to create a session.
    goto('/dashboard'); // Redirect to dashboard after login
  }

  onMount(() => {
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleCredentialResponse
      });
      // @ts-ignore
      google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"),
        { theme: "outline", size: "large" }
      );
    };
    document.body.appendChild(script);
  });
</script>

<div class={styles.login}>
	<div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
		<h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
		<div id="googleSignInButton" class="w-full"></div>
	</div>
</div>