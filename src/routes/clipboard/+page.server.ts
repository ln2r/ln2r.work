import { Clipboard } from '$lib/utils/apis/clipboard'

export const load = async ({ fetch }) => {
    const clipboards = new Clipboard(fetch);

    return {
        clipboards: await clipboards.list(),
    };
}
