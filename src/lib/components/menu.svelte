<script>
</script>

<style>
    .menu {
        border-top: 1px solid darkgray;
        text-align: center;
        margin: 0 auto 0 auto;
        max-width: 45em;

        @media only screen and (max-width: 600px) {
            font-size: small;
        }
        ul {
            justify-content: center;
            padding: 0;
            display: flex;
            list-style: none;

            li {
                text-align: center;
                margin: 0 1em 0 1em;

                a {
                    color: cornflowerblue;
                    text-decoration: none;
                }

                a:hover {
                    color: royalblue;
                }
            }
        }
    }
</style>

<div class="menu">
    <ul>
        <li><a href="/">home</a></li>
        <li><a href="/blog">writings</a></li>
        <li><a href="/clipboards">clipboard</a></li>
        <li><a href="https://github.com/ln2r">github</a></li>
    </ul>
</div>