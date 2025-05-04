<script>
    
</script>

<header>
    <nav>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/">Home</a></li>
        </ul>
    </nav>
</header>

<main>
    <slot />
</main>

<footer>
    <p>&copy; 2025 Web Portfolio. All Rights Reserved</p>
</footer>

<style>
    nav ul
    {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #ffffff;
    }

    nav ul li
    {
        float: right;
    }

    nav ul li a
    {
        color: #000000;
        font-family: "Poetsen One", sans-serif;
        font-weight: bold;
        font-size: 25px;

        display: inline-block;
        text-align: center;
        padding: 15px 15px;
        text-decoration: none;
    }

    a:hover
    {
        background-color: tan;
    }

    main
    {
        padding: 10px;
        text-align: center;
    }

    footer
    {
        background: #ffffff;
        color: #000000;
        font-family: sans-serif;
        text-align: center;
        padding: 5px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>