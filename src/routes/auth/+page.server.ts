import { redirect } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
const { SECRET_GITHUB_CLIENT_ID } = env;

export function load() {
    const params = new URLSearchParams({
        client_id: SECRET_GITHUB_CLIENT_ID,
        scope: "user:email",
    });

    redirect(307, `https://github.com/login/oauth/authorize?${params}`);
}
