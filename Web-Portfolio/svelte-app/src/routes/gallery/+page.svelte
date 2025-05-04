<script>
    import { onMount } from 'svelte';

    onMount(() =>
    {
        console.log("Gallery Page Loaded");
    });
</script>

<h1>Gallery</h1>

<!-- Photo Grid-->
 <div class="row">
    <div class="column">
        <img src="alice.png" alt="alice">
        <img src="angel.png" alt="angel">
        <img src="calm.png" alt="calm">
        <img src="camera.png" alt="camera">
        <img src="crew.png" alt="crew">
        <img src="dance.png" alt="dance">
        <img src="deer.png" alt="deer">
        <img src="hoodie.png" alt="hoodie">
    </div>

    <div class="column">
        <img src="lark.png" alt="lark">
        <img src="law.png" alt="law">
        <img src="map.png" alt="map">
        <img src="morgan.png" alt="morgan">
        <img src="mushroom.png" alt="mushroom">
        <img src="myself.png" alt="myself">
        <img src="perspective.png" alt="perspective">
        <img src="royalty.png" alt="royalty">
    </div>

    <div class="column">
        <img src="salem.png" alt="salem">
        <img src="scott.png" alt="scott">
        <img src="siblings.png" alt="siblings">
        <img src="spirit.png" alt="spirit">
        <img src="surprise.png" alt="surprise">
        <img src="sword.png" alt="sword">
        <img src="vaska.png" alt="vaska">
        <img src="waiting.png" alt="waiting">
    </div>
 </div>

<style>
    h1
    {
        font-family: "Poetsen One", sans-serif;
        font-size: 50px;
    }

    *
    {
        box-sizing: border-box;
    }

    .row
    {
        display: flex;
        flex-wrap: wrap;
        padding: 0 5px;
    }

    .column
    {
        flex: 30%;
        max-width: 35%;
        padding: 0 5px;
    }

    .column img
    {
        margin-top: 10px;
        vertical-align: middle;
        width: 100%;
    }

    @media screen and (max-width: 800px) 
    {
        .column 
        {
            flex: 50%;
            max-width: 50%;
        }
    }

    @media screen and (max-width: 600px) 
    {
        .column 
        {
            flex: 100%;
            max-width: 100%;
        }
    }
</style>