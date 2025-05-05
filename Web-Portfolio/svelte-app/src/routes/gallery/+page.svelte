<script>
    import { onMount } from 'svelte';

    import { base } from '$app/paths';

    onMount(() =>
    {
        console.log("Gallery Page Loaded");
    });
</script>

<h1>Gallery</h1>

<!-- Photo Grid-->
 <div class="row">
    <div class="column">
        <img src="{base}/alice.png" alt="alice">
        <img src="{base}/angel.png" alt="angel">
        <img src="{base}/calm.png" alt="calm">
        <img src="{base}/camera.png" alt="camera">
        <img src="{base}/crew.png" alt="crew">
        <img src="{base}/dance.png" alt="dance">
        <img src="{base}/deer.png" alt="deer">
        <img src="{base}/hoodie.png" alt="hoodie">
    </div>

    <div class="column">
        <img src="{base}/lark.png" alt="lark">
        <img src="{base}/law.png" alt="law">
        <img src="{base}/map.png" alt="map">
        <img src="{base}/morgan.png" alt="morgan">
        <img src="{base}/mushroom.png" alt="mushroom">
        <img src="{base}/myself.png" alt="myself">
        <img src="{base}/perspective.png" alt="perspective">
        <img src="{base}/royalty.png" alt="royalty">
    </div>

    <div class="column">
        <img src="{base}/salem.png" alt="salem">
        <img src="{base}/scott.png" alt="scott">
        <img src="{base}/siblings.png" alt="siblings">
        <img src="{base}/spirit.png" alt="spirit">
        <img src="{base}/surprise.png" alt="surprise">
        <img src="{base}/sword.png" alt="sword">
        <img src="{base}/vaska.png" alt="vaska">
        <img src="{base}/waiting.png" alt="waiting">
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