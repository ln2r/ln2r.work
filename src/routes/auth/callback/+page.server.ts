import { Mugunghwa } from "$lib/utils/mugunghwa";
import { redirect } from "@sveltejs/kit";

let mugunghwa = new Mugunghwa();

export async function load({ url, cookies }) {
    const code = url.searchParams.get("code");

    if (!code) {
        redirect(304, "/");
    }

    const res = await mugunghwa.authCallback(code);

    if (res.error) {
        redirect(304, "/");
    }

    cookies.set("accessToken", res.accessToken, { path: "/", secure: false });
    cookies.set("refreshToken", res.refreshToken, { path: "/", secure: false });

    redirect(302, "/");
}
