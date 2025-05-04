<script>
    import { onMount } from 'svelte';

    onMount(() =>
    {
        console.log("Home Page Loaded");
    });
</script>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
    <div>
        <img src="logo.png" alt="Website Logo">;
    </div>
</body>

<style>
    body
    {
        background-color: #ffe6a0;
    }

    img
    {
        padding-left: 500px;
    }
</style>