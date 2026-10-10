<script lang="ts">
    export const prerender = true;
    
    import SvelteMarkdown from "@humanspeak/svelte-markdown";
    import {formatDate} from "$lib/utils/format-date.ts";

    export let data;

    let copiedIndex: number | null = null;
    let timer: number;

    async function copy(text: string, i: number) {
        try {
            await navigator.clipboard.writeText(text);
            copiedIndex = i;
            clearTimeout(timer);
            timer = setTimeout(() => (copiedIndex = null), 1500);
        } catch {
            copiedIndex = null;
        }
    }
</script>

<style>
    .content {
        width: 60em;
        max-width: 100%;
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
    }

    .clipboard-list {
        margin-top: 2em;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5em 2em;

        @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }

    .clipboards-item {
        h3 {
            margin-bottom: 0;
        }

        p {
            padding-left: 1.3em;
        }

        .description {
            font-style: italic;
        }
    }

    .clip-body {
        display: flex;
        align-items: flex-start;

        p {
            border: 1px dashed lightgrey;
            margin: 0.5em;
            padding: 0.5em;
            flex: 1;
            min-width: 0;
            text-align: left;
            overflow-wrap: anywhere;
        }

        button {
            flex-shrink: 0;
            cursor: pointer;
            font: inherit;
            font-size: 1.5em;
            padding: 0.2em;
            border: none;
            background-color: white;
        }
    }
</style>

<div class="content">
    <div class="title">
        <h1>clipboards</h1>
        <p>things i usually copy-paste goes here, hopefully super useful for you too</p>
    </div>
    <div class="body">
        {#await data.clipboards}
            <p>getting clipboards...</p>
        {:then items}
            {#if items.length > 0}
                <div class="clipboard-list">
                    {#each items as clipboard, i}
                        <div class="clipboards-item">
                            <h3>* {clipboard.title}</h3>
                            <div class="clip-body">
                                <p>{clipboard.body}</p>
                                <button type="button" on:click={() => copy(clipboard.body, i)}>
                                    {copiedIndex === i ? "📄" : "📋"}
                                </button>
                            </div>
                            <p class="description">{clipboard.description}</p>
                        </div>
                    {/each}
                </div>
            {:else}
                <p>it seems i have not written anything yet.</p>
            {/if}
        {:catch error}
            <p>whoops</p>
        {/await}
    </div>
</div>