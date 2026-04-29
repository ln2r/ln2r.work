<script>
    import SvelteMarkdown from "@humanspeak/svelte-markdown";
    import { formatDate } from "$lib/utils/format-date.ts";

    export let data;
</script>

<svelte:head>
    <title>ln2rworks</title>
</svelte:head>

<div class="content">
    <p>
        heavily and mainly doing backend nodejs stuff, from professional use
        (work) to silly random app i make to make things easier. outside codes i
        love to play games, watch movies/anime, and read books.
    </p>

    <div class="project-list">
        <h2>stuff i did</h2>
        {#await data.projects}
            <p>getting stuff i did...</p>
        {:then data}
            {#if data.length > 0 && data[0].length > 0}
                {#each data as group}
                    <div class="project-row">
                        {#each group as project}
                            <div class="project-item">
                                <h3>
                                    > <a href={project.url}>{project.title}</a>
                                </h3>
                                <p>
                                    {project.description ??
                                        "no description added"}
                                </p>
                                <br />
                                <small>{project.stacks}</small>
                            </div>
                        {/each}
                    </div>
                {/each}
            {:else}
                <p>it seems i have not did anything yet.</p>
            {/if}
        {:catch error}
            <p>the list seems broken... will get back to you soon.</p>
        {/await}
    </div>

    <div class="writing-list">
        <h2>writings</h2>
        {#await data.writings}
            <p>getting writings...</p>
        {:then data}
            {#if data.length > 0}
                {#each data as writing}
                    <div class="writing-item">
                        <h3>
                            / <a href="/blog/{writing.slug}">{writing.title}</a>
                        </h3>
                        <small>Posted: {formatDate(writing.created)}</small>
                        <p>
                            <SvelteMarkdown
                                source={writing.body.slice(0, 50) + "..."}
                            />
                        </p>
                    </div>
                {/each}
            {:else}
                <p>it seems i have not written anything yet.</p>
            {/if}
        {:catch error}
            <p>whoops</p>
        {/await}
    </div>

    <div class="contact-list">
        <h2>contacts</h2>
        <div class="contact-item">
            <p>
                <a href="https://discord.com/users/132712988875423745"
                    >discord</a
                >
            </p>
        </div>
    </div>
</div>

<style>
    .content {
        width: 45em;
        margin: 4em auto 4em auto;

        @media only screen and (max-width: 600px) {
            width: 100%;
            font-size: small;
        }
    }

    .project-list,
    .writing-list,
    .contact-list {
        margin-top: 3em;
    }

    .project-item,
    .contact-item {
        h3 {
            margin: 0;
        }

        p {
            margin-top: 1em;
            text-align: left;
        }

        small {
            color: cornflowerblue;
        }
    }

    .project-row {
        width: auto;
        display: flex;

        .project-item {
            width: 50%;
            padding: 1em;
        }
    }

    .writing-item {
        h3 {
            margin-bottom: 0;
        }

        p,
        small {
            padding-left: 1.3em;
        }

        p {
            font-style: italic;
        }
    }

    div {
        p {
            text-align: justify;
            margin: 0;
        }
        a {
            text-decoration: none;
        }
    }
</style>
