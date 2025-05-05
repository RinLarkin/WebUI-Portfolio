<script>
    import { onMount } from 'svelte';

    import { base } from '$app/paths';

    onMount(() =>
    {
        console.log("About Page Loaded");
    });
</script>

<img src="{base}/profile.png" alt="Profile">

<h1>About Me</h1>

<div>
    <p>Hi, the name's Rin Larkin, a photographer and digital artist, based in the medieval city of Kilkenny, Ireland. I've been taking photos all my life, but started taking the hobby seriously in 2026; attending several photography courses to improve my skills, to the point of taking photos professionaly.</p>

    <p>As for digital art, it's been a passion since the early teenage years, slowly developing my skills, and upgrading my equipment from a mouse and MS Paint, to a graphics tablet with a screen, and Clip Studio Paint. Now, it's my goal to become a professional concept artist.</p>
</div>

<style>
    h1
    {
        font-family: "Poetsen One", sans-serif;
        font-size: 75px;
        padding-top: 100px;
        padding-right: 150px;
    }

    img
    {
        width: 35%;
        float: left;
        padding-top: 50px;
        padding-right: 150px;
        padding-left: 50px;
        vertical-align: middle;
    }

    p
    {
        font-family: sans-serif;
        font-size: 25px;
        text-align: justify;
        padding-right: 150px;
    }

    div
    {
        padding-top: 25px;
    }
</style>