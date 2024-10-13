<script>
    export let heading, resources_links;
</script>

<div class="zen-resources" id="zen-resources">
    <div 
        style="background: url('{heading.gif}') 50% center no-repeat;"
        class="resources-title"
    >
            {heading.title}
    </div>
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

<style>
    .resources-title {
        min-height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ff009c;
        font-size: 1.5rem;
    }
</style>