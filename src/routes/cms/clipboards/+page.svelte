<script lang="ts">
    import { enhance } from "$app/forms";

    let title = "";
    let description = "";
    let body = "";
</script>

<div class="content-list"></div>
<form method="POST" use:enhance>
    <input placeholder="clipboard tile" bind:value={title} name="title" /><br />
    <input
        placeholder="body"
        bind:value={body}
        name="body"
    /><br />
    <input placeholder="description" bind:value={description} name="description" /><br />
    <button type="submit">save</button>
</form>
