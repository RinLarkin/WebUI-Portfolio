<script>
    import { onMount } from 'svelte';

    onMount(() =>
    {
        console.log("Portfolio Page Loaded");
    });
</script>

<div>
    <h1><a href="/projects">Projects</a></h1>
</div>

<div>
    <h1><a href="/gallery">Gallery</a></h1>
</div>

<style>
    h1
    {
        font-family: "Poetsen One", sans-serif;
        font-size: 100px;
    }

    div
    {
        float: left;
        width: 50%;
        padding-top: 15%;
    }

    a
    {
        color: black;
        text-decoration: none;
    }

    a:hover
    {
        color: white;
    }
</style>