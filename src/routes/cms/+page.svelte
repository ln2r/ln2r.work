<script>
    import { formatDate } from "$lib/utils/format-date.ts";
    import { env } from "$env/dynamic/public";
    const { PUBLIC_API_BASE } = env;

    export let data;
</script>

<div class="content">
    <div class="list">
        <h2>projects</h2>
        <small><a href="/cms/works">add</a></small>
        {#await data.projects}
            <p>getting stuff i did...</p>
        {:then data}
            {#if data.length > 0}
                {#each data as project}
                    <div class="item">
                        <h3>
                            > <a href="/cms/works/{project.id}"
                                >{project.title}</a
                            >
                        </h3>
                        <small
                            >Delete - Update | Added: {formatDate(
                                project.created,
                            )}</small
                        >
                    </div>
                {/each}
            {:else}
                <p>it seems i have not did anything yet.</p>
            {/if}
        {:catch error}
            <p>the list seems broken... will get back to you soon.</p>
        {/await}
    </div>

    <div class="list">
        <h2>writings</h2>
        <small><a href="/cms/writings">write</a></small>
        {#await data.writings}
            <p>getting writings...</p>
        {:then data}
            {#if data.length > 0}
                {#each data as writing}
                    <div class="item">
                        <h3>
                            / <a href="/cms/writings/{writing.id}"
                                >{writing.title}</a
                            >
                        </h3>
                        <small>
                            Delete - <a href="/cms/writings/{writing.id}"
                                >Update</a
                            >
                            | Posted: {formatDate(writing.created)}</small
                        >
                    </div>
                {/each}
            {:else}
                <p>it seems i have not written anything yet.</p>
            {/if}
        {:catch error}
            <p>whoops</p>
        {/await}
    </div>

    <div class="list">
        <h2>clipboard</h2>
        <small><a href="/cms/clipboards">add</a></small>
        {#await data.clipboard}
            <p>getting stuff i did...</p>
        {:then data}
            {#if data.length > 0}
                {#each data as clipboard}
                    <div class="item">
                        <h3>
                            > <a href="/cms/clipboards/{clipboard.id}"
                                >{clipboard.title}</a
                            >
                        </h3>
                        <small
                            >Delete - Update | Added: {formatDate(
                                clipboard.created,
                            )}</small
                        >
                    </div>
                {/each}
            {:else}
                <p>it seems i have not did anything yet.</p>
            {/if}
        {:catch error}
            <p>the list seems broken... will get back to you soon.</p>
        {/await}
    </div>

    <div class="list">
        <h2>files</h2>
        <small>upload</small>
        {#await data.files}
            <p>getting files...</p>
        {:then data}
            {#if data.length > 0}
                {#each data as file}
                    <div class="item">
                        <h3>
                            * <a
                                href="{PUBLIC_API_BASE}/files/{file.key}"
                                target="_blank">{file.key}</a
                            >
                        </h3>
                        <small
                            >Delete | Uploaded: {formatDate(
                                file.created,
                            )}</small
                        >
                    </div>
                {/each}
            {:else}
                <p>it seems i have not uploaded anything yet.</p>
            {/if}
        {:catch error}
            <p>whoops</p>
        {/await}
    </div>
</div>

<style>
    .content {
        width: 45em;
        margin: 2em auto 4em auto;

        @media only screen and (max-width: 600px) {
            width: 100%;
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

    .item {
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
</style>
