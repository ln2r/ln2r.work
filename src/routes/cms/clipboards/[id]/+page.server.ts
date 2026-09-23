import { Auth } from "$lib/utils/apis/auth";
import { Clipboard, type ClipboardUpdate } from "$lib/utils/apis/clipboard.js";
import { Session } from "$lib/utils/session";

export async function load({ fetch, params, cookies }) {
    const session = new Session(fetch, cookies);
    const auth = new Auth(fetch, undefined, session);
    const clipboard = new Clipboard(fetch, session);

    return {
        session: await auth.me(),
        clipboard: await clipboard.getOneById(params.id),
    };
}

export const actions = {
    default: async ({ request, fetch, params, cookies }) => {
        const session = new Session(fetch, cookies);
        const clipboard = new Clipboard(fetch, session);

        const data = await request.formData();

        const title = data.get("title");
        const body = data.get("body");
        const description = data.get("description");

        if (!title) throw new Error("title required");
        if (!body) throw new Error("description required");

        const payload: ClipboardUpdate = {
            id: params.id,
            title: title?.toString(),
            body: body?.toString(),
            description: description?.toString() === "" ? null : description?.toString(),
        };

        const res = await clipboard.update(params.id, payload);

        return res;
    },
};
