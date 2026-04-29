<script lang="ts">
    // import favicon from '$lib/assets/favicon.svg';
    export const prerender = true;

    import favicon from "$lib/assets/origami-blank.png";
    import "@fontsource-variable/jetbrains-mono";
    import "@fontsource/redacted";
    import Menu from "$lib/components/menu.svelte";
    import { random, RandomType } from "$lib/utils/random";

    let { children, data } = $props();
    let today = $state(new Date());
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header>
    <!--    <div class='flavour'>-->
    <!--        <div class='left'>-->
    <!--            <p><a href='/' class='secret'>▲</a>  online</p>-->
    <!--        </div>-->
    <!--        <div class='right'>-->
    <!--            <p>WD&nbsp;&nbsp;&nbsp;&nbsp;25/6&nbsp;&nbsp;&nbsp;&nbsp;01</p>-->
    <!--            <p>PORT-2 - <span class='redacted'>{Math.floor(Math.random() * 1423)}</span></p>-->
    <!--        </div>-->
    <!--    </div>-->
    <div class="block">
        <div class="info">
            <div class="cat">
                <p>
                    ／l、<br />
                    （ﾟ､ ｡ ７<br />
                    　l、~ ヽ<br />
                    　ししと )ノ<br />
                </p>
            </div>
            <div class="name">
                <h3>ln2rworks</h3>
                <p>i do codes yes</p>
            </div>
        </div>
    </div>
</header>
<Menu />
{@render children?.()}
<footer>
    <a href="/auth" class="tag"
        >ln2rworks - {`${random(3, RandomType.LETTERS)}-${today.getUTCFullYear()}${today.getUTCMonth()}${today.getUTCDate()}-${random(12, RandomType.MIXED)}`}</a
    >
    <div class="cat">
        <p>
            ／l、&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            （ﾟ､ ｡ ７&nbsp;&nbsp;&nbsp;&nbsp;<br />
            　l、~ ヽ&nbsp;&nbsp;&nbsp;&nbsp;<br />
            　ししと )ノ&nbsp;<br />
        </p>
    </div>
</footer>

<style>
    :global(body) {
        font-family: "JetBrains Mono", monospace;
        font-size: medium;

        @media only screen and (max-width: 600px) {
            font-size: small;
        }

        h3,
        p,
        a {
            padding: 0;
            margin: 0;
        }
    }

    .info {
        padding-top: 5vh;
        padding-bottom: 2em;
        display: flex;
        text-align: justify;
        width: auto;
        justify-content: center;

        @media only screen and (max-width: 600px) {
            padding-top: 2em;
        }

        .cat {
            width: 7em;
            @media only screen and (max-width: 600px) {
                display: none;
            }
        }

        .name {
            width: 30em;

            @media only screen and (max-width: 600px) {
                margin-left: 0;
            }
        }
    }

    footer {
        position: fixed;
        font-weight: 100;
        bottom: 0;
        right: 0;
        width: 100%;
        text-align: right;
        margin: 0 4em 4em 0;
        color: darkgrey;

        @media (min-width: 950px) {
            z-index: -10;
        }

        .cat {
            @media (min-width: 950px) {
                display: none;
            }
        }

        .tag {
            color: lightslategray;
            font-size: small;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            text-decoration: none;
            margin: 0;

            @media only screen and (max-width: 600px) {
                display: none;
            }
        }
    }
</style>
