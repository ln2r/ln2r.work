import { Auth } from "$lib/utils/apis/auth";
import { Clipboard } from "$lib/utils/apis/clipboard";
import { File } from "$lib/utils/apis/files";
import { Work } from "$lib/utils/apis/works";
import { Writing } from "$lib/utils/apis/writings";
import { Session } from "$lib/utils/session";

// @ts-ignore
export const load = async ({ fetch, cookies }) => {
    const session = new Session(fetch, cookies);
    const auth = new Auth(fetch, undefined, session);
    const writing = new Writing(fetch);
    const file = new File(session);
    const work = new Work(fetch);
    const clipboard = new Clipboard(fetch);

    return {
        projects: await work.list(),
        writings: await writing.list(),
        files: await file.list(),
        clipboard: await clipboard.list(),
        user: await auth.me(),
    };
};
