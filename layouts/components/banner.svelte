<script>
    export let title, banner_desc;
</script>

<header role="banner">
    {#if title}
        <div class="colorful-title">{title}</div>
    {:else}
        <h1>{title}</h1>
    {/if}
    <h2>{@html banner_desc}</h2>
</header>

<style>
    /*
    .colorful-title {
        background: url('media/colorful.jpg') no-repeat 0;
        padding-top: 20px;
        height: 80px;
        margin: 0 auto;
    }
    */
    .colorful-title {
        background: radial-gradient(red, blue, yellow, transparent);
        min-height: 80px;
        padding-top: 20px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
</style>