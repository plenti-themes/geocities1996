<script>
    export let footer_links;
</script>

<footer>
    {#each footer_links as link}
        <a href="{link.href}" title="{link.title}" class="{link.class}">{link.text}</a>
    {/each}
</footer>