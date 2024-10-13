<script>
    export let title, design_archives_links;
</script>

<div class="design-archives" id="design-archives">
    <h3 class="archives">{title}</h3>
    <nav role="navigation">
        <ul>
            {#each design_archives_links as link}
                <li class="{link.class}">
                    <a href="{link.href}" title="{link.title}">
                        {link.text}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</div>