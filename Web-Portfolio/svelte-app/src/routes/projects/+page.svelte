<script>
    import { onMount } from 'svelte';

    onMount(() =>
    {
        console.log("Project Page Loaded");
    });
</script>

<h1>Projects</h1>

<div class="gallery">
    <img src="grafitti.png" alt="grafitti artist">
    <div class="title">People of the Streets</div>
</div>
    
<div class="gallery">
    <a href="/gallery"><img src="harper.png" alt="man"></a>
    <div class="title">Original Story Concept</div>
</div>

<div class="gallery">
    <img src="sunflower.png" alt="woman">
    <div class="title">Portraits of People</div>
</div>

<style>
    h1
    {
        font-family: "Poetsen One", sans-serif;
        font-size: 50px;
    }

    .gallery
    {
        float: left;
        width: 30%;
        padding: 20px;
        padding-left: 35px;
    }

    .gallery img
    {
        width: 100%;
        height: auto;
    }

    .title
    {
        padding: 10px;
        text-align: center;
        font-family: sans-serif;
        font-size: 50px;
    }
</style>