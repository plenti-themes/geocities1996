<script>
	export let components;
</script>

<div class="page-wrapper">
	{#if components}
		{#each components as { name, fields }}
			<svelte:component this="{allLayouts["layouts_components_" + name + "_svelte"]}" {...fields} />
		{/each}
	{/if}
</div>