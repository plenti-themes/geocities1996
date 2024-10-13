<script>
    export let title, design_selection_links;
</script>

<div class="design-selection" id="design-selection">
    {#if title}
        <h3 class="select">{title}</h3>
    {/if}
    <nav role="navigation">
        <ul>
            {#each design_selection_links as link}
                <li>
                    <a href="{link.design.href}" class="{link.design.class}">{link.design.name}</a>
                    by
                    <a href="{link.designer.href}" class="{link.designer.class}">{link.designer.name}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>