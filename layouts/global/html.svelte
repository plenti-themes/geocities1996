<script>
	import { onMount } from 'svelte';
	import Head from './head.svelte';
	import Login from './login.svelte';
  
	export let content, layout, allContent, allLayouts, user, env;
  
	let hash;
	onMount(async () => {
	  hash = window.location.hash;
	});
  </script>
  
  <html lang="en">
	  <Head title="GeoCities 1996" {env} />
	  <body id="css-zen-garden">
		  {#if user && $user.isAuthenticated}
			  <svelte:component this={$user.menu} {user} bind:content={content} />
		  {/if}
		  <Login bind:hash {user} />
		  <main>
			  <svelte:component this={layout} {...content.fields} {allLayouts} />
		  </main>
	  </body>
  </html>
