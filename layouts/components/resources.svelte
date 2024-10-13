<script>
    export let title, resources_links;
</script>

<div class="zen-resources" id="zen-resources">
    <h3 class="resources">{title}</h3>
    <ul>
        {#each resources_links as link}
            <li class="{link.class}">
                <a href="{link.href}" title="{link.title}">
                    {@html link.text}
                </a>
            </li>
        {/each}
    </ul>
</div>