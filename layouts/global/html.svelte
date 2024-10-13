<script>
  import Head from './head.svelte';

  export let content, layout, env;
</script>

<html lang="en">
	<Head title="GeoCities 1996" {env} />
	<body id="css-zen-garden">
		<main>
			<svelte:component this={layout} {...content.fields} />
		</main>
	</body>
</html>
